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
      className="mt-4 text-xl font-light tracking-wider text-foreground-muted"
    >
      {date}
    </p>
  )
})
