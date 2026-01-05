export interface GenreAudioConfig {
  baseFrequency: number
  waveType: OscillatorType
  filterFrequency: number
  gain: number
  detune?: number
  // Chord intervals (semitones from root) for pluck sound
  chordIntervals: number[]
  // Attack and decay times for pluck envelope
  attack: number
  decay: number
}

// Audio characteristics mapped to genre families and Y-position
// Lower Y (guitar-driven, top) = lower frequencies, warmer
// Higher Y (electronic, bottom) = higher frequencies, brighter

export const genreAudioConfigs: Record<string, GenreAudioConfig> = {
  // Rock/Guitar Family (warm reds/oranges) - Triangle wave, warm
  'country': {
    baseFrequency: 220, // A3 - open guitar string
    waveType: 'triangle',
    filterFrequency: 1200,
    gain: 0.12,
    detune: -5,
    chordIntervals: [0, 4, 7], // Major triad - bright country sound
    attack: 0.01,
    decay: 0.4,
  },
  'delta-blues': {
    baseFrequency: 196, // G3
    waveType: 'triangle',
    filterFrequency: 900,
    gain: 0.12,
    detune: 10,
    chordIntervals: [0, 3, 7, 10], // Minor 7th - bluesy
    attack: 0.02,
    decay: 0.5,
  },
  'rock-and-roll': {
    baseFrequency: 165, // E3 - power chord root
    waveType: 'triangle',
    filterFrequency: 1400,
    gain: 0.14,
    detune: 0,
    chordIntervals: [0, 7, 12], // Power chord + octave
    attack: 0.01,
    decay: 0.35,
  },
  'punk': {
    baseFrequency: 196, // G3
    waveType: 'sawtooth',
    filterFrequency: 1800,
    gain: 0.1,
    detune: 15,
    chordIntervals: [0, 7], // Raw power chord
    attack: 0.005,
    decay: 0.2,
  },
  'grunge': {
    baseFrequency: 147, // D3 - drop D tuning feel
    waveType: 'triangle',
    filterFrequency: 1000,
    gain: 0.12,
    detune: -10,
    chordIntervals: [0, 5, 7], // Sus4 - tension
    attack: 0.015,
    decay: 0.45,
  },
  'indie': {
    baseFrequency: 262, // C4
    waveType: 'triangle',
    filterFrequency: 1600,
    gain: 0.1,
    detune: 5,
    chordIntervals: [0, 4, 7, 11], // Major 7 - dreamy
    attack: 0.02,
    decay: 0.5,
  },

  // Soul/Funk/R&B/Hip-Hop Family (purples) - Sine wave, smooth
  'gospel': {
    baseFrequency: 262, // C4
    waveType: 'sine',
    filterFrequency: 1400,
    gain: 0.12,
    detune: 0,
    chordIntervals: [0, 4, 7, 12], // Major with octave - uplifting
    attack: 0.02,
    decay: 0.6,
  },
  'rb': {
    baseFrequency: 233, // Bb3
    waveType: 'sine',
    filterFrequency: 1500,
    gain: 0.11,
    detune: 0,
    chordIntervals: [0, 4, 7, 10], // Dominant 7 - smooth
    attack: 0.02,
    decay: 0.5,
  },
  'soul': {
    baseFrequency: 220, // A3
    waveType: 'sine',
    filterFrequency: 1400,
    gain: 0.12,
    detune: 0,
    chordIntervals: [0, 3, 7, 10], // Minor 7 - soulful
    attack: 0.025,
    decay: 0.55,
  },
  'funk': {
    baseFrequency: 196, // G3
    waveType: 'triangle',
    filterFrequency: 1800,
    gain: 0.11,
    detune: 5,
    chordIntervals: [0, 4, 7, 10, 14], // 9th chord - funky
    attack: 0.01,
    decay: 0.3,
  },
  'disco': {
    baseFrequency: 277, // C#4
    waveType: 'sine',
    filterFrequency: 2000,
    gain: 0.1,
    detune: 0,
    chordIntervals: [0, 4, 7, 11], // Major 7 - sparkly
    attack: 0.01,
    decay: 0.35,
  },
  'hip-hop': {
    baseFrequency: 147, // D3 - deep bass
    waveType: 'sine',
    filterFrequency: 1200,
    gain: 0.14,
    detune: -5,
    chordIntervals: [0, 7], // Fifth - boomy
    attack: 0.01,
    decay: 0.4,
  },
  'house': {
    baseFrequency: 262, // C4
    waveType: 'sine',
    filterFrequency: 2200,
    gain: 0.1,
    detune: 0,
    chordIntervals: [0, 3, 7], // Minor - classic house
    attack: 0.01,
    decay: 0.3,
  },

  // Electronic Family (cyans/blues) - Sawtooth, bright synthetic
  'electronic': {
    baseFrequency: 330, // E4
    waveType: 'sawtooth',
    filterFrequency: 2400,
    gain: 0.08,
    detune: 0,
    chordIntervals: [0, 3, 7, 10], // Minor 7 - synthy
    attack: 0.005,
    decay: 0.35,
  },
  'techno': {
    baseFrequency: 220, // A3
    waveType: 'sawtooth',
    filterFrequency: 2800,
    gain: 0.08,
    detune: 10,
    chordIntervals: [0, 5], // Fourth - industrial
    attack: 0.005,
    decay: 0.25,
  },
  'ambient': {
    baseFrequency: 392, // G4
    waveType: 'sine',
    filterFrequency: 1800,
    gain: 0.08,
    detune: -3,
    chordIntervals: [0, 7, 12, 19], // Fifths stacked - ethereal
    attack: 0.05,
    decay: 0.8,
  },
  'drum-and-bass': {
    baseFrequency: 196, // G3
    waveType: 'sawtooth',
    filterFrequency: 2600,
    gain: 0.09,
    detune: 15,
    chordIntervals: [0, 3, 7], // Minor - dark
    attack: 0.005,
    decay: 0.2,
  },
  'edm': {
    baseFrequency: 330, // E4
    waveType: 'sawtooth',
    filterFrequency: 3000,
    gain: 0.08,
    detune: 5,
    chordIntervals: [0, 4, 7], // Major - euphoric
    attack: 0.005,
    decay: 0.3,
  },

  // Jazz (gold) - Sine with harmonics feel
  'jazz': {
    baseFrequency: 220, // A3
    waveType: 'sine',
    filterFrequency: 1400,
    gain: 0.1,
    detune: 2,
    chordIntervals: [0, 4, 7, 10, 14], // 9th chord - jazzy
    attack: 0.02,
    decay: 0.5,
  },

  // Reggae (green) - Triangle, deep dubby
  'reggae': {
    baseFrequency: 165, // E3
    waveType: 'triangle',
    filterFrequency: 800,
    gain: 0.12,
    detune: -8,
    chordIntervals: [0, 3, 7], // Minor - roots
    attack: 0.02,
    decay: 0.5,
  },
}
