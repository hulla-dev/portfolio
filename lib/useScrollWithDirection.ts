import { ScrollMotionValues, useViewportScroll } from "framer-motion"
import { useEffect, useState } from "react"

type ScrollDirection = 'up' | 'down'
type ScrollState = {
  scrollDirection: ScrollDirection,
  scrollY: number, // used to internally track values
}

type AnimatedScrollState = {
  scrollDirection: ScrollDirection,
} & ScrollMotionValues

/**
 * Detects the current scroll position and scroll direction
 * @param defaultValue Default scroll direction (SSR), defaults to `'down'`
 * useful for defining default behavior in animations
 * @warn It's still advisable to use default `useViewPortScroll` from motion when possible
 * as it is less expensive than this hook. 
 * 
 * **This should only be used when you need to update scrollDirection**
 */
export const useScrollWithDirection = (defaultValue: ScrollDirection = 'down'): AnimatedScrollState => {
  const motionScroll = useViewportScroll()
  const [scrollControl, setScrollControl] = useState<ScrollState>({
    scrollY: motionScroll.scrollYProgress.get(),
    scrollDirection: defaultValue,
  })

  useEffect(() => {
    // Updater function for scrollDirection
    const updateScrollDirection = () => {
      // Note - no eventListener is necessary as motion ships it's own subscription
      const newScrollY = motionScroll.scrollYProgress.get()
      setScrollControl(
        ({ scrollY: prevScrollY }) => newScrollY > prevScrollY
          ? { scrollY: newScrollY, scrollDirection: 'down', }
          : { scrollY: newScrollY, scrollDirection: 'up', }
      )
    }
    return motionScroll.scrollYProgress.onChange(updateScrollDirection)
  }, [motionScroll.scrollYProgress])

  return {
    ...motionScroll,
    scrollDirection: scrollControl.scrollDirection
  }
}

export default useScrollWithDirection
