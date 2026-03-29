import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface EnterButtonProps {
  onEnter: () => void
}

export function EnterButton({ onEnter }: EnterButtonProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      {/* Contextual message */}
      <motion.p
        className="font-serif-accent italic text-center mb-12"
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: 'rgba(255, 248, 235, 0.3)',
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Every genre began as something unheard
      </motion.p>

      {/* The button */}
      <motion.button
        onClick={onEnter}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 120 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: '1px solid rgba(255, 248, 235, 0.1)',
            transform: 'scale(1.35)',
          }}
          animate={isHovered ? {
            borderColor: 'rgba(255, 248, 235, 0.2)',
            transform: 'scale(1.45)',
          } : {
            borderColor: 'rgba(255, 248, 235, 0.1)',
            transform: 'scale(1.35)',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Main circle */}
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center relative overflow-hidden"
          style={{
            border: '1px solid rgba(255, 248, 235, 0.15)',
            background: 'rgba(255, 248, 235, 0.02)',
          }}
          animate={isHovered ? {
            borderColor: 'rgba(255, 248, 235, 0.35)',
            background: 'rgba(255, 248, 235, 0.06)',
          } : {
            borderColor: 'rgba(255, 248, 235, 0.15)',
            background: 'rgba(255, 248, 235, 0.02)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle inner glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 248, 235, 0.08) 0%, transparent 70%)',
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Text */}
          <div className="relative z-10 text-center">
            <motion.span
              className="font-display font-700 text-lg sm:text-xl tracking-[0.2em] uppercase block"
              style={{ color: '#fff8eb' }}
              animate={isHovered ? { letterSpacing: '0.3em' } : { letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              Enter
            </motion.span>
          </div>
        </motion.div>
      </motion.button>

      {/* Footer line */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div
          className="w-10 h-px"
          style={{ background: 'rgba(255, 248, 235, 0.08)' }}
        />
        <span
          className="font-display text-[9px] tracking-[0.35em] uppercase"
          style={{ color: 'rgba(255, 248, 235, 0.15)' }}
        >
          Sonic Universe
        </span>
        <div
          className="w-10 h-px"
          style={{ background: 'rgba(255, 248, 235, 0.08)' }}
        />
      </motion.div>
    </section>
  )
}
