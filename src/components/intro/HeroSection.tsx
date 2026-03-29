import { motion } from 'framer-motion'

interface HeroSectionProps {
  scrollY: number
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  // Fade out as user scrolls
  const heroOpacity = Math.max(0, 1 - scrollY / 500)
  const heroTranslate = scrollY * 0.3

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
      style={{
        opacity: heroOpacity,
        transform: `translateY(-${heroTranslate}px)`,
      }}
    >
      {/* Small overline label */}
      <motion.div
        className="mb-8 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className="h-px w-12"
          style={{ background: 'rgba(255, 248, 235, 0.2)' }}
        />
        <span
          className="font-display text-[11px] tracking-[0.35em] uppercase"
          style={{ color: 'rgba(255, 248, 235, 0.4)' }}
        >
          An Interactive Exploration
        </span>
        <div
          className="h-px w-12"
          style={{ background: 'rgba(255, 248, 235, 0.2)' }}
        />
      </motion.div>

      {/* Main title — SONIC */}
      <div className="overflow-hidden">
        <motion.h1
          className="font-display font-800 leading-[0.85] tracking-[-0.03em] text-center"
          style={{
            fontSize: 'clamp(4rem, 14vw, 12rem)',
            color: '#fff8eb',
          }}
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          SONIC
        </motion.h1>
      </div>

      {/* Main title — UNIVERSE */}
      <div className="overflow-hidden -mt-1">
        <motion.h1
          className="font-display font-800 leading-[0.85] tracking-[-0.03em] text-center"
          style={{
            fontSize: 'clamp(4rem, 14vw, 12rem)',
            color: '#fff8eb',
          }}
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          UNIVERSE
        </motion.h1>
      </div>

      {/* Decorative rule */}
      <motion.div
        className="mt-8 mb-6 origin-center"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
      >
        <div
          className="w-24 h-px"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255, 248, 235, 0.3), transparent)',
          }}
        />
      </motion.div>

      {/* Tagline in serif italic */}
      <motion.p
        className="font-serif-accent italic text-center"
        style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          color: 'rgba(255, 248, 235, 0.55)',
          letterSpacing: '0.02em',
        }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        The genealogy of sound, mapped
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{ opacity: heroOpacity }}
      >
        <span
          className="font-display text-[10px] tracking-[0.3em] uppercase"
          style={{ color: 'rgba(255, 248, 235, 0.25)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{ color: 'rgba(255, 248, 235, 0.2)' }}
          >
            <path
              d="M8 4v16M3 15l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
