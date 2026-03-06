import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { WorldClockList } from '@/components/seo/WorldClockList'
import { type Locale } from '@/lib'
import { getSiteUrl } from '@/lib/site'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'seoPages.worldClock' })
  const siteUrl = getSiteUrl()

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteUrl}/${locale}/world-clock`,
    },
  }
}

export default async function WorldClockPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'seoPages.worldClock' })

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-foreground-muted">
        <Link href={`/${locale}`} className="hover:text-foreground">
          {t('backToHome')}
        </Link>
      </nav>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        {t('heading')}
      </h1>
      <p className="mt-3 max-w-3xl text-foreground-muted">{t('description')}</p>
      <section className="mt-8">
        <WorldClockList locale={locale as Locale} />
      </section>
    </main>
  )
}
