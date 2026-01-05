import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Genre } from '../types'
import { genreDetails } from '../data/genreDetails'
import { GenreCardOverview } from './genre-card/GenreCardOverview'

type TabId = 'about' | 'listen'

interface GenreCardProps {
  genre: Genre | null
  onClose: () => void
  onConnectionClick: (genreId: string) => void
  onExploreArtists?: () => void
  hideBackdrop?: boolean
}

export function GenreCard({
  genre,
  onClose,
  onConnectionClick,
  onExploreArtists,
  hideBackdrop = false,
}: GenreCardProps) {
  const [activeTab, setActiveTab] = useState<TabId>('about')

  if (!genre) return null

  const details = genreDetails[genre.id]

  return (
    <>
      {!hideBackdrop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        />
      )}

      {/* Centered Modal - wider for multi-panel */}
      <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-4 md:inset-6 lg:inset-8 z-50 overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #1a1510 0%, #0d0a07 100%)',
            border: '1px solid rgba(251, 191, 36, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* Retro border decoration */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-amber-200/70 hover:text-amber-200 transition-colors z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Genre View - Multi-panel layout */}
          <motion.div
                key="genre-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-6 pt-4 overflow-y-auto h-full"
              >
                {/* Header with gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom, ${genre.color}20 0%, transparent 100%)`,
                  }}
                />

                {details ? (
                  /* Full layout with 2 tabs */
                  <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 pt-8 h-[calc(100%-80px)]">
                    {/* Left Panel - Overview */}
                    <div
                      className="p-5 rounded-xl h-full overflow-y-auto"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(251, 191, 36, 0.1)',
                      }}
                    >
                      <GenreCardOverview
                        genre={genre}
                        onExploreArtists={onExploreArtists}
                        onConnectionClick={onConnectionClick}
                      />
                    </div>

                    {/* Right Panel - Tabbed Content */}
                    <div
                      className="rounded-xl flex flex-col"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(251, 191, 36, 0.1)',
                      }}
                    >
                      {/* Tab Buttons */}
                      <div className="flex border-b border-amber-200/10">
                        <button
                          onClick={() => setActiveTab('about')}
                          className={`flex-1 px-6 py-3 text-sm font-medium transition-all relative ${
                            activeTab === 'about'
                              ? 'text-amber-100'
                              : 'text-amber-200/50 hover:text-amber-200/80'
                          }`}
                        >
                          <span className="mr-2">📖</span>
                          About This Genre
                          {activeTab === 'about' && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute bottom-0 left-0 right-0 h-0.5"
                              style={{ background: genre.color }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          )}
                        </button>
                        <button
                          onClick={() => setActiveTab('listen')}
                          className={`flex-1 px-6 py-3 text-sm font-medium transition-all relative ${
                            activeTab === 'listen'
                              ? 'text-amber-100'
                              : 'text-amber-200/50 hover:text-amber-200/80'
                          }`}
                        >
                          <span className="mr-2">🎵</span>
                          What to Listen
                          {activeTab === 'listen' && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute bottom-0 left-0 right-0 h-0.5"
                              style={{ background: genre.color }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          )}
                        </button>
                      </div>

                      {/* Tab Content */}
                      <div className="flex-1 p-6">
                        <AnimatePresence mode="wait">
                          {activeTab === 'about' ? (
                            <motion.div
                              key="about"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                            >
                              {/* Two-Column Layout */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left Column: The Sound */}
                                <div>
                                  <h4 className="text-base font-bold text-amber-100 mb-4">
                                    The Sound
                                  </h4>

                                  {/* Instruments */}
                                  <div className="mb-5">
                                    <div className="flex flex-wrap gap-2">
                                      {details.instruments.map((instrument) => (
                                        <span
                                          key={instrument}
                                          className="inline-flex items-center px-3 py-1.5 rounded text-sm"
                                          style={{
                                            background: `${genre.color}20`,
                                            border: `1px solid ${genre.color}40`,
                                            color: '#fef3c7',
                                          }}
                                        >
                                          {instrument}
                                        </span>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Tempo */}
                                  <div className="mb-5">
                                    <span className="text-amber-200/60 text-sm">Tempo: </span>
                                    <span className="text-amber-100 font-mono">{details.tempoRange}</span>
                                  </div>

                                  {/* Signature Sounds */}
                                  <div>
                                    <span className="text-amber-200/60 text-sm block mb-2">Signature Sounds</span>
                                    <div className="flex flex-wrap gap-2">
                                      {details.signatureSounds.map((sound) => (
                                        <span
                                          key={sound}
                                          className="text-sm px-3 py-1 rounded-full text-amber-100/90"
                                          style={{
                                            background: 'rgba(0,0,0,0.4)',
                                            border: '1px solid rgba(251, 191, 36, 0.15)',
                                          }}
                                        >
                                          {sound}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Right Column: The Story */}
                                <div className="md:border-l md:border-amber-200/10 md:pl-8">
                                  <h4 className="text-base font-bold text-amber-100 mb-4">
                                    The Story
                                  </h4>

                                  {/* Where & When */}
                                  <div className="flex items-center gap-4 mb-3 text-sm">
                                    <div className="flex items-center gap-1">
                                      <span>📍</span>
                                      <span className="text-amber-100">{details.birthplace}</span>
                                    </div>
                                    <div>
                                      <span className="text-amber-100">{details.emergence}</span>
                                      <span className="text-amber-200/40 mx-1">→</span>
                                      <span className="text-amber-100">{details.peakYears}</span>
                                    </div>
                                  </div>

                                  {/* Cultural Context */}
                                  <p className="text-amber-100/80 text-sm leading-relaxed mb-5">
                                    {details.culturalContext}
                                  </p>

                                  {/* Genre Lineage - Clear flow */}
                                  <div
                                    className="p-3 rounded-lg mb-4"
                                    style={{
                                      background: 'rgba(0,0,0,0.3)',
                                      border: '1px solid rgba(251, 191, 36, 0.1)',
                                    }}
                                  >
                                    <div className="text-xs text-amber-200/50 uppercase tracking-wider mb-2">Genre Lineage</div>
                                    <div className="flex items-center gap-2 text-sm">
                                      <span className="text-amber-100/70">{details.roots}</span>
                                      <span className="text-amber-200/40">→</span>
                                      <span
                                        className="font-medium px-2 py-0.5 rounded"
                                        style={{ background: `${genre.color}30`, color: '#fef3c7' }}
                                      >
                                        {genre.name}
                                      </span>
                                      <span className="text-amber-200/40">→</span>
                                      <span className="text-amber-100/70">{details.legacy}</span>
                                    </div>
                                  </div>

                                  {/* Key Moments Timeline */}
                                  <div className="relative pt-3">
                                    <div
                                      className="absolute top-0 left-0 right-0 h-0.5"
                                      style={{ background: `${genre.color}40` }}
                                    />
                                    <div className="flex justify-between gap-3">
                                      {details.keyMoments.slice(0, 3).map((moment, index) => (
                                        <div key={index} className="flex-1 relative">
                                          <div
                                            className="absolute -top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
                                            style={{ background: genre.color }}
                                          />
                                          <div className="text-center pt-1">
                                            <span className="text-amber-200/60 text-xs font-mono block">{moment.year}</span>
                                            <p className="text-amber-100/90 text-xs">{moment.event}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="listen"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                            >
                              {/* Signature Tracks - Playlist with compact track list (same as artist modal) */}
                              {details.spotifyPlaylistId && (
                                <div className="mb-8">
                                  <h4 className="text-xs font-bold text-amber-200/50 uppercase tracking-widest mb-3">
                                    Signature Tracks
                                  </h4>
                                  <div className="rounded-xl overflow-hidden">
                                    <iframe
                                      src={`https://open.spotify.com/embed/playlist/${details.spotifyPlaylistId}?utm_source=generator&theme=0`}
                                      width="100%"
                                      height="152"
                                      frameBorder="0"
                                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                      loading="eager"
                                      className="rounded-xl"
                                    />
                                  </div>
                                </div>
                              )}

                              {/* Essential Albums - Visual discovery */}
                              <div>
                                <h4 className="text-xs font-bold text-amber-200/50 uppercase tracking-widest mb-5">
                                  Essential Albums
                                </h4>
                                <div className="flex gap-8 justify-center flex-wrap">
                                  {details.definitiveAlbums.map((album) => (
                                    <a
                                      key={album.title}
                                      href={`https://open.spotify.com/search/${encodeURIComponent(`${album.title} ${album.artist}`)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-center group w-28"
                                    >
                                      <div
                                        className="w-28 h-28 mb-3 relative cursor-pointer mx-auto group-hover:scale-105 transition-transform rounded-lg overflow-hidden"
                                        style={{
                                          boxShadow: `0 8px 24px rgba(0,0,0,0.6), 0 0 30px ${genre.color}20`,
                                        }}
                                      >
                                        {album.albumArt ? (
                                          <img
                                            src={album.albumArt}
                                            alt={`${album.title} by ${album.artist}`}
                                            className="w-full h-full object-cover"
                                            referrerPolicy="no-referrer"
                                            onError={(e) => {
                                              const target = e.target as HTMLImageElement
                                              target.style.display = 'none'
                                              const fallback = target.nextElementSibling as HTMLElement
                                              if (fallback) fallback.classList.remove('hidden')
                                            }}
                                          />
                                        ) : null}
                                        <div
                                          className={`absolute inset-0 flex flex-col items-center justify-center p-2 ${album.albumArt ? 'hidden' : ''}`}
                                          style={{
                                            background: `linear-gradient(135deg, ${genre.color}60 0%, ${genre.color}30 50%, rgba(0,0,0,0.5) 100%)`,
                                            border: `1px solid ${genre.color}40`,
                                          }}
                                        >
                                          <span
                                            className="text-3xl font-bold opacity-80"
                                            style={{ color: 'rgba(255,255,255,0.9)' }}
                                          >
                                            {album.title.charAt(0)}
                                          </span>
                                          <span className="text-xs text-white/60 mt-1 text-center line-clamp-2">{album.artist}</span>
                                        </div>
                                        {/* Spotify overlay on hover */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                          <svg
                                            className="w-8 h-8 text-green-400"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                          >
                                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                                          </svg>
                                        </div>
                                      </div>
                                      <p className="text-sm text-amber-100 font-medium group-hover:text-green-400 transition-colors line-clamp-2">{album.title}</p>
                                      <p className="text-xs text-amber-100/60 line-clamp-1">{album.artist}</p>
                                      <p className="text-xs text-amber-100/40 mt-0.5">{album.year}</p>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Fallback for genres without details */
                  <div className="max-w-lg mx-auto pt-8">
                    <GenreCardOverview
                      genre={genre}
                      onExploreArtists={onExploreArtists}
                      onConnectionClick={onConnectionClick}
                    />
                  </div>
                )}

                {/* Coordinates footer (retro touch) */}
                <div className="mt-6 pt-4 border-t border-amber-200/10">
                  <p className="text-[10px] text-amber-200/60 font-mono tracking-wider text-center">
                    SECTOR {genre.era} | COORDINATES X{genre.x.toFixed(0)} Y{genre.y.toFixed(0)}
                  </p>
                </div>
              </motion.div>
      </motion.div>
    </>
  )
}
