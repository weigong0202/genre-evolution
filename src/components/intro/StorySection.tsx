import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Actual genre colors from the app
const genreOrbs = [
  { color: '#4169E1', size: 32, x: -20, y: -15 },  // Blues
  { color: '#E63946', size: 28, x: 25, y: -25 },   // Rock
  { color: '#D4AF37', size: 24, x: 0, y: 20 },     // Jazz
  { color: '#9B59B6', size: 20, x: -35, y: 10 },   // Funk
  { color: '#00ACC1', size: 22, x: 40, y: 5 },     // Electronic
]

export function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden"
    >
      {/* Background constellation lines connecting the three points */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M 20% 35% Q 35% 50% 50% 55% Q 65% 60% 80% 40%"
          fill="none"
          stroke="url(#constellation-gradient)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <defs>
          <linearGradient id="constellation-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4169E1" />
            <stop offset="50%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#1DB954" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto w-full relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-100 mb-4 tracking-[0.04em] sm:tracking-[0.08em]"
            style={{
              textShadow: '0 0 40px rgba(251,191,36,0.3)',
            }}
          >
            Navigate the Genealogy of Sound
          </h2>
          <p className="text-amber-200/50 text-base sm:text-lg max-w-xl mx-auto tracking-wide px-4">
            An interactive map of musical evolution
          </p>
        </motion.div>

        {/* Three floating feature islands */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 md:gap-8 lg:gap-16 px-4 md:px-0">

          {/* Feature 1: Map the Connections - Genre Orbs */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Floating genre orbs cluster */}
            <div className="relative w-32 h-32 mb-8">
              {/* Subtle glow behind */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(65,105,225,0.15) 0%, transparent 70%)',
                  transform: 'scale(1.5)',
                }}
              />
              {genreOrbs.map((orb, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: orb.size,
                    height: orb.size,
                    left: `calc(50% + ${orb.x}px)`,
                    top: `calc(50% + ${orb.y}px)`,
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(circle at 30% 30%, ${orb.color}, ${orb.color}88)`,
                    boxShadow: `0 0 20px ${orb.color}60, inset 0 1px 2px rgba(255,255,255,0.3)`,
                  }}
                  animate={{
                    y: [0, -3, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                />
              ))}
              {/* Connection lines between orbs */}
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                <motion.line
                  x1="30%" y1="35%" x2="70%" y2="25%"
                  stroke="rgba(251,191,36,0.2)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                />
                <motion.line
                  x1="50%" y1="70%" x2="30%" y2="35%"
                  stroke="rgba(251,191,36,0.2)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-amber-100 mb-3">
              Map the Connections
            </h3>
            <p className="text-amber-200/60 text-sm md:text-base leading-relaxed max-w-xs">
              Trace the lineage from 1920s Delta Blues to modern EDM across 20 genres
            </p>
          </motion.div>

          {/* Feature 2: Meet the Legends - Artist Portrait */}
          <motion.div
            className="flex flex-col items-center text-center md:mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Stylized artist silhouette */}
            <div className="relative w-32 h-32 mb-8">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(232,121,249,0.15) 0%, transparent 70%)',
                  transform: 'scale(1.5)',
                }}
              />
              {/* Circular frame with artist silhouette */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(232,121,249,0.3) 0%, rgba(147,51,234,0.2) 100%)',
                  border: '2px solid rgba(232,121,249,0.3)',
                  boxShadow: '0 0 30px rgba(232,121,249,0.2)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(232,121,249,0.2)',
                    '0 0 40px rgba(232,121,249,0.3)',
                    '0 0 30px rgba(232,121,249,0.2)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Abstract artist representation */}
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                  <circle cx="50" cy="35" r="18" fill="rgba(255,255,255,0.4)" />
                  <ellipse cx="50" cy="75" rx="25" ry="20" fill="rgba(255,255,255,0.3)" />
                </svg>
              </motion.div>
              {/* Floating music notes */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute text-purple-300/40 text-lg"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                >
                  ♪
                </motion.div>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-amber-100 mb-3">
              Meet the Legends
            </h3>
            <p className="text-amber-200/60 text-sm md:text-base leading-relaxed max-w-xs">
              90+ artist profiles with bios, essential albums, and influence connections
            </p>
          </motion.div>

          {/* Feature 3: Hear the Evolution - Audio Waveform */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Animated waveform */}
            <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(29,185,84,0.15) 0%, transparent 70%)',
                  transform: 'scale(1.5)',
                }}
              />
              {/* Waveform bars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 rounded-full"
                    style={{
                      background: 'linear-gradient(to top, #1DB954, #1ed760)',
                      boxShadow: '0 0 10px rgba(29,185,84,0.5)',
                    }}
                    animate={{
                      height: [
                        12 + Math.sin(i * 0.8) * 8,
                        24 + Math.sin(i * 0.8 + 1) * 16,
                        12 + Math.sin(i * 0.8) * 8,
                      ],
                    }}
                    transition={{
                      duration: 0.8 + i * 0.1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-amber-100 mb-3">
              Hear the Evolution
            </h3>
            <p className="text-amber-200/60 text-sm md:text-base leading-relaxed max-w-xs">
              Embedded Spotify players let you listen to the sounds that defined each era
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
