'use client'

import { useEffect } from 'react'
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'
import type { Metric } from 'web-vitals'

function reportWebVitals(metric: Metric) {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric)
  }
}

export function WebVitals() {
  useEffect(() => {
    onCLS(reportWebVitals)
    onFCP(reportWebVitals)
    onINP(reportWebVitals)
    onLCP(reportWebVitals)
    onTTFB(reportWebVitals)
  }, [])

  return null
}
