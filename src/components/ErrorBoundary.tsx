'use client'

import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  fallback?: ReactNode
  logPrefix?: string
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const prefix = this.props.logPrefix ?? 'ErrorBoundary error:'
    console.error(prefix, error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="text-center text-white/60">
            <p>時計の表示中にエラーが発生しました</p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 rounded border border-white/20 px-4 py-2 transition-colors hover:bg-white/10"
            >
              再試行
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}
