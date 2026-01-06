import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { genres } from '../data/genres'
import { genreArtists } from '../data/artists'
import { GenreNode } from './GenreNode'
import { ConnectionLines } from './ConnectionLines'
import { GenreCard } from './GenreCard'
import { ArtistCard } from './ArtistCard'
import { ArtistNode } from './ArtistNode'
import { AboutModal } from './AboutModal'
import { useAudioEngine } from '../hooks/useAudioEngine'
import { generateStars } from '../utils/particles'
import type { Genre, Artist } from '../types'

const staticStars = generateStars(100)

interface SonicMapProps {
  onReplayIntro?: () => void
}

export function SonicMap({ onReplayIntro }: SonicMapProps) {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [hoveredGenreId, setHoveredGenreId] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [expandedGenreId, setExpandedGenreId] = useState<string | null>(null)
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [mapTransform, setMapTransform] = useState({ scale: 1, x: 0, y: 0 })
  // Navigation history for artist-to-artist navigation
  const [artistHistory, setArtistHistory] = useState<Array<{ artist: Artist; genre: Genre }>>([])
  // About modal visibility
  const [showAbout, setShowAbout] = useState(false)

  // Audio engine for sonic feedback - short pluck sounds on hover
  const { playGenre, stopGenre, initAudio } = useAudioEngine()

  // Initialize audio on first user click (required for browsers)
  useEffect(() => {
    const handleFirstClick = () => {
      initAudio()
      window.removeEventListener('click', handleFirstClick)
    }
    window.addEventListener('click', handleFirstClick)
    return () => window.removeEventListener('click', handleFirstClick)
  }, [initAudio])

  // Play/stop audio on hover
  useEffect(() => {
    if (hoveredGenreId) {
      playGenre(hoveredGenreId)
    } else {
      stopGenre()
    }
  }, [hoveredGenreId, playGenre, stopGenre])

  // Track mouse for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Calculate parallax offset for each layer
  const getParallaxOffset = (layer: number) => {
    const intensity = (layer + 1) * 8 // far = 8px, mid = 16px, near = 24px
    return {
      x: (mousePos.x - 0.5) * intensity,
      y: (mousePos.y - 0.5) * intensity,
    }
  }

  const handleCollapseExpansion = useCallback(() => {
    // Collapse back to normal view
    setExpandedGenreId(null)
    setMapTransform({ scale: 1, x: 0, y: 0 })
  }, [])

  // ESC key to collapse
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedGenreId && !selectedGenre && !selectedArtist) {
        handleCollapseExpansion()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [expandedGenreId, selectedGenre, selectedArtist, handleCollapseExpansion])

  const handleGenreClick = useCallback((genre: Genre) => {
    // Stop any playing audio when opening modal
    stopGenre()

    // If clicking a dimmed genre while another is expanded, collapse
    if (expandedGenreId && expandedGenreId !== genre.id) {
      handleCollapseExpansion()
      return
    }
    // Show the genre modal and zoom in
    setSelectedGenre(genre)
    setSelectedArtist(null)

    // Zoom to center on genre
    const centerX = 50 - genre.x
    const centerY = 50 - genre.y
    setMapTransform({
      scale: 1.8,
      x: centerX * 1.8,
      y: centerY * 1.8,
    })
  }, [expandedGenreId, handleCollapseExpansion, stopGenre])

  const handleGenreHover = useCallback((genreId: string | null) => {
    setHoveredGenreId(genreId)
  }, [])

  const handleConnectionClick = useCallback((genreId: string) => {
    const genre = genres.find(g => g.id === genreId)
    if (genre) {
      // Show the genre modal and zoom to it
      setSelectedGenre(genre)
      setSelectedArtist(null)
      setExpandedGenreId(null) // Clear any artist bubbles

      // Zoom to center on new genre
      const centerX = 50 - genre.x
      const centerY = 50 - genre.y
      setMapTransform({
        scale: 1.8,
        x: centerX * 1.8,
        y: centerY * 1.8,
      })
    }
  }, [])

  const handleExploreArtists = useCallback(() => {
    if (!selectedGenre) return

    // Close modal and show artist bubbles (zoom already applied from genre click)
    const genre = selectedGenre
    setSelectedGenre(null)
    setExpandedGenreId(genre.id)
  }, [selectedGenre])

  const handleArtistClick = useCallback((artist: Artist, genre: Genre) => {
    // If we're already viewing an artist, push current to history before navigating
    if (selectedArtist && selectedGenre) {
      setArtistHistory(prev => [...prev, { artist: selectedArtist, genre: selectedGenre }])
    }
    setSelectedArtist(artist)
    setSelectedGenre(genre)
  }, [selectedArtist, selectedGenre])

  const handleArtistBack = useCallback(() => {
    if (artistHistory.length > 0) {
      // Pop from history and go to previous artist
      const newHistory = [...artistHistory]
      const previous = newHistory.pop()!
      setArtistHistory(newHistory)
      setSelectedArtist(previous.artist)
      setSelectedGenre(previous.genre)
    } else {
      // No history, go back to genre view
      setSelectedArtist(null)
    }
  }, [artistHistory])

  const handleCloseCard = useCallback(() => {
    // Keep track of the genre we're closing (to expand its artists)
    const genreToExpand = selectedGenre

    // Close the modal and clear history
    setSelectedGenre(null)
    setSelectedArtist(null)
    setArtistHistory([])

    // Show artist bubbles for the genre we just closed
    // (keeps the zoomed view, user can click elsewhere to collapse)
    if (genreToExpand && !expandedGenreId) {
      setExpandedGenreId(genreToExpand.id)
    }
  }, [selectedGenre, expandedGenreId])

  return (
    <div className="relative w-full h-full overflow-hidden bg-stone-950">
      {/* Deep space gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #1c1917 0%, #0c0a09 70%, #000 100%)',
        }}
      />

      {/* Nebula layers with parallax */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${getParallaxOffset(0).x}px, ${getParallaxOffset(0).y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Warm nebula - top right */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-40"
          style={{
            top: '-15%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.5) 0%, rgba(217, 119, 6, 0.2) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Cool nebula - bottom left */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            bottom: '-10%',
            left: '-15%',
            background: 'radial-gradient(circle, rgba(120, 113, 108, 0.6) 0%, rgba(68, 64, 60, 0.3) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Accent nebula - center */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(253, 224, 71, 0.4) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Additional purple/blue nebula - bottom right */}
        <div
          className="absolute w-[450px] h-[450px] rounded-full opacity-20"
          style={{
            bottom: '10%',
            right: '20%',
            background: 'radial-gradient(circle, rgba(147, 112, 219, 0.4) 0%, rgba(99, 102, 241, 0.15) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* Star field with parallax layers */}
      {[0, 1, 2].map(layer => {
        const offset = getParallaxOffset(layer)
        return (
          <div
            key={layer}
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            {staticStars
              .filter(star => star.layer === layer)
              .map((star, i) => (
                <div
                  key={i}
                  className="absolute rounded-full star-twinkle"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: star.size,
                    height: star.size,
                    backgroundColor: star.size > 3 ? '#fef3c7' : '#fbbf24',
                    boxShadow: `
                      0 0 ${star.size * 2}px rgba(251, 191, 36, 0.6),
                      0 0 ${star.size * 4}px rgba(251, 191, 36, 0.3),
                      0 0 ${star.size * 6}px rgba(251, 191, 36, 0.1)
                    `,
                    animationDelay: `${star.animationDelay}s`,
                    animationDuration: `${star.animationDuration}s`,
                  }}
                />
              ))}
          </div>
        )
      })}

      {/* Gradient grid overlay - warm top (guitar) to cool bottom (electronic) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm grid lines (top half - guitar-driven) */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        {/* Cool grid lines (bottom half - electronic) */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Map container with zoom transform */}
      <motion.div
        className="absolute inset-0"
        style={{ zIndex: expandedGenreId ? 35 : 1 }}
        animate={{
          scale: mapTransform.scale,
          x: `${mapTransform.x}%`,
          y: `${mapTransform.y}%`,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        onClick={() => {
          // Collapse when clicking anywhere on the map while expanded (except artist bubbles which stopPropagation)
          if (expandedGenreId && !selectedGenre && !selectedArtist) {
            handleCollapseExpansion()
          }
        }}
      >
        <div className="relative w-full h-full">
          {/* Connection lines */}
          <ConnectionLines
            genres={genres}
            selectedGenreId={selectedGenre?.id ?? null}
            hoveredGenreId={hoveredGenreId}
          />

          {/* Genre nodes */}
          {genres.map(genre => {
            const isExpanded = expandedGenreId === genre.id
            const isOtherExpanded = expandedGenreId !== null && expandedGenreId !== genre.id
            const artists = genreArtists[genre.id] || []

            return (
              <GenreNode
                key={genre.id}
                genre={genre}
                isSelected={selectedGenre?.id === genre.id}
                isConnected={selectedGenre?.connections.includes(genre.id) ?? false}
                isHovered={hoveredGenreId === genre.id}
                isHoverConnected={
                  hoveredGenreId !== null &&
                  (genres.find(g => g.id === hoveredGenreId)?.connections.includes(genre.id) ?? false)
                }
                isExpanded={isExpanded}
                isOtherExpanded={isOtherExpanded}
                onClick={() => handleGenreClick(genre)}
                onHover={handleGenreHover}
                mousePos={mousePos}
              >
                {/* Artist sub-nodes when expanded */}
                <AnimatePresence>
                  {isExpanded && artists.map((artist, index) => (
                    <ArtistNode
                      key={artist.id}
                      artist={artist}
                      parentColor={genre.color}
                      index={index}
                      total={artists.length}
                      isSelected={selectedArtist?.id === artist.id}
                      onClick={() => handleArtistClick(artist, genre)}
                    />
                  ))}
                </AnimatePresence>
              </GenreNode>
            )
          })}
        </div>
      </motion.div>

      {/* Header */}
      <div className="absolute top-6 left-6 z-30">
        <h1 className="text-2xl font-bold text-amber-100 tracking-wide">
          SONIC UNIVERSE
        </h1>
        <p className="text-amber-200/80 text-sm mt-1">
          Explore the genealogy of music
        </p>
      </div>

      {/* Instructions */}
      <div className="absolute top-6 right-6 z-30 text-right">
        <p className="text-amber-200/70 text-xs">
          Click a genre to explore
        </p>
      </div>

      {/* Legend */}
      <div className="absolute top-16 right-6 z-30">
        <div className="bg-stone-900/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-amber-200/10">
          <p className="font-mono-data text-amber-200/80 text-[9px] font-medium tracking-wider mb-2">GENRE FAMILIES</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E63946' }} />
              <span className="text-amber-100/70 text-[10px]">Rock / Guitar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#9C27B0' }} />
              <span className="text-amber-100/70 text-[10px]">Soul / Funk / Hip-Hop</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00ACC1' }} />
              <span className="text-amber-100/70 text-[10px]">Electronic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
              <span className="text-amber-100/70 text-[10px]">Jazz</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2E7D32' }} />
              <span className="text-amber-100/70 text-[10px]">Reggae</span>
            </div>
          </div>
        </div>
      </div>

      {/* X-Axis: Timeline histogram */}
      <div className="absolute bottom-[4%] left-[8%] right-[3%] z-10 pointer-events-none">
        {/* Histogram bars and labels */}
        <div className="relative w-full h-16">
          {/* Decade histogram bars */}
          {[
            { decade: "'20s", pos: 0, count: 3 },
            { decade: "'30s", pos: 12, count: 1 },
            { decade: "'40s", pos: 22, count: 1 },
            { decade: "'50s", pos: 34, count: 1 },
            { decade: "'60s", pos: 44, count: 2 },
            { decade: "'70s", pos: 55, count: 4 },
            { decade: "'80s", pos: 69, count: 4 },
            { decade: "'90s", pos: 82, count: 3 },
            { decade: "'10s", pos: 100, count: 1 },
          ].map(({ decade, pos, count }) => {
            const maxCount = 4
            const barHeight = (count / maxCount) * 24 // max 24px
            return (
              <div
                key={decade}
                className="absolute bottom-5 flex flex-col items-center"
                style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
              >
                {/* Bar */}
                <div
                  className="w-6 rounded-t-sm mb-1"
                  style={{
                    height: barHeight,
                    background: `linear-gradient(to top, rgba(251, 191, 36, 0.4), rgba(251, 191, 36, 0.15))`,
                    boxShadow: '0 0 8px rgba(251, 191, 36, 0.2)',
                  }}
                />
                {/* Decade label */}
                <span className="font-mono-data text-amber-200/90 text-[11px] font-medium">{decade}</span>
              </div>
            )
          })}

          {/* Baseline */}
          <div className="absolute bottom-5 left-0 right-0 h-px bg-gradient-to-r from-amber-200/20 via-amber-200/30 to-amber-200/20" />

          {/* Axis title */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
            <span className="font-mono-data text-amber-200/70 text-[11px] font-semibold tracking-widest">TIMELINE</span>
          </div>
        </div>
      </div>

      {/* Y-Axis: Sonic Character (full height, left side) */}
      <div className="absolute left-[4%] top-[12%] bottom-[10%] z-10 pointer-events-none">
        <div className="relative h-full flex flex-col items-center">
          {/* Top label */}
          <div className="flex flex-col items-center gap-1 pb-2">
            <span className="font-mono-data text-orange-300/90 text-xs font-semibold whitespace-nowrap">GUITAR-DRIVEN</span>
          </div>
          {/* Axis line - gradient from orange (top/guitar) to cyan (bottom/electronic) */}
          <div
            className="flex-1 w-0.5 relative rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(251, 146, 60, 0.6), rgba(251, 191, 36, 0.3), rgba(6, 182, 212, 0.6))',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 rotate-[-90deg] text-orange-400/60">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 rotate-90 text-cyan-400/60">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Bottom label */}
          <div className="flex flex-col items-center gap-1 pt-2">
            <span className="font-mono-data text-cyan-300/90 text-xs font-semibold whitespace-nowrap">ELECTRONIC</span>
          </div>
        </div>
      </div>

      {/* Collapse hint when expanded */}
      {expandedGenreId && !selectedGenre && !selectedArtist && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div
            className="text-amber-100 text-base font-medium px-6 py-3 rounded-full backdrop-blur-md"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            Click anywhere or press ESC to collapse
          </div>
        </motion.div>
      )}

      {/* Top-center buttons - Intro and About */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {onReplayIntro && (
          <button
            onClick={onReplayIntro}
            className="px-4 py-2 text-amber-200/80 text-sm font-medium tracking-wide
                       hover:text-amber-100 hover:border-amber-500/40 transition-all duration-200"
            style={{
              background: 'rgba(10, 10, 15, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(251, 191, 36, 0.25)',
              borderRadius: '8px',
            }}
            title="Replay the intro experience"
          >
            ✦ Intro
          </button>
        )}
        <button
          onClick={() => setShowAbout(true)}
          className="px-4 py-2 text-amber-200/80 text-sm font-medium tracking-wide
                     hover:text-amber-100 hover:border-amber-500/40 transition-all duration-200"
          style={{
            background: 'rgba(10, 10, 15, 0.7)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(251, 191, 36, 0.25)',
            borderRadius: '8px',
          }}
          title="About Sonic Universe"
        >
          ✦ About
        </button>
      </div>

      {/* Modal container - shared backdrop for smooth transitions */}
      <AnimatePresence>
        {selectedGenre && (
          <>
            {/* Shared backdrop */}
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCard}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Content switches between genre and artist - no mode="wait" for instant crossfade */}
            <AnimatePresence>
              {selectedArtist ? (
                <ArtistCard
                  key="artist-modal"
                  artist={selectedArtist}
                  genre={selectedGenre}
                  onClose={handleCloseCard}
                  onBack={handleArtistBack}
                  backLabel={artistHistory.length > 0 ? artistHistory[artistHistory.length - 1].artist.name : selectedGenre?.name}
                  onArtistClick={handleArtistClick}
                  hideBackdrop
                />
              ) : (
                <GenreCard
                  key="genre-modal"
                  genre={selectedGenre}
                  onClose={handleCloseCard}
                  onConnectionClick={handleConnectionClick}
                  onExploreArtists={handleExploreArtists}
                  hideBackdrop
                />
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>

      {/* About Modal */}
      <AnimatePresence>
        {showAbout && (
          <AboutModal onClose={() => setShowAbout(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
