import { motion } from 'framer-motion'

interface AboutModalProps {
  onClose: () => void
}

export function AboutModal({ onClose }: AboutModalProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed top-4 bottom-4 left-8 right-8 md:top-6 md:bottom-6 md:left-24 md:right-24 lg:left-48 lg:right-48 xl:left-64 xl:right-64 z-50 overflow-hidden rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #1a1510 0%, #0d0a07 100%)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-amber-200/70 hover:text-amber-200 transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 pt-12 overflow-y-auto h-full">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-amber-100 mb-2">
                Sonic Universe
              </h1>
              <p className="text-amber-200/60 text-sm">
                An Interactive Music Genre Explorer
              </p>
            </div>

            {/* Vision Section */}
            <section>
              <h2 className="text-xs font-bold tracking-widest text-amber-200/40 uppercase mb-3">
                The Vision
              </h2>
              <div
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(251, 191, 36, 0.1)',
                }}
              >
                <p className="text-amber-100/80 leading-relaxed">
                  Sonic Universe is an interactive visualization that explores how music genres
                  evolved and influenced each other across decades. From the Delta Blues of the 1920s
                  to modern Electronic music, discover the connections that shaped the soundtrack of our lives.
                </p>
                <p className="text-amber-100/80 leading-relaxed mt-3">
                  Click on any genre bubble to dive deep into its story, listen to definitive tracks,
                  explore influential artists, and trace the musical lineage that connects everything together.
                </p>
              </div>
            </section>

            {/* Builder Section */}
            <section>
              <h2 className="text-xs font-bold tracking-widest text-amber-200/40 uppercase mb-3">
                Built By
              </h2>
              <div
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(251, 191, 36, 0.1)',
                }}
              >
                <p className="text-amber-100/80">
                  <span className="text-amber-100 font-semibold">Wei Gong</span>
                  <span className="text-amber-200/60"> — </span>
                  Product designer and music enthusiast exploring the intersection of
                  data visualization and cultural history.
                </p>
              </div>
            </section>

            {/* Feedback Section */}
            <section>
              <h2 className="text-xs font-bold tracking-widest text-amber-200/40 uppercase mb-3">
                Feedback
              </h2>
              <div
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(251, 191, 36, 0.1)',
                }}
              >
                <p className="text-amber-100/80 mb-4 text-center">
                  Have ideas for improvements, found a bug, or want to suggest a genre?
                  I'd love to hear from you.
                </p>
                <div className="flex justify-center">
                  <a
                    href="mailto:weigong0202@gmail.com?subject=Sonic Universe Feedback"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-100 transition-colors border border-amber-500/30"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Send Feedback
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-amber-200/10">
              <p className="text-amber-200/40 text-xs">
                Made with music and code
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
