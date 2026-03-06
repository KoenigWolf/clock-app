import { Clock } from '@/components/Clock'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { WebVitals } from '@/components/WebVitals'

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <WebVitals />
      <div className="absolute right-4 top-4">
        <LanguageSwitcher />
      </div>
      <ErrorBoundary>
        <Clock />
      </ErrorBoundary>
    </main>
  )
}
