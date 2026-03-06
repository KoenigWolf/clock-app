import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
export const alt = 'Clock - Minimal clock with golden ratio aesthetics'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        gap: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          color: '#fff',
          fontSize: 180,
          fontWeight: 200,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        <span>10</span>
        <span style={{ opacity: 0.8, margin: '0 8px' }}>:</span>
        <span>30</span>
        <span
          style={{
            fontSize: 70,
            opacity: 0.5,
            marginLeft: 16,
            alignSelf: 'flex-start',
          }}
        >
          45
        </span>
      </div>
      <div
        style={{
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: 36,
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}
      >
        Minimal Clock
      </div>
    </div>,
    { ...size }
  )
}
