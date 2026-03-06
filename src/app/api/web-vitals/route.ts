import { NextResponse } from 'next/server'

type Payload = {
  id: string
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  navigationType: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload
    const allowedMetrics = new Set(['CLS', 'FCP', 'INP', 'LCP', 'TTFB'])

    if (!allowedMetrics.has(body.name)) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    console.info('[WebVitals]', {
      ...body,
      at: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
