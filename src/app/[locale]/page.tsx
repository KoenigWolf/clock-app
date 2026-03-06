import { Clock, ErrorBoundary, LanguageSwitcher } from '@/components'
import { WebVitals } from '@/lib/web-vitals'

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background">
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
