import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  const canvasSize = size.width
  const dialSize = canvasSize * 0.7
  const ringWidth = Math.max(8, Math.round(canvasSize * 0.085))
  const handWidth = Math.max(8, Math.round(canvasSize * 0.08))
  const centerDot = Math.max(14, Math.round(canvasSize * 0.12))
  const markerSize = Math.max(8, Math.round(canvasSize * 0.06))

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30%',
        background:
          'radial-gradient(circle at 24% 20%, rgba(255,255,255,0.28), transparent 34%), linear-gradient(150deg, #0A1324 10%, #10356A 58%, #0EA5A2 100%)',
      }}
    >
      <div
        style={{
          width: dialSize,
          height: dialSize,
          borderRadius: '999px',
          border: `${ringWidth}px solid rgba(255, 255, 255, 0.92)`,
          background: 'rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxShadow: '0 8px 18px rgba(0,0,0,0.28)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: ringWidth - 3,
            width: markerSize,
            height: markerSize,
            borderRadius: 999,
            backgroundColor: '#FFFFFF',
            opacity: 0.95,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: handWidth,
            height: dialSize * 0.31,
            backgroundColor: '#FFFFFF',
            borderRadius: 999,
            transform: 'translateY(-14%) rotate(18deg)',
            transformOrigin: 'bottom center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: handWidth,
            height: dialSize * 0.24,
            backgroundColor: '#CCFBF1',
            borderRadius: 999,
            transform: 'translate(18%, 7%) rotate(106deg)',
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
