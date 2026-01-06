import { Component } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-stone-950 flex items-center justify-center p-8">
          <div className="max-w-md text-center">
            <div className="text-6xl mb-6">🎵</div>
            <h1 className="text-2xl font-bold text-amber-100 mb-4">
              Something went wrong
            </h1>
            <p className="text-amber-100/70 mb-6">
              The Sonic Universe encountered an unexpected error.
              Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-amber-500/20 hover:bg-amber-500/30
                       text-amber-100 rounded-lg transition-colors
                       border border-amber-500/30"
            >
              Refresh Page
            </button>
            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-6 p-4 bg-red-900/20 rounded-lg text-left
                            text-red-300 text-sm overflow-auto max-h-48">
                {this.state.error.message}
                {'\n'}
                {this.state.error.stack}
              </pre>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
