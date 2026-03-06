'use client'

import { useTranslations } from 'next-intl'
import { memo } from 'react'

type Props = {
  date: string
}

export const DateDisplay = memo(function DateDisplay({ date }: Props) {
  const t = useTranslations('date')

  return (
    <p
      role="status"
      aria-label={`${t('todaysDate')} ${date}`}
      className="mt-[0.618em] text-[clamp(0.875rem,2.36vw,1.5rem)] font-light tracking-[0.032em] text-foreground-muted"
    >
      {date}
    </p>
  )
})
