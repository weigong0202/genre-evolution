// Genre audio samples using Spotify preview URLs (30-second clips)

export interface GenreAudioSample {
  previewUrl: string
  volume: number
}

// Spotify preview URLs for each genre's representative track
export const genreAudioSamples: Record<string, GenreAudioSample> = {
  'country': {
    previewUrl: 'https://p.scdn.co/mp3-preview/7a2cbbb6a6d5c57e966f9fcc8f01558101774532',
    volume: 0.4,
  },
  'delta-blues': {
    previewUrl: 'https://p.scdn.co/mp3-preview/517f33f1da6529d5ff33e7d555c779675afd6023',
    volume: 0.4,
  },
  'jazz': {
    previewUrl: 'https://p.scdn.co/mp3-preview/d1a1a7b585e7bcf9becc2ab44938f6399fe90659',
    volume: 0.4,
  },
  'gospel': {
    previewUrl: 'https://p.scdn.co/mp3-preview/5e06f7e6edf952840b0e58d10aef72e3f081becb',
    volume: 0.4,
  },
  'rb': {
    previewUrl: 'https://p.scdn.co/mp3-preview/2cfd1682c3ced4c2bfc7ef3ca415f8b63f69b9b5',
    volume: 0.4,
  },
  'rock-and-roll': {
    previewUrl: 'https://p.scdn.co/mp3-preview/214ca11106cbcdfe07ccd2d839c67c9b8949a5e2',
    volume: 0.4,
  },
  'soul': {
    previewUrl: 'https://p.scdn.co/mp3-preview/7768dd513193e30ab1ad19deeff2dcc63d2c7555',
    volume: 0.4,
  },
  'reggae': {
    previewUrl: 'https://p.scdn.co/mp3-preview/0cb785f6f18060e343c72fa22eddcc9b2bfd38ee',
    volume: 0.4,
  },
  'punk': {
    previewUrl: 'https://p.scdn.co/mp3-preview/e568214b37abb97de52d5380e1b1674f1efe2512',
    volume: 0.4,
  },
  'funk': {
    previewUrl: 'https://p.scdn.co/mp3-preview/399db81a2ddcc6512866cde0a418c1803f5f94f6',
    volume: 0.4,
  },
  'electronic': {
    previewUrl: 'https://p.scdn.co/mp3-preview/93aeb675460676f71993e8cdb061bfc32595595f',
    volume: 0.4,
  },
  'disco': {
    previewUrl: 'https://p.scdn.co/mp3-preview/b7b70cda4f3c1bff01624cca71f6defb8cebcc37',
    volume: 0.4,
  },
  'hip-hop': {
    previewUrl: 'https://p.scdn.co/mp3-preview/528bc55bb141b0b5ab040666ff6b43d0e8fd422f',
    volume: 0.4,
  },
  'house': {
    previewUrl: 'https://p.scdn.co/mp3-preview/986b4128abf2f69a32f179b1bc41b9f0b54ca434',
    volume: 0.4,
  },
  'techno': {
    previewUrl: 'https://p.scdn.co/mp3-preview/9ab87b33d0b96a49efac3266a3e0057c5227f060',
    volume: 0.4,
  },
  'indie': {
    previewUrl: 'https://p.scdn.co/mp3-preview/8414c9d0e363c390f38e74a2fc735bb0bca666cd',
    volume: 0.4,
  },
  'grunge': {
    previewUrl: 'https://p.scdn.co/mp3-preview/91219ebc0d0505a1001c4b854f8b2451fcec95b8',
    volume: 0.4,
  },
  'ambient': {
    previewUrl: 'https://p.scdn.co/mp3-preview/138264e5b636b9aa0c6ee2547392b3ee0f6ddd35',
    volume: 0.3, // Ambient is usually quieter
  },
  'drum-and-bass': {
    previewUrl: 'https://p.scdn.co/mp3-preview/7cb7244a4eb3a0cdbb9b42372e48439c68c514f5',
    volume: 0.4,
  },
  'edm': {
    previewUrl: 'https://p.scdn.co/mp3-preview/6de52dda0d37a0646987856c3b9f7da075d965b4',
    volume: 0.4,
  },
}
