import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Timeline data with positions along an S-curve
const timelineData = [
  { decade: '1920s', genre: 'Blues', color: '#4169E1', x: 10, y: 70 },
  { decade: '1950s', genre: 'Rock', color: '#E63946', x: 30, y: 30 },
  { decade: '1970s', genre: 'Funk', color: '#9B59B6', x: 50, y: 60 },
  { decade: '1980s', genre: 'Hip-Hop', color: '#E91E63', x: 70, y: 25 },
  { decade: '2010s', genre: 'EDM', color: '#00B4D4', x: 90, y: 55 },
]

const stats = [
  { value: 20, label: 'Genres' },
  { value: 90, label: 'Artists', suffix: '+' },
  { value: 100, label: 'Years', suffix: '+' },
]

export function TimelinePreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Generate the S-curve path through all points
  const generateCurvePath = () => {
    const points = timelineData.map(d => ({ x: d.x, y: d.y }))
    let path = `M ${points[0].x} ${points[0].y}`

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i]
      const next = points[i + 1]
      const midX = (current.x + next.x) / 2

      // Create smooth bezier curves
      path += ` C ${midX} ${current.y}, ${midX} ${next.y}, ${next.x} ${next.y}`
    }

    return path
  }

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section title */}
        <motion.h2
          className="text-center text-amber-200/70 text-sm uppercase tracking-[0.5em] mb-8 font-light"
          style={{
            textShadow: '0 0 30px rgba(251,191,36,0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          A Century of Sound
        </motion.h2>

        {/* Curved Timeline */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] mb-12 md:mb-16">
          {/* SVG for the glowing curve */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Gradient for the laser line */}
              <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4169E1" />
                <stop offset="25%" stopColor="#E63946" />
                <stop offset="50%" stopColor="#9B59B6" />
                <stop offset="75%" stopColor="#E91E63" />
                <stop offset="100%" stopColor="#00B4D4" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background glow layer */}
            <motion.path
              d={generateCurvePath()}
              fill="none"
              stroke="url(#laser-gradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
            />

            {/* Main laser line */}
            <motion.path
              d={generateCurvePath()}
              fill="none"
              stroke="url(#laser-gradient)"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
            />

            {/* Animated light particle traveling along path */}
            {isInView && (
              <motion.circle
                r="1"
                fill="white"
                filter="url(#glow)"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                transition={{
                  duration: 4,
                  delay: 2.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  offsetPath: `path('${generateCurvePath()}')`,
                }}
              />
            )}
          </svg>

          {/* Genre bubbles positioned along the curve */}
          {timelineData.map((item, i) => (
            <motion.div
              key={item.decade}
              className="absolute flex flex-col items-center"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.25,
                type: 'spring',
                stiffness: 200,
              }}
            >
              {/* Genre bubble */}
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center relative cursor-pointer"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${item.color}, ${item.color}88)`,
                  boxShadow: `0 0 20px ${item.color}50, 0 0 40px ${item.color}30, inset 0 2px 4px rgba(255,255,255,0.3)`,
                }}
                whileHover={{ scale: 1.15 }}
                animate={isInView ? {
                  boxShadow: [
                    `0 0 20px ${item.color}50, 0 0 40px ${item.color}30`,
                    `0 0 30px ${item.color}70, 0 0 60px ${item.color}40`,
                    `0 0 20px ${item.color}50, 0 0 40px ${item.color}30`,
                  ],
                } : {}}
                transition={{
                  boxShadow: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  },
                }}
              >
                <span className="text-white text-[10px] sm:text-xs md:text-sm font-bold text-center px-0.5">
                  {item.genre}
                </span>
              </motion.div>

              {/* Decade label */}
              <motion.span
                className="text-amber-200/80 text-[10px] sm:text-xs md:text-sm font-mono mt-1 sm:mt-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + i * 0.2 }}
              >
                {item.decade}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Floating Stats - no boxes */}
        <motion.div
          className="flex justify-center gap-8 sm:gap-12 md:gap-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 2.2 + i * 0.15 }}
            >
              <motion.span
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-amber-100 block"
                style={{
                  textShadow: '0 0 30px rgba(251,191,36,0.3)',
                }}
              >
                {stat.value}{stat.suffix || ''}
              </motion.span>
              <span className="text-amber-200/50 text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
