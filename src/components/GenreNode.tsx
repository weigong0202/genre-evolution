import { motion } from 'framer-motion'
import type { Genre } from '../types'

interface GenreNodeProps {
  genre: Genre
  isSelected: boolean
  isConnected: boolean
  isHovered: boolean
  isHoverConnected: boolean
  onClick: () => void
  onHover: (genreId: string | null) => void
}

export function GenreNode({
  genre,
  isSelected,
  isConnected,
  isHovered,
  isHoverConnected,
  onClick,
  onHover
}: GenreNodeProps) {
  const isHighlighted = isSelected || isConnected || isHovered || isHoverConnected

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        left: `${genre.x}%`,
        top: `${genre.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      onClick={onClick}
      onMouseEnter={() => onHover(genre.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: genre.color,
          filter: 'blur(12px)',
        }}
        animate={{
          scale: isSelected ? 1.5 : isHighlighted ? 1.3 : 1,
          opacity: isSelected ? 0.6 : isHighlighted ? 0.5 : 0.15,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main node */}
      <motion.div
        className="relative w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${genre.color}dd, ${genre.color}88)`,
          boxShadow: `
            inset 0 2px 4px rgba(255,255,255,0.3),
            inset 0 -2px 4px rgba(0,0,0,0.2),
            0 4px 12px rgba(0,0,0,0.3)
          `,
        }}
        animate={{
          scale: isSelected ? 1.1 : isHighlighted ? 1.05 : 1,
          borderWidth: 2,
          borderColor: isSelected ? '#fff' : isHighlighted ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {/* Retro halftone texture overlay */}
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)`,
            backgroundSize: '4px 4px',
          }}
        />

        {/* Era badge */}
        <span className="text-[10px] font-bold text-white/90 drop-shadow-md">
          {genre.era}
        </span>
      </motion.div>

      {/* Label */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap"
        animate={{ opacity: isHighlighted ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
      >
        <span
          className="text-sm font-semibold px-2 py-0.5 rounded"
          style={{
            color: '#fef3c7',
            textShadow: '0 1px 2px rgba(0,0,0,0.8)',
            backgroundColor: isSelected || isHovered ? 'rgba(0,0,0,0.5)' : 'transparent',
          }}
        >
          {genre.name}
        </span>
      </motion.div>
    </div>
  )
}
