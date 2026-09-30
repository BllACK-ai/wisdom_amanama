import { useEffect } from 'react'

export function useSpotlight() {
  useEffect(() => {
    const root = document.documentElement
    const move = (e: PointerEvent) => {
      root.style.setProperty('--x', `${e.clientX}px`)
      root.style.setProperty('--y', `${e.clientY}px`)
    }
    addEventListener('pointermove', move)
    return () => removeEventListener('pointermove', move)
  }, [])
}
