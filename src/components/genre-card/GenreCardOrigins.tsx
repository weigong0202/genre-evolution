import type { GenreDetails } from '../../types'

interface GenreCardOriginsProps {
  details: GenreDetails
}

export function GenreCardOrigins({ details }: GenreCardOriginsProps) {
  return (
    <div className="h-full">
      <h3 className="text-sm font-bold text-amber-200/60 uppercase tracking-widest mb-4">
        Origins
      </h3>

      {/* Birthplace */}
      <div className="mb-4">
        <div className="flex items-start gap-2">
          <span className="text-xl">📍</span>
          <span className="text-amber-100 text-base">{details.birthplace}</span>
        </div>
      </div>

      {/* Cultural Context */}
      <div className="mb-4">
        <p className="text-amber-100/80 text-sm leading-relaxed">
          {details.culturalContext}
        </p>
      </div>

      {/* Key Venues */}
      {details.keyVenues && details.keyVenues.length > 0 && (
        <div>
          <span className="text-amber-200/60 text-sm block mb-2">Key Venues:</span>
          <div className="flex flex-wrap gap-2">
            {details.keyVenues.slice(0, 3).map((venue) => (
              <span
                key={venue}
                className="text-sm px-3 py-1 rounded"
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  color: '#fef3c7',
                }}
              >
                {venue}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
