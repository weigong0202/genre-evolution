import type { GenreDetails } from '../../types'

interface GenreCardMusicalDNAProps {
  details: GenreDetails
  color: string
}

// Simple instrument icons mapping
const instrumentIcons: Record<string, string> = {
  'Electric Guitar': '🎸',
  'Acoustic Guitar': '🎸',
  'Bass': '🎸',
  'Drums': '🥁',
  'Piano': '🎹',
  'Keyboards': '🎹',
  'Organ': '🎹',
  'Synthesizers': '🎹',
  'Synthesizer': '🎹',
  'Voice': '🎤',
  'Vocals': '🎤',
  'Trumpet': '🎺',
  'Saxophone': '🎷',
  'Horns': '🎺',
  'Fiddle': '🎻',
  'Violin': '🎻',
  'Strings': '🎻',
  'Turntables': '💿',
  'Drum Machine': '🎛️',
  'Sampler': '🎛️',
  'Sequencer': '🎛️',
  'DAW': '💻',
  'Harmonica': '🎵',
  'Banjo': '🪕',
  'Steel Guitar': '🎸',
  'Slide Guitar': '🎸',
  'Double Bass': '🎻',
  'Tambourine': '🎵',
  'Choir': '🎤',
  'Effects Processors': '🎛️',
  'Field Recordings': '🎙️',
  'Controllers': '🎛️',
}

export function GenreCardMusicalDNA({ details, color }: GenreCardMusicalDNAProps) {
  return (
    <div className="h-full">
      <h3 className="text-sm font-bold text-amber-200/60 uppercase tracking-widest mb-4">
        Musical DNA
      </h3>

      {/* Instruments */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {details.instruments.slice(0, 4).map((instrument) => (
            <span
              key={instrument}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-sm"
              style={{
                background: `${color}20`,
                border: `1px solid ${color}40`,
                color: '#fef3c7',
              }}
            >
              <span>{instrumentIcons[instrument] || '🎵'}</span>
              <span>{instrument}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tempo */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-amber-200/60 text-sm">Tempo:</span>
          <span className="text-amber-100 text-base font-mono">{details.tempoRange}</span>
        </div>
      </div>

      {/* Signature Sounds */}
      <div>
        <span className="text-amber-200/60 text-sm block mb-2">Signature Sounds:</span>
        <div className="flex flex-wrap gap-2">
          {details.signatureSounds.slice(0, 4).map((sound) => (
            <span
              key={sound}
              className="text-sm px-3 py-1 rounded-full"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(251, 191, 36, 0.2)',
                color: '#fef3c7',
              }}
            >
              {sound}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
