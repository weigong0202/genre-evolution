import { useRef, useState, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

interface EnterButtonProps {
  onEnter: () => void
}

// Generate orbital particles
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: (i / count) * 360,
    distance: 120 + Math.random() * 80,
    size: Math.random() * 3 + 1,
    speed: 0.5 + Math.random() * 0.5,
    delay: Math.random() * 2,
  }))
}

export function EnterButton({ onEnter }: EnterButtonProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isHovered, setIsHovered] = useState(false)

  const particles = useMemo(() => generateParticles(40), [])

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 relative"
    >
      {/* Portal Container */}
      <motion.div
        className="relative cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, type: 'spring' }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onEnter}
      >
        {/* Outer particle field */}
        <svg
          className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]"
          viewBox="-200 -200 400 400"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'visible',
          }}
        >
          <defs>
            <filter id="particle-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {particles.map((particle) => {
            const baseX = Math.cos((particle.angle * Math.PI) / 180) * particle.distance
            const baseY = Math.sin((particle.angle * Math.PI) / 180) * particle.distance

            return (
              <motion.circle
                key={particle.id}
                r={particle.size}
                fill="rgba(251, 191, 36, 0.8)"
                filter="url(#particle-glow)"
                initial={{
                  cx: baseX,
                  cy: baseY,
                  opacity: 0.6,
                }}
                animate={isHovered ? {
                  cx: 0,
                  cy: 0,
                  opacity: [0.8, 1, 0],
                  scale: [1, 0.5, 0],
                } : {
                  cx: baseX,
                  cy: baseY,
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={isHovered ? {
                  duration: 0.6 + particle.speed * 0.3,
                  delay: particle.delay * 0.1,
                  ease: 'easeIn',
                  repeat: Infinity,
                } : {
                  duration: 2 + particle.speed,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </svg>

        {/* Central portal / wormhole */}
        <motion.div
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(12,10,9,0.95) 50%, transparent 100%)',
          }}
          animate={isHovered ? {
            boxShadow: [
              '0 0 60px rgba(251,191,36,0.4), inset 0 0 60px rgba(251,191,36,0.2)',
              '0 0 80px rgba(251,191,36,0.6), inset 0 0 80px rgba(251,191,36,0.3)',
              '0 0 60px rgba(251,191,36,0.4), inset 0 0 60px rgba(251,191,36,0.2)',
            ],
          } : {
            boxShadow: [
              '0 0 40px rgba(251,191,36,0.2), inset 0 0 40px rgba(251,191,36,0.1)',
              '0 0 50px rgba(251,191,36,0.3), inset 0 0 50px rgba(251,191,36,0.15)',
              '0 0 40px rgba(251,191,36,0.2), inset 0 0 40px rgba(251,191,36,0.1)',
            ],
          }}
          transition={{
            duration: isHovered ? 0.5 : 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Inner swirl effect */}
          <motion.div
            className="absolute inset-4 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(251,191,36,0.1), transparent, rgba(147,51,234,0.1), transparent)',
            }}
            animate={{
              rotate: isHovered ? 720 : 360,
            }}
            transition={{
              duration: isHovered ? 2 : 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Center glow */}
          <motion.div
            className="absolute w-8 h-8 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(251,191,36,0.8) 0%, transparent 70%)',
            }}
            animate={isHovered ? {
              scale: [1, 2, 1],
              opacity: [0.8, 1, 0.8],
            } : {
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: isHovered ? 0.5 : 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Portal text */}
          <motion.div
            className="relative z-10 text-center"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-amber-100 text-base sm:text-lg font-bold tracking-widest uppercase block"
              style={{
                textShadow: '0 0 20px rgba(251,191,36,0.5)',
              }}
            >
              Enter
            </motion.span>
            <motion.span
              className="text-amber-200/60 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              the universe
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative bottom elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/30" />
        <span className="text-amber-200/30 text-xs font-mono">SONIC UNIVERSE</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/30" />
      </motion.div>
    </section>
  )
}
