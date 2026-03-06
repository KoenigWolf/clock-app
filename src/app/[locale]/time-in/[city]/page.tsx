import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import { CityTimeCard } from '@/components/seo/CityTimeCard'
import { locales, type Locale } from '@/lib'
import { getSiteUrl } from '@/lib/site'
import { cityTimeZones, findCityBySlug } from '@/lib/timezones'

type Props = {
  params: { locale: string; city: string }
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    cityTimeZones.map((city) => ({ locale, city: city.slug }))
  )
}

export async function generateMetadata({
  params: { locale, city },
}: Props): Promise<Metadata> {
  const cityInfo = findCityBySlug(city)
  if (!cityInfo) {
    return {}
  }

  const t = await getTranslations({ locale, namespace: 'seoPages.timeInCity' })
  const cityName = cityInfo.names[locale as Locale] ?? cityInfo.names.en
  const title = t('title', { city: cityName })
  const description = t('description', {
    city: cityName,
    timezone: cityInfo.timeZone,
  })

  return {
    title,
    description,
    alternates: {
      canonical: `${getSiteUrl()}/${locale}/time-in/${city}`,
    },
  }
}

export default async function TimeInCityPage({
  params: { locale, city },
}: Props) {
  const cityInfo = findCityBySlug(city)
  if (!cityInfo) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: 'seoPages.timeInCity' })
  const cityName = cityInfo.names[locale as Locale] ?? cityInfo.names.en
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title', { city: cityName }),
    description: t('description', {
      city: cityName,
      timezone: cityInfo.timeZone,
    }),
    inLanguage: locale,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-10 sm:px-6">
        <nav className="mb-6 text-sm text-foreground-muted">
          <Link
            href={`/${locale}/world-clock`}
            className="hover:text-foreground"
          >
            {t('backToWorldClock')}
          </Link>
        </nav>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {t('heading', { city: cityName })}
        </h1>
        <p className="mt-3 text-foreground-muted">
          {t('description', { city: cityName, timezone: cityInfo.timeZone })}
        </p>
        <section className="mt-8">
          <CityTimeCard
            locale={locale as Locale}
            timeZone={cityInfo.timeZone}
          />
        </section>
      </main>
    </>
  )
}
