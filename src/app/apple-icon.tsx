import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: '22%',
      }}
    >
      <div
        style={{
          color: '#fff',
          fontSize: 100,
          fontWeight: 200,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        :
      </div>
    </div>,
    { ...size }
  )
}
