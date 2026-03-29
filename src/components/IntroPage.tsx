import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IntroPageProps {
  onEnter: () => void
  isTransitioning: boolean
}

export function IntroPage({ onEnter, isTransitioning }: IntroPageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center relative"
      style={{ background: '#0c0a09' }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-50 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Concentric rings — sound wave motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const size = 300 + i * 160
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                border: `1px solid rgba(251, 191, 36, ${0.04 + (7 - i) * 0.008})`,
                animation: `ring-pulse ${4 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          )
        })}

        {/* Warm gradient glow behind rings */}
        <div
          className="absolute rounded-full"
          style={{
            width: 800,
            height: 800,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(180, 120, 60, 0.06) 0%, rgba(120, 80, 40, 0.03) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Color accent — genre-color gradients at edges */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 15% 20%, rgba(65, 105, 225, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 75%, rgba(230, 57, 70, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 90%, rgba(0, 172, 193, 0.05) 0%, transparent 40%)
          `,
        }}
      />

      {/* Warp transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 50%, transparent 0%, #0c0a09 70%)',
              }}
              initial={{ opacity: 0, scale: 3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            />
            <motion.div
              className="absolute inset-0 bg-stone-950"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content — all in one screen */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Overline */}
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="h-px w-12" style={{ background: 'rgba(254, 243, 199, 0.2)' }} />
          <span
            className="font-display text-[11px] tracking-[0.35em] uppercase"
            style={{ color: 'rgba(254, 243, 199, 0.4)' }}
          >
            An Interactive Exploration
          </span>
          <div className="h-px w-12" style={{ background: 'rgba(254, 243, 199, 0.2)' }} />
        </motion.div>

        {/* SONIC */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display font-800 leading-[0.85] tracking-[-0.03em] text-center"
            style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', color: '#fef3c7' }}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            SONIC
          </motion.h1>
        </div>

        {/* UNIVERSE */}
        <div className="overflow-hidden -mt-1">
          <motion.h1
            className="font-display font-800 leading-[0.85] tracking-[-0.03em] text-center"
            style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', color: '#fef3c7' }}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            UNIVERSE
          </motion.h1>
        </div>

        {/* Rule */}
        <motion.div
          className="mt-8 mb-6 origin-center"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
        >
          <div
            className="w-24 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(254, 243, 199, 0.3), transparent)' }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-serif-accent italic text-center mb-14"
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            color: 'rgba(254, 243, 199, 0.55)',
            letterSpacing: '0.02em',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          The genealogy of sound, mapped
        </motion.p>

        {/* Enter button */}
        <motion.button
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5, type: 'spring', stiffness: 120 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: '1px solid rgba(254, 243, 199, 0.1)', transform: 'scale(1.35)' }}
            animate={isHovered
              ? { borderColor: 'rgba(254, 243, 199, 0.2)', transform: 'scale(1.45)' }
              : { borderColor: 'rgba(254, 243, 199, 0.1)', transform: 'scale(1.35)' }
            }
            transition={{ duration: 0.4 }}
          />

          {/* Main circle */}
          <motion.div
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center relative overflow-hidden"
            style={{
              border: '1px solid rgba(254, 243, 199, 0.15)',
              background: 'rgba(254, 243, 199, 0.02)',
            }}
            animate={isHovered
              ? { borderColor: 'rgba(254, 243, 199, 0.35)', background: 'rgba(254, 243, 199, 0.06)' }
              : { borderColor: 'rgba(254, 243, 199, 0.15)', background: 'rgba(254, 243, 199, 0.02)' }
            }
            transition={{ duration: 0.3 }}
          >
            {/* Inner glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(254, 243, 199, 0.08) 0%, transparent 70%)' }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.span
              className="relative z-10 font-display font-700 text-base sm:text-lg tracking-[0.2em] uppercase"
              style={{ color: '#fef3c7' }}
              animate={isHovered ? { letterSpacing: '0.3em' } : { letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              Enter
            </motion.span>
          </motion.div>
        </motion.button>
      </div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="w-10 h-px" style={{ background: 'rgba(254, 243, 199, 0.08)' }} />
        <span
          className="font-display text-[9px] tracking-[0.35em] uppercase"
          style={{ color: 'rgba(254, 243, 199, 0.15)' }}
        >
          Where every beat has a story
        </span>
        <div className="w-10 h-px" style={{ background: 'rgba(254, 243, 199, 0.08)' }} />
      </motion.div>
    </div>
  )
}
