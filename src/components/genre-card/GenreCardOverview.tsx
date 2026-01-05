import type { Genre } from '../../types'
import { genreMap } from '../../data/genres'
import { genreArtists } from '../../data/artists'
import { genreDetails } from '../../data/genreDetails'

interface GenreCardOverviewProps {
  genre: Genre
  onExploreArtists?: () => void
  onConnectionClick: (genreId: string) => void
}

export function GenreCardOverview({
  genre,
  onExploreArtists,
  onConnectionClick,
}: GenreCardOverviewProps) {
  const connectedGenres = genre.connections
    .map(id => genreMap.get(id))
    .filter(Boolean) as Genre[]

  const artists = genreArtists[genre.id] || []
  const details = genreDetails[genre.id]
  const spotifyTrackId = details?.spotifyTrackId

  return (
    <div className="h-full flex flex-col">
      {/* Genre indicator and title */}
      <div className="text-center mb-3">
        <div
          className="w-16 h-16 rounded-full mb-3 mx-auto"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${genre.color}, ${genre.color}88)`,
            boxShadow: `0 0 40px ${genre.color}50, inset 0 2px 4px rgba(255,255,255,0.3)`,
          }}
        />
        <h2 className="text-2xl font-bold text-amber-100 mb-1">
          {genre.name}
        </h2>
        <p className="text-amber-200/60 text-sm font-medium tracking-wider">
          {genre.era}
        </p>
      </div>

      {/* Description */}
      <div
        className="p-3 rounded-lg mb-3"
        style={{
          background: 'rgba(251, 191, 36, 0.05)',
          border: '1px solid rgba(251, 191, 36, 0.15)',
        }}
      >
        <p className="text-amber-100/90 text-base leading-relaxed">
          {genre.description}
        </p>
      </div>

      {/* Spotify Player - After description */}
      {spotifyTrackId && (
        <div className="mb-3">
          <iframe
            src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
            className="rounded-lg"
            style={{ borderRadius: '12px' }}
          />
        </div>
      )}

      {/* Explore Artists Button */}
      {artists.length > 0 && onExploreArtists && (
        <button
          onClick={onExploreArtists}
          className="w-full p-3 rounded-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] mb-4"
          style={{
            background: `linear-gradient(135deg, ${genre.color}40 0%, ${genre.color}20 100%)`,
            border: `1px solid ${genre.color}60`,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-100">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
          </svg>
          <span className="text-amber-100 font-semibold text-sm">
            Explore {artists.length} Key Artists
          </span>
        </button>
      )}

      {/* Connected Genres */}
      {connectedGenres.length > 0 && (
        <div className="mt-auto">
          <h3 className="text-xs font-bold text-amber-200/50 uppercase tracking-widest mb-2">
            Connected
          </h3>
          <div className="flex flex-wrap gap-2">
            {connectedGenres.map(connected => (
              <button
                key={connected.id}
                onClick={() => onConnectionClick(connected.id)}
                className="flex items-center gap-1.5 px-2 py-1 rounded-full transition-all hover:bg-amber-900/30 text-xs"
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                }}
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    background: connected.color,
                  }}
                />
                <span className="text-amber-100/80">{connected.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
