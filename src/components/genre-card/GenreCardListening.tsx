import type { GenreDetails } from '../../types'

interface GenreCardListeningProps {
  details: GenreDetails
  color: string
}

export function GenreCardListening({ details, color }: GenreCardListeningProps) {
  return (
    <div className="h-full">
      <h3 className="text-sm font-bold text-amber-200/60 uppercase tracking-widest mb-4">
        Must-Hear Albums
      </h3>

      {/* Albums as vinyl records */}
      <div className="mb-4">
        <div className="flex gap-5 overflow-x-auto pb-1">
          {details.definitiveAlbums.slice(0, 3).map((album) => (
            <div
              key={album.title}
              className="flex-shrink-0 w-20"
            >
              {/* Vinyl record */}
              <div
                className="vinyl-record w-20 h-20 rounded-full mb-2 relative cursor-pointer"
                style={{
                  background: `radial-gradient(circle at 50% 50%,
                    #1a1a1a 0%,
                    #0a0a0a 20%,
                    #1a1a1a 21%,
                    #0a0a0a 40%,
                    #1a1a1a 41%,
                    #0a0a0a 60%,
                    #1a1a1a 61%,
                    #0a0a0a 80%,
                    #1a1a1a 81%,
                    #0a0a0a 100%)`,
                  border: '3px solid #0a0a0a',
                  boxShadow: `0 4px 12px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05)`,
                }}
              >
                {/* Center label */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex flex-col items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${color}, ${color}aa)`,
                    border: '1px solid rgba(0,0,0,0.3)',
                    boxShadow: `inset 0 1px 2px rgba(255,255,255,0.3)`,
                  }}
                >
                  {/* Spindle hole */}
                  <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                </div>
              </div>
              <p className="text-xs text-amber-100 font-medium truncate text-center">{album.title}</p>
              <p className="text-xs text-amber-100/60 truncate text-center">{album.artist} ({album.year})</p>
            </div>
          ))}
        </div>
      </div>

      {/* Iconic Songs */}
      <div className="mb-4">
        <span className="text-amber-200/60 text-sm block mb-2">Iconic Songs:</span>
        <div className="space-y-1">
          {details.signatureTracks.slice(0, 4).map((track) => (
            <div key={track} className="flex items-center gap-2 text-sm">
              <span className="text-amber-200/50">♪</span>
              <span className="text-amber-100/90 truncate">{track}</span>
            </div>
          ))}
        </div>
      </div>

      {/* New to this genre */}
      <div
        className="p-3 rounded-lg"
        style={{
          background: 'rgba(0,0,0,0.3)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
        }}
      >
        <span className="text-amber-200/60 text-sm block mb-1">New to this genre?</span>
        <span className="text-amber-100 text-sm">{details.startHere}</span>
      </div>
    </div>
  )
}
