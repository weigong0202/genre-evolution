/**
 * Star particle generation utilities for background effects
 */

export interface Star {
  x: number
  y: number
  z?: number // Optional depth for parallax/warp effects
  size: number
  opacity: number
  layer: number
  animationDelay: number
  animationDuration: number
}

export interface StarConfig {
  count: number
  includeDepth?: boolean // Whether to include z-depth for warp effects
}

/**
 * Generate an array of star particles with randomized properties
 * @param config - Configuration for star generation
 * @returns Array of star objects
 */
export function generateStars(config: StarConfig | number): Star[] {
  const { count, includeDepth = false } = typeof config === 'number'
    ? { count: config }
    : config

  const stars: Star[] = []

  for (let i = 0; i < count; i++) {
    const star: Star = {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5, // 1.5-4.5px
      opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9
      layer: Math.floor(Math.random() * 3), // 0 = far, 1 = mid, 2 = near
      animationDelay: Math.random() * 5, // 0-5s
      animationDuration: Math.random() * 2 + 2, // 2-4s
    }

    if (includeDepth) {
      star.z = Math.random() // 0 = far, 1 = close
    }

    stars.push(star)
  }

  return stars
}
