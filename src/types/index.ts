export interface ArtistAlbum {
  title: string
  year: number
  spotifyUrl?: string
  albumArt?: string
}

export interface ArtistSong {
  title: string
  year?: number
  spotifyUrl?: string
}

export interface Artist {
  id: string
  name: string
  years: string
  significance: string
  // Extended fields for rich artist modal
  imageUrl?: string
  origin?: string                    // "Memphis, Tennessee"
  tagline?: string                   // "The King of Rock and Roll"
  bio?: string                       // 2-3 sentence biography
  genres?: string[]                  // ['rock-and-roll', 'gospel']
  essentialAlbums?: ArtistAlbum[]    // 2-3 albums
  iconicSongs?: ArtistSong[]         // 3-5 songs
  influencedBy?: string[]            // Artist IDs or names
  influenced?: string[]              // Artist IDs or names
  spotifyArtistId?: string           // For Spotify embed
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

  // Spotify embeds
  spotifyTrackId?: string     // Single track for quick preview
  spotifyPlaylistId?: string  // Playlist for deeper exploration
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
