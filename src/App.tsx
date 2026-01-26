import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SonicMap } from './components/SonicMap'
import { IntroPage } from './components/IntroPage'
import { ErrorBoundary } from './components/ErrorBoundary'
import { MobileWarning } from './components/MobileWarning'
import { logValidationResults } from './utils/validateData'

// Run data validation in development
if (import.meta.env.DEV) {
  logValidationResults()
}

const VISITED_KEY = 'sonic-universe-visited'

function App() {
  // Check if user has visited before - skip intro for returning users
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !localStorage.getItem(VISITED_KEY)
    } catch {
      return true // Default to showing intro if localStorage unavailable
    }
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleEnter = () => {
    // Mark user as having visited
    try {
      localStorage.setItem(VISITED_KEY, 'true')
    } catch {
      // Ignore localStorage errors
    }

    setIsTransitioning(true)
    // Faster transition - 600ms total
    setTimeout(() => {
      setShowIntro(false)
      setIsTransitioning(false)
    }, 600)
  }

  return (
    <ErrorBoundary>
      <MobileWarning />
      <div className="w-screen h-screen bg-stone-950">
        <AnimatePresence mode="wait">
          {showIntro ? (
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full"
            >
              <IntroPage onEnter={handleEnter} isTransitioning={isTransitioning} />
            </motion.div>
          ) : (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <SonicMap onReplayIntro={() => setShowIntro(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  )
}

export default App
