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

export interface MapState {
  scale: number
  x: number
  y: number
}
