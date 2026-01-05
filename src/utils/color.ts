/**
 * Calculate perceived brightness of a hex color
 * Uses the YIQ formula for perceived luminance
 * @param hex - Hex color string (e.g., "#ff5500")
 * @returns Brightness value from 0 (dark) to 255 (light)
 */
export function getColorBrightness(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000
}

/**
 * Lighten or darken a hex color
 * @param hex - Hex color string
 * @param amount - Positive to lighten, negative to darken
 */
export function adjustColor(hex: string, amount: number): string {
  const r = Math.min(255, Math.max(0, parseInt(hex.slice(1, 3), 16) + amount))
  const g = Math.min(255, Math.max(0, parseInt(hex.slice(3, 5), 16) + amount))
  const b = Math.min(255, Math.max(0, parseInt(hex.slice(5, 7), 16) + amount))
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}
