import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  const canvasSize = size.width
  const dialSize = canvasSize * 0.64
  const handWidth = Math.max(8, Math.round(canvasSize * 0.08))
  const centerDot = Math.max(14, Math.round(canvasSize * 0.14))

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '26%',
        background:
          'linear-gradient(150deg, #06122A 10%, #0E315E 55%, #13A3A3 100%)',
      }}
    >
      <div
        style={{
          width: dialSize,
          height: dialSize,
          borderRadius: '999px',
          border: '8px solid rgba(255, 255, 255, 0.72)',
          background: 'rgba(3, 10, 22, 0.52)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: handWidth,
            height: dialSize * 0.29,
            backgroundColor: '#FFFFFF',
            borderRadius: 999,
            transform: 'translateY(-12%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: handWidth,
            height: dialSize * 0.24,
            backgroundColor: '#A7F3F0',
            borderRadius: 999,
            transform: 'translate(18%, 8%) rotate(56deg)',
            transformOrigin: 'bottom center',
          }}
        />
        <div
          style={{
            width: centerDot,
            height: centerDot,
            borderRadius: '999px',
            backgroundColor: '#FFFFFF',
          }}
        />
      </div>
    </div>,
    { ...size }
  )
}
