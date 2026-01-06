import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  scrollY: number
}

// Generate particles for the audio visualization
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: (i / count) * 360,
    distance: 180 + Math.random() * 60,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
  }))
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  const titleLetters = 'SONIC'.split('')
  const subtitleLetters = 'UNIVERSE'.split('')

  // Memoize particles so they don't regenerate on every render
  const particles = useMemo(() => generateParticles(48), [])

  // Fade out hero as user scrolls
  const heroOpacity = Math.max(0, 1 - scrollY / 400)
  const heroScale = 1 - scrollY * 0.0005

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
      style={{
        opacity: heroOpacity,
        transform: `scale(${heroScale})`,
      }}
    >
      {/* Audio visualization - circular waveform behind title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Pulsing rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute rounded-full"
            style={{
              width: 280 + ring * 100,
              height: 280 + ring * 100,
              border: `1px solid rgba(251, 191, 36, ${0.15 - ring * 0.03})`,
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5 + ring * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: ring * 0.4,
            }}
          />
        ))}

        {/* Particle ring - using SVG for precise positioning */}
        <svg
          className="absolute"
          width="500"
          height="500"
          viewBox="-250 -250 500 500"
          style={{ overflow: 'visible' }}
        >
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {particles.map((particle) => {
              const x = Math.cos((particle.angle * Math.PI) / 180) * particle.distance
              const y = Math.sin((particle.angle * Math.PI) / 180) * particle.distance
              return (
                <motion.circle
                  key={particle.id}
                  cx={x}
                  cy={y}
                  r={particle.size}
                  fill={`rgba(251, 191, 36, 0.6)`}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    r: [particle.size * 0.8, particle.size * 1.3, particle.size * 0.8],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: particle.delay,
                  }}
                />
              )
            })}
          </motion.g>
        </svg>

        {/* Center glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Title */}
      <div className="text-center mb-6 relative z-10">
        {/* SONIC */}
        <div className="flex justify-center gap-1 sm:gap-2 md:gap-4 mb-2">
          {titleLetters.map((letter, i) => (
            <motion.span
              key={`sonic-${i}`}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-amber-100 tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em]"
              style={{
                textShadow: '0 0 60px rgba(251,191,36,0.4), 0 0 120px rgba(251,191,36,0.2)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + i * 0.05,
                ease: 'easeOut',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* UNIVERSE */}
        <div className="flex justify-center gap-0.5 sm:gap-1 md:gap-3">
          {subtitleLetters.map((letter, i) => (
            <motion.span
              key={`universe-${i}`}
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-amber-100/90 tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.3em]"
              style={{
                textShadow: '0 0 40px rgba(251,191,36,0.3), 0 0 80px rgba(251,191,36,0.15)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + i * 0.04,
                ease: 'easeOut',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <motion.p
        className="text-xl md:text-2xl text-amber-200/80 italic tracking-wide text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      >
        Where every beat has a story
      </motion.p>

      {/* Decorative line */}
      <motion.div
        className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mt-8 relative z-10"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ opacity: heroOpacity }}
      >
        <span className="text-amber-200/60 text-sm tracking-widest uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-amber-200/60"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
