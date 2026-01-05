import type { Genre } from '../types'

// Hybrid layout: X = timeline (1920s→2010s), Y = sonic character (guitar-driven top → electronic bottom)
export const genres: Genre[] = [
  // 1920s - Early roots
  {
    id: 'country',
    name: 'Country',
    era: '1920s',
    x: 10,
    y: 25,
    color: '#D2691E',
    description: 'Storytelling and twang from rural America',
    connections: ['delta-blues', 'rock-and-roll'],
  },
  {
    id: 'delta-blues',
    name: 'Delta Blues',
    era: '1920s',
    x: 12,
    y: 35,
    color: '#8B4513',
    description: 'Raw, emotional guitar music from the Mississippi Delta',
    connections: ['jazz', 'rock-and-roll', 'rb'],
  },
  {
    id: 'jazz',
    name: 'Jazz',
    era: '1920s',
    x: 15,
    y: 45,
    color: '#DAA520',
    description: 'Improvisation meets sophistication in America\'s art form',
    connections: ['delta-blues', 'soul', 'funk'],
  },

  // 1930s
  {
    id: 'gospel',
    name: 'Gospel',
    era: '1930s',
    x: 20,
    y: 40,
    color: '#CD853F',
    description: 'Spiritual music that birthed soul and R&B',
    connections: ['soul', 'rb'],
  },

  // 1940s
  {
    id: 'rb',
    name: 'R&B',
    era: '1940s',
    x: 28,
    y: 45,
    color: '#B8860B',
    description: 'Rhythm and blues: the bridge between jazz and rock',
    connections: ['delta-blues', 'gospel', 'soul', 'rock-and-roll'],
  },

  // 1950s
  {
    id: 'rock-and-roll',
    name: 'Rock & Roll',
    era: '1950s',
    x: 38,
    y: 35,
    color: '#FF6347',
    description: 'The sound that changed everything',
    connections: ['delta-blues', 'country', 'rb', 'punk', 'grunge'],
  },

  // 1960s
  {
    id: 'soul',
    name: 'Soul',
    era: '1960s',
    x: 45,
    y: 50,
    color: '#FF8C00',
    description: 'Gospel passion meets secular storytelling',
    connections: ['gospel', 'rb', 'jazz', 'funk', 'disco'],
  },
  {
    id: 'reggae',
    name: 'Reggae',
    era: '1960s',
    x: 48,
    y: 40,
    color: '#228B22',
    description: 'Jamaica\'s gift: offbeat rhythms and rebel spirit',
    connections: ['rb', 'punk', 'hip-hop'],
  },

  // 1970s
  {
    id: 'punk',
    name: 'Punk',
    era: '1970s',
    x: 52,
    y: 20,
    color: '#DC143C',
    description: 'Three chords and the truth',
    connections: ['rock-and-roll', 'reggae', 'grunge', 'indie'],
  },
  {
    id: 'funk',
    name: 'Funk',
    era: '1970s',
    x: 55,
    y: 55,
    color: '#FF4500',
    description: 'The groove that launched a thousand samples',
    connections: ['soul', 'jazz', 'disco', 'hip-hop'],
  },
  {
    id: 'electronic',
    name: 'Electronic',
    era: '1970s',
    x: 56,
    y: 75,
    color: '#00CED1',
    description: 'Machines making music: infinite possibilities',
    connections: ['disco', 'house', 'techno', 'ambient'],
  },
  {
    id: 'disco',
    name: 'Disco',
    era: '1970s',
    x: 58,
    y: 65,
    color: '#FF69B4',
    description: 'Four-on-the-floor beats and mirror balls',
    connections: ['soul', 'funk', 'house', 'electronic'],
  },

  // 1980s
  {
    id: 'hip-hop',
    name: 'Hip-Hop',
    era: '1980s',
    x: 65,
    y: 50,
    color: '#FFD700',
    description: 'Turntables, MCs, and beats from the Bronx',
    connections: ['funk', 'reggae', 'electronic'],
  },
  {
    id: 'house',
    name: 'House',
    era: '1980s',
    x: 68,
    y: 72,
    color: '#9370DB',
    description: 'Chicago\'s four-on-the-floor revolution',
    connections: ['disco', 'electronic', 'techno', 'edm'],
  },
  {
    id: 'techno',
    name: 'Techno',
    era: '1980s',
    x: 70,
    y: 80,
    color: '#4169E1',
    description: 'Detroit\'s futuristic machine music',
    connections: ['electronic', 'house', 'drum-and-bass', 'edm'],
  },
  {
    id: 'indie',
    name: 'Indie Rock',
    era: '1980s',
    x: 66,
    y: 28,
    color: '#F4A460',
    description: 'DIY spirit meets artistic ambition',
    connections: ['punk', 'grunge', 'rock-and-roll'],
  },

  // 1990s
  {
    id: 'grunge',
    name: 'Grunge',
    era: '1990s',
    x: 78,
    y: 25,
    color: '#696969',
    description: 'Seattle\'s answer to hair metal',
    connections: ['punk', 'rock-and-roll', 'indie'],
  },
  {
    id: 'ambient',
    name: 'Ambient',
    era: '1990s',
    x: 75,
    y: 85,
    color: '#87CEEB',
    description: 'Music as environment, sound as texture',
    connections: ['electronic', 'jazz'],
  },
  {
    id: 'drum-and-bass',
    name: 'Drum & Bass',
    era: '1990s',
    x: 80,
    y: 70,
    color: '#32CD32',
    description: 'Breakbeats at 170 BPM',
    connections: ['techno', 'hip-hop', 'edm'],
  },

  // 2000s-2010s
  {
    id: 'edm',
    name: 'EDM',
    era: '2010s',
    x: 92,
    y: 75,
    color: '#FF1493',
    description: 'Electronic dance music goes mainstream',
    connections: ['house', 'techno', 'drum-and-bass'],
  },
]

export const genreMap = new Map(genres.map(g => [g.id, g]))
