import type { MetadataRoute } from 'next'

import { locales } from '@/lib'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: 'daily',
    priority: locale === 'ja' ? 1 : 0.9,
  }))
}
