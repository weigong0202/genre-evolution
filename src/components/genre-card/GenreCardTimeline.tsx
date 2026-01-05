import type { GenreDetails } from '../../types'

interface GenreCardTimelineProps {
  details: GenreDetails
  color: string
}

export function GenreCardTimeline({ details, color }: GenreCardTimelineProps) {
  return (
    <div className="h-full">
      <h3 className="text-sm font-bold text-amber-200/60 uppercase tracking-widest mb-4">
        Timeline & Lineage
      </h3>

      {/* Roots - What influenced this genre */}
      <div className="mb-4">
        <div className="flex items-start gap-2">
          <span className="text-amber-200/60 text-sm flex-shrink-0">← Roots:</span>
          <p className="text-amber-100/80 text-sm leading-relaxed">{details.roots}</p>
        </div>
      </div>

      {/* Era info */}
      <div className="flex gap-6 mb-3 text-sm">
        <div>
          <span className="text-amber-200/60">Emerged:</span>
          <span className="text-amber-100 ml-1">{details.emergence}</span>
        </div>
        <div>
          <span className="text-amber-200/60">Peak:</span>
          <span className="text-amber-100 ml-1">{details.peakYears}</span>
        </div>
      </div>

      {/* Key Moments Timeline */}
      <div className="relative pl-5 mb-4">
        {/* Vertical line */}
        <div
          className="absolute left-1.5 top-1 bottom-1 w-0.5"
          style={{ background: `${color}40` }}
        />

        {details.keyMoments.slice(0, 3).map((moment, index) => (
          <div key={index} className="relative mb-2 last:mb-0">
            {/* Dot */}
            <div
              className="absolute -left-3.5 top-1.5 w-2.5 h-2.5 rounded-full"
              style={{ background: color }}
            />
            {/* Content */}
            <div className="pl-2">
              <span className="text-amber-200/60 text-xs font-mono">{moment.year}</span>
              <p className="text-amber-100/90 text-sm leading-snug">{moment.event}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Legacy - What this genre influenced */}
      <div className="pt-3 border-t border-amber-200/15">
        <div className="flex items-start gap-2">
          <span className="text-amber-200/60 text-sm flex-shrink-0">→ Legacy:</span>
          <p className="text-amber-100/80 text-sm leading-relaxed">{details.legacy}</p>
        </div>
      </div>
    </div>
  )
}
