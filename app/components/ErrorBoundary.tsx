"use client"

import React, { Component, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Fallback UI to show when an error occurs */
  fallback?: ReactNode
}

type State = {
  hasError: boolean
  error: Error | null
}

/**
 * Reusable error boundary that catches render errors in child components.
 * Prevents the whole page from going blank when a component throws.
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className='flex flex-col items-center justify-center p-8 text-center'>
          <div className='w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4'>
            <svg className='w-7 h-7 text-red-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z' />
            </svg>
          </div>
          <p className='text-gray-600 text-sm'>Something went wrong. Please refresh the page.</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className='mt-3 text-sm text-accent hover:text-dark underline underline-offset-4 transition-colors'
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
