import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MOBILE_BREAKPOINT = 768
const STORAGE_KEY = 'sonic-universe-mobile-warning-dismissed'

export function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check localStorage for previous dismissal
    try {
      const wasDismissed = localStorage.getItem(STORAGE_KEY) === 'true'
      if (wasDismissed) {
        setIsDismissed(true)
      }
    } catch {
      // Ignore localStorage errors
    }

    // Check initial viewport width
    const checkViewport = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Ignore localStorage errors
    }
  }

  const showWarning = isMobile && !isDismissed

  return (
    <AnimatePresence>
      {showWarning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(12, 10, 9, 0.95)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative max-w-sm w-full text-center rounded-2xl p-8"
            style={{
              backgroundColor: '#1c1917',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              boxShadow: '0 0 60px rgba(251, 191, 36, 0.15), 0 25px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Decorative top accent */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b"
              style={{
                background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
              }}
            />

            {/* Desktop Icon */}
            <div className="text-5xl mb-4">
              🖥️
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-amber-100 mb-3">
              Best Viewed on Desktop
            </h2>

            {/* Message */}
            <p className="text-amber-200/70 text-sm leading-relaxed mb-6">
              <span className="text-amber-400 font-semibold">Sonic Universe</span> is an interactive
              visualization with detailed genre exploration and audio features. For the best
              experience, please visit on a desktop or laptop computer.
            </p>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200"
              style={{
                backgroundColor: '#fbbf24',
                color: '#1c1917',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f59e0b'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fbbf24'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Continue Anyway
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
