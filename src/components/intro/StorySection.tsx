import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    number: '01',
    title: 'Trace the Lineage',
    description:
      'From 1920s Delta Blues to modern electronic music — 20 genres mapped across a century of sonic evolution.',
    accentColor: '#4169E1',
  },
  {
    number: '02',
    title: 'Meet the Artists',
    description:
      '90+ profiles with biographies, essential albums, and the influence chains that connect legends across eras.',
    accentColor: '#9C27B0',
  },
  {
    number: '03',
    title: 'Hear the Sound',
    description:
      'Embedded players let you listen to the defining tracks and albums that shaped each genre\'s identity.',
    accentColor: '#00ACC1',
  },
]

export function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-32 relative"
    >
      {/* Section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="font-display font-700 tracking-[-0.02em]"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            color: '#fff8eb',
          }}
        >
          Navigate a Century of Sound
        </h2>
        <p
          className="font-serif-accent italic mt-3"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: 'rgba(255, 248, 235, 0.35)',
          }}
        >
          An interactive map of musical evolution
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="max-w-4xl w-full mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={feature.number}
            className="relative"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
          >
            {/* Top rule */}
            <div
              className="w-full h-px"
              style={{ background: 'rgba(255, 248, 235, 0.06)' }}
            />

            <div className="flex items-start gap-6 sm:gap-10 py-10 sm:py-14">
              {/* Number */}
              <span
                className="font-display font-800 shrink-0 mt-1"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: feature.accentColor,
                  opacity: 0.25,
                  lineHeight: 1,
                }}
              >
                {feature.number}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="font-display font-600 tracking-[-0.01em] mb-3"
                  style={{
                    fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                    color: '#fff8eb',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="leading-relaxed max-w-lg"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
                    color: 'rgba(255, 248, 235, 0.4)',
                    lineHeight: 1.7,
                  }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Accent dot */}
              <motion.div
                className="shrink-0 mt-2 hidden sm:block"
                animate={isInView ? {
                  boxShadow: [
                    `0 0 12px ${feature.accentColor}30`,
                    `0 0 20px ${feature.accentColor}50`,
                    `0 0 12px ${feature.accentColor}30`,
                  ],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: feature.accentColor,
                    opacity: 0.6,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Bottom rule */}
        <div
          className="w-full h-px"
          style={{ background: 'rgba(255, 248, 235, 0.06)' }}
        />
      </div>

      {/* Stats row */}
      <motion.div
        className="flex justify-center gap-12 sm:gap-20 mt-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {[
          { value: '20', label: 'Genres' },
          { value: '90+', label: 'Artists' },
          { value: '100+', label: 'Years' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
          >
            <span
              className="font-display font-700 block"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: '#fff8eb',
              }}
            >
              {stat.value}
            </span>
            <span
              className="font-display text-[10px] tracking-[0.25em] uppercase"
              style={{ color: 'rgba(255, 248, 235, 0.3)' }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
