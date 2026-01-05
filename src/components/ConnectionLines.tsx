import { useMemo } from 'react'
import { motion } from 'framer-motion'
import type { Genre } from '../types'
import { genreMap } from '../data/genres'

interface ConnectionLinesProps {
  genres: Genre[]
  selectedGenreId: string | null
  hoveredGenreId: string | null
}

interface Line {
  id: string
  x1: number
  y1: number
  x2: number
  y2: number
  fromId: string
  toId: string
}

export function ConnectionLines({ genres, selectedGenreId, hoveredGenreId }: ConnectionLinesProps) {
  const lines = useMemo(() => {
    const result: Line[] = []
    const seen = new Set<string>()

    genres.forEach(genre => {
      genre.connections.forEach(connId => {
        const connectedGenre = genreMap.get(connId)
        if (!connectedGenre) return

        // Avoid duplicate lines
        const lineId = [genre.id, connId].sort().join('-')
        if (seen.has(lineId)) return
        seen.add(lineId)

        // Ensure left-to-right direction (earlier genre first)
        const [from, to] = genre.x < connectedGenre.x
          ? [genre, connectedGenre]
          : [connectedGenre, genre]

        result.push({
          id: lineId,
          x1: from.x,
          y1: from.y,
          x2: to.x,
          y2: to.y,
          fromId: from.id,
          toId: to.id,
        })
      })
    })

    return result
  }, [genres])

  // Determine which lines should be highlighted
  const getLineState = (line: Line) => {
    const activeId = hoveredGenreId || selectedGenreId
    if (!activeId) return 'faint'

    if (line.fromId === activeId || line.toId === activeId) {
      return 'highlighted'
    }
    return 'faint'
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Animated gradient for flowing effect */}
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3">
            <animate
              attributeName="stopOpacity"
              values="0.3;0.8;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9">
            <animate
              attributeName="offset"
              values="0.3;0.5;0.7;0.5;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3">
            <animate
              attributeName="stopOpacity"
              values="0.3;0.8;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Static gradient for highlighted lines - soft white/cream */}
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#fef3c7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.3" />
        </linearGradient>

        {/* Glow filter for highlighted lines */}
        <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Arrow marker for flow direction */}
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="#fbbf24" fillOpacity="0.8" />
        </marker>
      </defs>

      {/* Render faint lines first, highlighted on top */}
      {lines
        .sort((a, b) => {
          const stateA = getLineState(a)
          const stateB = getLineState(b)
          if (stateA === 'highlighted' && stateB === 'faint') return 1
          if (stateA === 'faint' && stateB === 'highlighted') return -1
          return 0
        })
        .map(line => {
          const state = getLineState(line)
          const isHighlighted = state === 'highlighted'

          // Calculate bezier control points for smooth curve
          const dx = line.x2 - line.x1
          const dy = line.y2 - line.y1
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Control point offset - creates a gentle arc
          const curvature = 0.2
          const midX = (line.x1 + line.x2) / 2
          const midY = (line.y1 + line.y2) / 2

          // Perpendicular offset for the curve
          const perpX = -dy / distance * distance * curvature
          const perpY = dx / distance * distance * curvature

          const controlX = midX + perpX * 0.3
          const controlY = midY + perpY * 0.3

          return (
            <g key={line.id}>
              {/* Main line */}
              <motion.path
                d={`M ${line.x1} ${line.y1} Q ${controlX} ${controlY} ${line.x2} ${line.y2}`}
                fill="none"
                stroke={isHighlighted ? 'rgba(254, 243, 199, 0.5)' : 'rgba(251, 191, 36, 0.12)'}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  strokeWidth: isHighlighted ? 0.3 : 0.12,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />

              {/* Animated flow particles for highlighted lines */}
              {isHighlighted && (
                <>
                  <circle r="0.3" fill="#fef3c7" opacity="0.5">
                    <animateMotion
                      dur="2.5s"
                      repeatCount="indefinite"
                      path={`M ${line.x1} ${line.y1} Q ${controlX} ${controlY} ${line.x2} ${line.y2}`}
                    />
                  </circle>
                  <circle r="0.2" fill="#fef3c7" opacity="0.3">
                    <animateMotion
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin="1.2s"
                      path={`M ${line.x1} ${line.y1} Q ${controlX} ${controlY} ${line.x2} ${line.y2}`}
                    />
                  </circle>
                </>
              )}
            </g>
          )
        })}
    </svg>
  )
}
