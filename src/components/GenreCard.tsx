import { motion, AnimatePresence } from 'framer-motion'
import type { Genre } from '../types'
import { genreMap } from '../data/genres'

interface GenreCardProps {
  genre: Genre | null
  onClose: () => void
  onConnectionClick: (genreId: string) => void
}

export function GenreCard({ genre, onClose, onConnectionClick }: GenreCardProps) {
  if (!genre) return null

  const connectedGenres = genre.connections
    .map(id => genreMap.get(id))
    .filter(Boolean) as Genre[]

  return (
    <AnimatePresence>
      {genre && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a1510 0%, #0d0a07 100%)',
              borderLeft: '1px solid rgba(251, 191, 36, 0.2)',
            }}
          >
            {/* Retro border decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600" />

            {/* Header */}
            <div
              className="relative p-6 pb-8"
              style={{
                background: `linear-gradient(to bottom, ${genre.color}30 0%, transparent 100%)`,
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-amber-200/70 hover:text-amber-200 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Genre color indicator */}
              <div
                className="w-20 h-20 rounded-full mb-4 mx-auto"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${genre.color}, ${genre.color}88)`,
                  boxShadow: `0 0 30px ${genre.color}60, inset 0 2px 4px rgba(255,255,255,0.3)`,
                }}
              />

              {/* Title */}
              <h2 className="text-3xl font-bold text-center text-amber-100 mb-1">
                {genre.name}
              </h2>
              <p className="text-center text-amber-200/60 text-sm font-medium tracking-wider">
                {genre.era}
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)' }}>
              {/* Description */}
              <div
                className="p-4 rounded-lg"
                style={{
                  background: 'rgba(251, 191, 36, 0.05)',
                  border: '1px solid rgba(251, 191, 36, 0.15)',
                }}
              >
                <p className="text-amber-100/90 leading-relaxed">
                  {genre.description}
                </p>
              </div>

              {/* Connections */}
              {connectedGenres.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-amber-200/50 uppercase tracking-widest mb-3">
                    Connected Genres
                  </h3>
                  <div className="space-y-2">
                    {connectedGenres.map(connected => (
                      <button
                        key={connected.id}
                        onClick={() => onConnectionClick(connected.id)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-amber-900/20 group"
                        style={{
                          border: '1px solid rgba(251, 191, 36, 0.1)',
                        }}
                      >
                        {/* Color dot */}
                        <div
                          className="w-8 h-8 rounded-full flex-shrink-0"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, ${connected.color}, ${connected.color}88)`,
                            boxShadow: `0 0 10px ${connected.color}40`,
                          }}
                        />
                        <div className="flex-1 text-left">
                          <p className="text-amber-100 font-medium group-hover:text-amber-300 transition-colors">
                            {connected.name}
                          </p>
                          <p className="text-amber-200/40 text-xs">
                            {connected.era}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-amber-200/30 group-hover:text-amber-200/60 transition-colors"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Coordinates (retro touch) */}
              <div className="pt-4 border-t border-amber-200/10">
                <p className="text-[10px] text-amber-200/30 font-mono tracking-wider">
                  POSITION: X{genre.x.toFixed(0)} Y{genre.y.toFixed(0)} | SECTOR: {genre.era}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
