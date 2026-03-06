import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { Clock, ErrorBoundary, LanguageSwitcher } from '@/components'
import { getSiteUrl } from '@/lib/site'
import { WebVitals } from '@/lib/web-vitals'

type Props = {
  params: { locale: string }
}

export default async function Home({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'metadata' })
  const navT = await getTranslations({ locale, namespace: 'seoPages.home' })
  const siteUrl = getSiteUrl()
  const pageUrl = `${siteUrl}/${locale}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t('appName'),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    url: pageUrl,
    inLanguage: locale,
    description: t('description'),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative flex min-h-screen items-center justify-center bg-background">
        <WebVitals />
        <h1 className="sr-only">{t('title')}</h1>
        <p className="sr-only">{t('description')}</p>
        <div className="absolute right-[2.36%] top-[2.36%]">
          <LanguageSwitcher />
        </div>
        <ErrorBoundary>
          <Clock />
        </ErrorBoundary>
        <section className="absolute bottom-[6%] left-1/2 w-full max-w-[32rem] -translate-x-1/2 px-4">
          <h2 className="sr-only">{navT('heading')}</h2>
          <ul className="grid gap-2 sm:grid-cols-3">
            <li>
              <Link
                href={`/${locale}/world-clock`}
                className="block rounded-lg border border-border bg-background-overlay px-3 py-2 text-center text-xs text-foreground-muted transition-colors hover:text-foreground"
              >
                {navT('worldClock')}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/utc-converter`}
                className="block rounded-lg border border-border bg-background-overlay px-3 py-2 text-center text-xs text-foreground-muted transition-colors hover:text-foreground"
              >
                {navT('utcConverter')}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/time-in/tokyo`}
                className="block rounded-lg border border-border bg-background-overlay px-3 py-2 text-center text-xs text-foreground-muted transition-colors hover:text-foreground"
              >
                {navT('timeInCity')}
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
