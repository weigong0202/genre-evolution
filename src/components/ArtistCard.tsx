import { motion } from 'framer-motion'
import type { Artist, Genre } from '../types'
import { findArtistById, findArtistsByName } from '../data/artists'
import { genres } from '../data/genres'

interface ArtistCardProps {
  artist: Artist
  genre: Genre
  onClose: () => void
  onBack: () => void
  backLabel?: string
  onArtistClick?: (artist: Artist, genre: Genre) => void
  hideBackdrop?: boolean
}

export function ArtistCard({
  artist,
  genre,
  onClose,
  onBack,
  backLabel,
  onArtistClick,
  hideBackdrop = false,
}: ArtistCardProps) {
  // Get initials for fallback avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }

  // Handle clicking an influence artist
  const handleInfluenceClick = (artistName: string) => {
    if (!onArtistClick) return

    const matches = findArtistsByName(artistName)
    if (matches.length > 0) {
      const match = matches[0]
      const result = findArtistById(match.id)
      if (result) {
        const foundGenre = genres.find(g => g.id === result.genreId)
        if (foundGenre) {
          onArtistClick(match, foundGenre)
        }
      }
    }
  }

  // Check if an influence artist exists in our data
  const isArtistClickable = (artistName: string) => {
    return findArtistsByName(artistName).length > 0
  }

  const hasRichData = artist.bio || artist.essentialAlbums?.length

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

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-4 md:inset-8 lg:inset-12 z-50 overflow-hidden rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #1a1510 0%, #0d0a07 100%)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50
            flex items-center justify-center text-amber-200/70 hover:text-amber-200 transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2
            rounded-full bg-black/30 hover:bg-black/50 text-amber-200/70 hover:text-amber-200 transition-colors z-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {backLabel || genre.name}
        </button>

        {/* Scrollable content */}
        <div className="h-full overflow-y-auto p-6 pt-16">
          <div className="max-w-3xl mx-auto">

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 1: HEADER - Identity
                Who is this artist?
            ═══════════════════════════════════════════════════════════════ */}
            <header className="flex items-start gap-5 mb-6">
              {/* Avatar */}
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${genre.color}dd, ${genre.color}66)`,
                  boxShadow: `0 0 30px ${genre.color}40`,
                }}
              >
                {artist.imageUrl ? (
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-xl md:text-2xl font-bold text-white/90">
                    {getInitials(artist.name)}
                  </span>
                )}
              </div>

              {/* Name & Meta */}
              <div className="flex-1 min-w-0 pt-1">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-100 leading-tight">
                  {artist.name}
                </h2>
                {artist.tagline && (
                  <p className="text-base text-amber-200/50 italic mt-0.5">"{artist.tagline}"</p>
                )}
                <div className="flex flex-wrap items-center gap-2 text-sm mt-2">
                  <span className="text-amber-200/70 font-mono">{artist.years}</span>
                  {artist.origin && (
                    <>
                      <span className="text-amber-200/30">·</span>
                      <span className="text-amber-200/50">{artist.origin}</span>
                    </>
                  )}
                </div>
                {/* Genre badges */}
                {artist.genres && artist.genres.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {artist.genres.map(genreId => {
                      const g = genres.find(x => x.id === genreId)
                      return g ? (
                        <span
                          key={genreId}
                          className="px-2 py-0.5 rounded text-xs"
                          style={{
                            background: `${g.color}25`,
                            border: `1px solid ${g.color}40`,
                            color: '#fef3c7cc',
                          }}
                        >
                          {g.name}
                        </span>
                      ) : null
                    })}
                  </div>
                )}
              </div>
            </header>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2: SPOTIFY PLAYER - Immediate Audio
                Let them hear the artist right away
            ═══════════════════════════════════════════════════════════════ */}
            {artist.spotifyArtistId && (
              <section className="mb-6">
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src={`https://open.spotify.com/embed/artist/${artist.spotifyArtistId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="eager"
                    className="rounded-xl"
                  />
                </div>
              </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 3: THE STORY - Context
                Why should the user care about this artist?
            ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-6">
              <h3 className="text-[11px] font-bold tracking-widest text-amber-200/40 uppercase mb-2">
                The Story
              </h3>
              <div
                className="p-4 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${genre.color}12 0%, rgba(0,0,0,0.3) 100%)`,
                  border: `1px solid ${genre.color}25`,
                }}
              >
                <p className="text-amber-100/85 leading-relaxed text-[15px]">
                  {artist.bio || artist.significance}
                </p>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 4: ESSENTIAL ALBUMS - Discovery
                What albums should they explore?
                (Songs are in Spotify player, so we focus on albums here)
            ═══════════════════════════════════════════════════════════════ */}
            {artist.essentialAlbums && artist.essentialAlbums.length > 0 && (
              <section className="mb-6">
                <h3 className="text-[11px] font-bold tracking-widest text-amber-200/40 uppercase mb-3">
                  Essential Albums
                </h3>
                <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                  {artist.essentialAlbums.map((album, idx) => (
                    <a
                      key={idx}
                      href={album.spotifyUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                    >
                      {/* Album art */}
                      <div
                        className="w-28 h-28 md:w-32 md:h-32 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden
                          group-hover:scale-105 transition-transform shadow-lg"
                        style={{
                          background: album.albumArt
                            ? `url(${album.albumArt})`
                            : `linear-gradient(135deg, ${genre.color}50, ${genre.color}20)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          border: `1px solid ${genre.color}30`,
                        }}
                      >
                        {!album.albumArt && (
                          <span className="text-4xl opacity-50">💿</span>
                        )}
                        {/* Spotify hover overlay */}
                        {album.spotifyUrl && (
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100
                            transition-opacity flex items-center justify-center">
                            <svg className="w-10 h-10 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-amber-100/80 text-center font-medium max-w-[8rem] line-clamp-2">
                        {album.title}
                      </span>
                      <span className="text-xs text-amber-200/40 font-mono">{album.year}</span>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 5: MUSICAL LINEAGE - Connections
                How does this artist connect to others?
            ═══════════════════════════════════════════════════════════════ */}
            {(artist.influencedBy?.length || artist.influenced?.length) && (
              <section className="mb-4">
                <h3 className="text-[11px] font-bold tracking-widest text-amber-200/40 uppercase mb-3">
                  Musical Lineage
                </h3>
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(251, 191, 36, 0.1)',
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Influenced By */}
                    {artist.influencedBy && artist.influencedBy.length > 0 && (
                      <div>
                        <h4 className="text-xs font-medium text-amber-200/50 mb-2 flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                          </svg>
                          Influenced by
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {artist.influencedBy.map((name, idx) => {
                            const clickable = isArtistClickable(name)
                            return (
                              <button
                                key={idx}
                                onClick={() => clickable && handleInfluenceClick(name)}
                                disabled={!clickable}
                                className={`px-2.5 py-1 rounded text-sm transition-all
                                  ${clickable
                                    ? 'bg-amber-200/10 hover:bg-amber-200/20 text-amber-100/80 hover:text-amber-100 cursor-pointer border border-amber-200/20 hover:border-amber-200/40'
                                    : 'bg-amber-200/5 text-amber-100/40 cursor-default border border-transparent'
                                  }`}
                              >
                                {name}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Influenced */}
                    {artist.influenced && artist.influenced.length > 0 && (
                      <div>
                        <h4 className="text-xs font-medium text-amber-200/50 mb-2 flex items-center gap-1.5">
                          Influenced
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                          </svg>
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {artist.influenced.map((name, idx) => {
                            const clickable = isArtistClickable(name)
                            return (
                              <button
                                key={idx}
                                onClick={() => clickable && handleInfluenceClick(name)}
                                disabled={!clickable}
                                className={`px-2.5 py-1 rounded text-sm transition-all
                                  ${clickable
                                    ? 'bg-amber-200/10 hover:bg-amber-200/20 text-amber-100/80 hover:text-amber-100 cursor-pointer border border-amber-200/20 hover:border-amber-200/40'
                                    : 'bg-amber-200/5 text-amber-100/40 cursor-default border border-transparent'
                                  }`}
                              >
                                {name}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Fallback for basic artists without rich data */}
            {!hasRichData && !artist.spotifyArtistId && (
              <div className="text-center py-8 text-amber-200/30">
                <p className="text-sm">More details coming soon...</p>
              </div>
            )}

          </div>
        </div>
      </motion.div>
    </>
  )
}
