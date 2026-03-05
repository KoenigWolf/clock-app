import { Clock } from '@/components/Clock'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ErrorBoundary>
        <Clock />
      </ErrorBoundary>
    </main>
  )
}
