import { motion } from 'framer-motion'
import type { Artist } from '../types'
import { getColorBrightness, adjustColor } from '../utils/color'

interface ArtistNodeProps {
  artist: Artist
  parentColor: string
  index: number
  total: number
  isSelected: boolean
  onClick: () => void
}

export function ArtistNode({
  artist,
  parentColor,
  index,
  total,
  isSelected,
  onClick,
}: ArtistNodeProps) {
  // Calculate position in radial pattern
  const angle = ((index / total) * 2 * Math.PI) - (Math.PI / 2) // Start from top
  const radius = 80 // Distance from parent center in pixels
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  // Slightly vary the color for each artist
  const colorVariation = (index - total / 2) * 15
  const artistColor = adjustColor(parentColor, colorVariation)

  // Determine text color
  const brightness = getColorBrightness(artistColor)
  const textColor = brightness > 160 ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)'

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
      }}
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: x - 20, // Offset by half width (40px / 2)
        y: y - 20, // Offset by half height
      }}
      exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      transition={{
        delay: 0.15 + index * 0.08,
        type: 'spring',
        damping: 15,
        stiffness: 200,
      }}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: artistColor,
          filter: 'blur(8px)',
        }}
        animate={{
          scale: isSelected ? 1.4 : 1,
          opacity: isSelected ? 0.6 : 0.2,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Main node */}
      <motion.div
        className="relative w-10 h-10 rounded-full flex items-center justify-center border-2"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${artistColor}dd, ${artistColor}88)`,
          borderColor: isSelected ? '#fff' : 'rgba(255,255,255,0.3)',
          boxShadow: `
            inset 0 1px 3px rgba(255,255,255,0.3),
            inset 0 -1px 3px rgba(0,0,0,0.2),
            0 2px 8px rgba(0,0,0,0.3)
          `,
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Halftone texture */}
        <div
          className="absolute inset-0 rounded-full opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)',
            backgroundSize: '3px 3px',
          }}
        />

        {/* Artist initial or icon */}
        <span
          className="text-[9px] font-bold text-center leading-none"
          style={{ color: textColor }}
        >
          {artist.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
        </span>
      </motion.div>

      {/* Artist name label */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.08 }}
      >
        <span
          className="font-mono-data text-[9px] font-medium px-1.5 py-0.5 rounded"
          style={{
            color: '#fef3c7',
            textShadow: '0 1px 3px rgba(0,0,0,0.9)',
            backgroundColor: isSelected ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.4)',
          }}
        >
          {artist.name}
        </span>
      </motion.div>
    </motion.div>
  )
}
