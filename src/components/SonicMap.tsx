import { useState, useCallback } from 'react'
import { genres } from '../data/genres'
import { GenreNode } from './GenreNode'
import { ConnectionLines } from './ConnectionLines'
import { GenreCard } from './GenreCard'
import type { Genre } from '../types'

export function SonicMap() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [hoveredGenreId, setHoveredGenreId] = useState<string | null>(null)

  const handleGenreClick = useCallback((genre: Genre) => {
    setSelectedGenre(genre)
  }, [])

  const handleGenreHover = useCallback((genreId: string | null) => {
    setHoveredGenreId(genreId)
  }, [])

  const handleConnectionClick = useCallback((genreId: string) => {
    const genre = genres.find(g => g.id === genreId)
    if (genre) setSelectedGenre(genre)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950">
      {/* Retro grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Map container */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Connection lines */}
          <ConnectionLines
            genres={genres}
            selectedGenreId={selectedGenre?.id ?? null}
            hoveredGenreId={hoveredGenreId}
          />

          {/* Genre nodes */}
          {genres.map(genre => (
            <GenreNode
              key={genre.id}
              genre={genre}
              isSelected={selectedGenre?.id === genre.id}
              isConnected={selectedGenre?.connections.includes(genre.id) ?? false}
              isHovered={hoveredGenreId === genre.id}
              isHoverConnected={
                hoveredGenreId !== null &&
                (genres.find(g => g.id === hoveredGenreId)?.connections.includes(genre.id) ?? false)
              }
              onClick={() => handleGenreClick(genre)}
              onHover={handleGenreHover}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-6 left-6 z-30">
        <h1 className="text-2xl font-bold text-amber-100 tracking-wide">
          SONIC UNIVERSE
        </h1>
        <p className="text-amber-200/50 text-sm mt-1">
          Explore the genealogy of music
        </p>
      </div>

      {/* Instructions */}
      <div className="absolute top-6 right-6 z-30 text-right">
        <p className="text-amber-200/40 text-xs">
          Click a genre to explore
        </p>
      </div>

      {/* X-Axis: Timeline (full width) */}
      <div className="absolute bottom-[8%] left-[4%] right-[3%] z-10 pointer-events-none">
        {/* Axis line with decade markers */}
        <div className="relative w-full h-6">
          {/* Main axis line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber-200/30 via-amber-200/20 to-amber-200/30">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 text-amber-200/30">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Decade markers */}
          {[
            { decade: "'20s", pos: 0 },
            { decade: "'30s", pos: 12 },
            { decade: "'40s", pos: 22 },
            { decade: "'50s", pos: 34 },
            { decade: "'60s", pos: 44 },
            { decade: "'70s", pos: 55 },
            { decade: "'80s", pos: 69 },
            { decade: "'90s", pos: 82 },
            { decade: "'10s", pos: 100 },
          ].map(({ decade, pos }) => (
            <div
              key={decade}
              className="absolute top-0 flex flex-col items-center"
              style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            >
              {/* Tick mark */}
              <div className="w-px h-2 bg-amber-200/40" />
              {/* Decade label */}
              <span className="text-amber-200/50 text-[10px] font-medium mt-1">{decade}</span>
            </div>
          ))}
        </div>
        {/* Axis title */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8">
          <span className="text-amber-200/30 text-[10px] font-medium tracking-widest">TIMELINE</span>
        </div>
      </div>

      {/* Y-Axis: Sonic Character (full height, left side) */}
      <div className="absolute left-[4%] top-[18%] bottom-[10%] z-10 pointer-events-none">
        <div className="relative h-full flex flex-col items-center">
          {/* Top label */}
          <div className="flex flex-col items-center gap-1 pb-2">
            <span className="text-amber-200/50 text-[10px] font-medium whitespace-nowrap">ELECTRONIC</span>
          </div>
          {/* Axis line */}
          <div className="flex-1 w-px bg-gradient-to-b from-amber-200/30 via-amber-200/20 to-amber-200/30 relative">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 rotate-[-90deg] text-amber-200/30">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 rotate-90 text-amber-200/30">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Bottom label */}
          <div className="flex flex-col items-center gap-1 pt-2">
            <span className="text-amber-200/50 text-[10px] font-medium whitespace-nowrap">GUITAR-DRIVEN</span>
          </div>
        </div>
      </div>

      {/* Genre card */}
      <GenreCard
        genre={selectedGenre}
        onClose={() => setSelectedGenre(null)}
        onConnectionClick={handleConnectionClick}
      />
    </div>
  )
}
