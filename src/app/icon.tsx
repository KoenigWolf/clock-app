import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: '20%',
      }}
    >
      <div
        style={{
          color: '#fff',
          fontSize: 20,
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
