import { useRef, useCallback, useEffect } from 'react'
import { genreAudioSamples } from '../data/genreAudioSamples'

export function useAudioEngine() {
  const audioContextRef = useRef<AudioContext | null>(null)
  const audioBuffersRef = useRef<Map<string, AudioBuffer>>(new Map())
  const isInitializedRef = useRef(false)
  const isLoadingRef = useRef<Set<string>>(new Set())
  const currentSourceRef = useRef<AudioBufferSourceNode | null>(null)
  const currentGainRef = useRef<GainNode | null>(null)
  const lastPlayedGenreRef = useRef<string | null>(null)
  const lastPlayTimeRef = useRef<number>(0)

  // Initialize AudioContext on first user interaction
  const initAudio = useCallback(() => {
    if (isInitializedRef.current) {
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume()
      }
      return
    }

    try {
      audioContextRef.current = new AudioContext()
      isInitializedRef.current = true
    } catch (e) {
      console.warn('Web Audio API not supported:', e)
    }
  }, [])

  // Load audio buffer for a genre (lazy loading)
  const loadGenreAudio = useCallback(async (genreId: string): Promise<AudioBuffer | null> => {
    const ctx = audioContextRef.current
    if (!ctx) return null

    // Already loaded
    if (audioBuffersRef.current.has(genreId)) {
      return audioBuffersRef.current.get(genreId) || null
    }

    // Already loading
    if (isLoadingRef.current.has(genreId)) {
      return null
    }

    const config = genreAudioSamples[genreId]
    if (!config?.previewUrl) return null

    isLoadingRef.current.add(genreId)

    try {
      const response = await fetch(config.previewUrl)
      if (!response.ok) throw new Error(`Failed to load ${config.previewUrl}`)

      const arrayBuffer = await response.arrayBuffer()
      const audioBuffer = await ctx.decodeAudioData(arrayBuffer)

      audioBuffersRef.current.set(genreId, audioBuffer)
      isLoadingRef.current.delete(genreId)

      return audioBuffer
    } catch (err) {
      console.warn(`Could not load audio for ${genreId}:`, err)
      isLoadingRef.current.delete(genreId)
      return null
    }
  }, [])

  // Play audio sample for a genre
  const playGenre = useCallback(async (genreId: string) => {
    if (!isInitializedRef.current) {
      initAudio()
    }

    const ctx = audioContextRef.current
    if (!ctx) return

    // Resume context if suspended
    if (ctx.state === 'suspended') {
      await ctx.resume()
    }

    // Debounce: don't replay the same genre within 150ms
    const now = Date.now()
    if (lastPlayedGenreRef.current === genreId && now - lastPlayTimeRef.current < 150) {
      return
    }
    lastPlayedGenreRef.current = genreId
    lastPlayTimeRef.current = now

    // Stop any currently playing sound with fade out
    if (currentSourceRef.current && currentGainRef.current) {
      try {
        const oldGain = currentGainRef.current
        const oldSource = currentSourceRef.current // Capture reference before it changes
        oldGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1)
        setTimeout(() => {
          try {
            oldSource.stop() // Stop the captured old source, not the current one
          } catch (e) {
            // Already stopped
          }
        }, 100)
      } catch (e) {
        // Already stopped
      }
    }

    const config = genreAudioSamples[genreId]
    if (!config) return

    // Load audio if not already loaded
    let buffer = audioBuffersRef.current.get(genreId)
    if (!buffer) {
      const loadedBuffer = await loadGenreAudio(genreId)
      if (!loadedBuffer) return
      buffer = loadedBuffer
    }

    // Create audio nodes
    const source = ctx.createBufferSource()
    source.buffer = buffer

    // Create gain node for volume control and fades
    const gainNode = ctx.createGain()

    // Fade in
    gainNode.gain.setValueAtTime(0, ctx.currentTime)
    gainNode.gain.linearRampToValueAtTime(config.volume, ctx.currentTime + 0.15)

    // Connect nodes
    source.connect(gainNode)
    gainNode.connect(ctx.destination)

    // Start from a random position in the first 20 seconds (to vary the sound)
    const maxStart = Math.max(0, Math.min(buffer.duration - 5, 20))
    const startTime = Math.random() * maxStart

    // Play for up to 6 seconds
    const playDuration = Math.min(6, buffer.duration - startTime)

    // Schedule fade out
    gainNode.gain.setValueAtTime(config.volume, ctx.currentTime + playDuration - 0.3)
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + playDuration)

    // Start playback
    source.start(0, startTime, playDuration)

    currentSourceRef.current = source
    currentGainRef.current = gainNode

    // Cleanup when done
    source.onended = () => {
      try {
        source.disconnect()
        gainNode.disconnect()
      } catch (e) {
        // Already disconnected
      }
      if (currentSourceRef.current === source) {
        currentSourceRef.current = null
        currentGainRef.current = null
      }
    }
  }, [initAudio, loadGenreAudio])

  // Stop current sound with fade out
  const stopGenre = useCallback(() => {
    const ctx = audioContextRef.current
    if (!ctx) return

    if (currentSourceRef.current && currentGainRef.current) {
      try {
        const source = currentSourceRef.current
        const gain = currentGainRef.current

        // Immediately clear refs so new sounds can play
        currentSourceRef.current = null
        currentGainRef.current = null

        // Fade out and stop
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15)
        setTimeout(() => {
          try {
            source.stop()
            source.disconnect()
            gain.disconnect()
          } catch (e) {
            // Already stopped
          }
        }, 150)
      } catch (e) {
        // Already stopped
      }
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (currentSourceRef.current) {
        try {
          currentSourceRef.current.stop()
        } catch (e) {
          // Already stopped
        }
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  return {
    playGenre,
    stopGenre,
    initAudio,
  }
}
