import { memo } from 'react'
import { motion } from 'framer-motion'
import type { Genre } from '../types'
import type { ReactNode } from 'react'
import { getColorBrightness } from '../utils/color'

interface GenreNodeProps {
  genre: Genre
  isSelected: boolean
  isConnected: boolean
  isHovered: boolean
  isHoverConnected: boolean
  isExpanded?: boolean
  isOtherExpanded?: boolean
  onClick: () => void
  onHover: (genreId: string | null) => void
  mousePos: { x: number; y: number }
  children?: ReactNode
}

export const GenreNode = memo(function GenreNode({
  genre,
  isSelected,
  isConnected,
  isHovered,
  isHoverConnected,
  isExpanded = false,
  isOtherExpanded = false,
  onClick,
  onHover,
  mousePos,
  children,
}: GenreNodeProps) {
  const isHighlighted = isSelected || isConnected || isHovered || isHoverConnected

  // More connections = more influential = moves slower (smaller parallax)
  const influence = genre.connections.length
  const parallaxIntensity = Math.max(2, 8 - influence) // Range: 2-8px
  const parallaxX = (mousePos.x - 0.5) * parallaxIntensity
  const parallaxY = (mousePos.y - 0.5) * parallaxIntensity

  // Determine text color based on bubble brightness
  const brightness = getColorBrightness(genre.color)
  const textColor = brightness > 160 ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.95)'
  const textShadow = brightness > 160
    ? '0 1px 2px rgba(255, 255, 255, 0.3)'
    : '0 1px 2px rgba(0, 0, 0, 0.5)'

  // When other genre is expanded, this node should fade and blur
  const dimmed = isOtherExpanded

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${genre.x}%`,
        top: `${genre.y}%`,
        transform: `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px))`,
        transition: 'transform 0.15s ease-out',
        zIndex: isExpanded ? 35 : isSelected ? 10 : 1,
      }}
      animate={{
        opacity: dimmed ? 0.15 : 1,
        filter: dimmed ? 'blur(4px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Clickable container */}
      <div
        className={dimmed ? 'pointer-events-none' : 'cursor-pointer'}
        onClick={onClick}
        onMouseEnter={() => !dimmed && onHover(genre.id)}
        onMouseLeave={() => !dimmed && onHover(null)}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: genre.color,
            filter: 'blur(12px)',
          }}
          animate={{
            scale: isExpanded ? 2 : isSelected ? 1.5 : isHighlighted ? 1.3 : 1,
            opacity: isExpanded ? 0.7 : isSelected ? 0.6 : isHighlighted ? 0.5 : 0.15,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main node */}
        <motion.div
          className="relative w-16 h-16 2xl:w-20 2xl:h-20 rounded-full flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${genre.color}dd, ${genre.color}88)`,
            boxShadow: `
              inset 0 2px 4px rgba(255,255,255,0.3),
              inset 0 -2px 4px rgba(0,0,0,0.2),
              0 4px 12px rgba(0,0,0,0.3)
            `,
          }}
          animate={{
            scale: isExpanded ? 1.2 : isSelected ? 1.1 : isHighlighted ? 1.05 : 1,
            borderWidth: 2,
            borderColor: isExpanded ? '#fef3c7' : isSelected ? '#fff' : isHighlighted ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
          }}
          whileHover={!isExpanded ? { scale: 1.15 } : {}}
          whileTap={!isExpanded ? { scale: 0.95 } : {}}
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

          {/* Genre name - now inside the bubble */}
          <span
            className="text-[11px] 2xl:text-[13px] font-bold text-center leading-tight px-1"
            style={{
              color: textColor,
              textShadow: textShadow,
            }}
          >
            {genre.name}
          </span>
        </motion.div>

        {/* Decade label - now outside as metadata */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap"
          animate={{ opacity: isHighlighted || isExpanded ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="font-mono-data text-xs 2xl:text-sm font-semibold px-2 py-0.5 rounded"
            style={{
              color: '#fef3c7',
              textShadow: '0 1px 4px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,0.8)',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            {genre.era}
          </span>
        </motion.div>
      </div>

      {/* Artist sub-nodes container - positioned relative to genre node center */}
      {children}
    </motion.div>
  )
})
