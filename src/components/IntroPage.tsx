import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeroSection } from './intro/HeroSection'
import { StorySection } from './intro/StorySection'
import { EnterButton } from './intro/EnterButton'

// Generate static star positions with z-depth for warp effect
function generateStars(count: number) {
  const stars: Array<{
    x: number
    y: number
    z: number // depth for parallax
    size: number
    opacity: number
    layer: number
    animationDelay: number
    animationDuration: number
  }> = []
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random(), // 0 = far, 1 = close
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.6 + 0.3,
      layer: Math.floor(Math.random() * 3),
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 2 + 2,
    })
  }
  return stars
}

interface IntroPageProps {
  onEnter: () => void
  isTransitioning: boolean
}

export function IntroPage({ onEnter, isTransitioning }: IntroPageProps) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [scrollY, setScrollY] = useState(0)
  const [maxScroll, setMaxScroll] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  // Memoize stars to prevent regeneration
  const staticStars = useMemo(() => generateStars(180), [])

  // Track mouse for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Track scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setScrollY(container.scrollTop)
      setMaxScroll(container.scrollHeight - container.clientHeight)
    }
    container.addEventListener('scroll', handleScroll)
    // Initialize max scroll
    setMaxScroll(container.scrollHeight - container.clientHeight)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate scroll progress (0 to 1)
  const scrollProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0

  // Determine warp speed multiplier based on scroll phase (3 sections)
  // Phase 1 (0-33%): Hero - slow drift
  // Phase 2 (33-66%): Story - accelerating
  // Phase 3 (66-100%): Enter - decelerate to complete stop
  const getWarpIntensity = () => {
    if (scrollProgress < 0.33) {
      // Phase 1: Gentle start
      return scrollProgress * 3 * 0.5 // 0 to 0.5
    }
    if (scrollProgress < 0.66) {
      // Phase 2: Accelerating
      const phase2Progress = (scrollProgress - 0.33) / 0.33
      return 0.5 + phase2Progress * 1.5 // 0.5 to 2.0
    }
    // Phase 3: Decelerate to stop - stars settle back
    const phase3Progress = (scrollProgress - 0.66) / 0.34
    // Ease out to zero
    const easeOut = 1 - Math.pow(phase3Progress, 2)
    return 2.0 * easeOut
  }

  // Check if we're in the "hovering" phase (Phase 3, near the end)
  const isHoveringPhase = scrollProgress > 0.8

  // Calculate star position with warp effect
  const getStarWarpPosition = (star: typeof staticStars[0]) => {
    const warpIntensity = getWarpIntensity()

    // Stars move outward from center (toward camera)
    const centerX = 50
    const centerY = 50
    const dx = star.x - centerX
    const dy = star.y - centerY

    // Closer stars (higher z) move faster
    const zFactor = 0.5 + star.z * 1.5
    const warpX = star.x + dx * warpIntensity * zFactor * 0.3
    const warpY = star.y + dy * warpIntensity * zFactor * 0.3

    // Stars grow as they "approach", but return to normal in Phase 4
    const sizeMultiplier = 1 + warpIntensity * star.z * 0.4

    // In hovering phase, stars gently pulse brighter (anticipation)
    const hoverPulse = isHoveringPhase ? 1.2 : 1
    const opacityBoost = Math.min(1, star.opacity * (1 + warpIntensity * 0.3) * hoverPulse)

    return { x: warpX, y: warpY, size: star.size * sizeMultiplier, opacity: opacityBoost }
  }

  // Calculate parallax offset for each layer
  const getParallaxOffset = (layer: number) => {
    const intensity = (layer + 1) * 8
    return {
      x: (mousePos.x - 0.5) * intensity,
      y: (mousePos.y - 0.5) * intensity,
    }
  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-y-auto overflow-x-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #1c1917 0%, #0c0a09 40%, #000 100%)',
      }}
    >
      {/* Star field - fixed background with warp effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[0, 1, 2].map((layer) => {
          const offset = getParallaxOffset(layer)
          return (
            <div
              key={layer}
              className="absolute inset-0"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {staticStars
                .filter((star) => star.layer === layer)
                .map((star, i) => {
                  const warp = getStarWarpPosition(star)
                  return (
                    <div
                      key={i}
                      className="absolute rounded-full star-twinkle"
                      style={{
                        left: `${warp.x}%`,
                        top: `${warp.y}%`,
                        width: warp.size,
                        height: warp.size,
                        background: `radial-gradient(circle, rgba(254,243,199,${warp.opacity}) 0%, rgba(254,243,199,0) 70%)`,
                        boxShadow: `0 0 ${warp.size * 2}px rgba(254,243,199,${warp.opacity * 0.5})`,
                        animationDelay: `${star.animationDelay}s`,
                        animationDuration: `${star.animationDuration}s`,
                        transition: 'left 0.05s linear, top 0.05s linear, width 0.1s, height 0.1s',
                      }}
                    />
                  )
                })}
            </div>
          )
        })}

        {/* Nebula glows - intensity increases with scroll */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            top: '10%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.5 + scrollProgress * 0.3,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            bottom: '20%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(147,51,234,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            opacity: 0.4 + scrollProgress * 0.4,
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            bottom: '10%',
            right: '20%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
            filter: 'blur(70px)',
            opacity: 0.3 + scrollProgress * 0.4,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />

      </div>

      {/* Deep blue/purple vignette at bottom */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top,
            rgba(30, 20, 60, ${0.4 + scrollProgress * 0.3}) 0%,
            rgba(20, 10, 40, ${0.2 + scrollProgress * 0.2}) 30%,
            transparent 60%
          )`,
        }}
      />

      {/* Side vignettes for depth */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(ellipse at center, transparent 40%, rgba(10, 5, 30, 0.5) 100%)`,
        }}
      />

      {/* Film grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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
            transition={{ duration: 0.1 }}
          >
            {/* Warp speed stars - faster animation */}
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-amber-100"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: 2,
                  height: 2,
                  borderRadius: '50%',
                }}
                animate={{
                  scale: [1, 50],
                  x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 1500],
                  y: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 1500],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeIn',
                  delay: i * 0.005,
                }}
              />
            ))}
            {/* Quick fade to dark (matches SonicMap bg) instead of white */}
            <motion.div
              className="absolute inset-0 bg-stone-950"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip button - glassmorphism style */}
      <motion.button
        onClick={onEnter}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 text-amber-200/50 text-xs tracking-widest uppercase transition-all hover:text-amber-200/80"
        style={{
          background: 'rgba(10, 10, 15, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '6px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{
          scale: 1.02,
          background: 'rgba(10, 10, 15, 0.6)',
          borderColor: 'rgba(255, 255, 255, 0.15)',
        }}
      >
        Skip intro
      </motion.button>

      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <StorySection />
        <EnterButton onEnter={onEnter} />
      </div>
    </div>
  )
}
