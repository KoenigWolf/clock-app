import { Clock } from '@/components/Clock'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { WebVitals } from '@/components/WebVitals'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <WebVitals />
      <ErrorBoundary>
        <Clock />
      </ErrorBoundary>
    </main>
  )
}
