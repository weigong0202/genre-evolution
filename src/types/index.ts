export interface Artist {
  id: string
  name: string
  years: string
  significance: string
}

export interface Album {
  title: string
  artist: string
  year: string
  albumArt?: string // URL to album cover image
}

export interface KeyMoment {
  year: string
  event: string
}

export interface GenreDetails {
  // Musical DNA
  instruments: string[]
  tempoRange: string
  signatureSounds: string[]

  // Origins & Culture
  birthplace: string
  culturalContext: string
  keyVenues?: string[]

  // Timeline & Lineage
  roots: string              // What influenced this genre
  emergence: string
  peakYears: string
  keyMoments: KeyMoment[]
  legacy: string             // What this genre influenced/became

  // Essential Listening
  definitiveAlbums: Album[]
  signatureTracks: string[]
  startHere: string

  // Spotify embed for background music
  spotifyTrackId?: string  // Spotify track ID for representative song
}

export interface Genre {
  id: string
  name: string
  era: string
  x: number  // 0-100 scale
  y: number  // 0-100 scale
  color: string
  description: string
  connections: string[]
}

export interface MapTransform {
  scale: number
  x: number
  y: number
}
