import { useEffect, useState } from 'react'

/**
 * Hook for getting screen width and height
 * @warn Should still use tailwind css responsive design system where it's applicable. **This is only used
 * for corner cases which require specific client-side code interaction**
 * @returns `{ x: window.innerWidth, y: window.innerHeight }`
 */
export const useScreenSize = () => {
  const [dimensions, setDimensions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    if (window && typeof window !== undefined) {
      const onResizeChange = () => {
        setDimensions({ x: window.innerWidth, y: window.innerHeight })
      }
      // We call it once to initially get the screen size
      onResizeChange()
      // And we add a resize listener in case the user ever swaps screens
      window.addEventListener('resizeWatcher', onResizeChange)
      // And we can't forget to unsubscribe from event listener on un-mount
      return window.removeEventListener('resizeWatcher', onResizeChange)
    }
  }, [])
  return dimensions
}

export default useScreenSize
