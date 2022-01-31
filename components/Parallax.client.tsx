import Image from 'next/image'
import { motion, MotionValue, useTransform, useViewportScroll } from 'framer-motion'
/* ------------------------------ Image imports ----------------------------- */
import background from '../public/parallax/background.png'
import stars from '../public/parallax/stars.png'
import moon from '../public/parallax/moon.png'
import clouds from '../public/parallax/clouds.png'
import surfaceLevel0 from '../public/parallax/surfaceLevel0.png'
import surfaceLevel1 from '../public/parallax/surfaceLevel1.png'
import surfaceLevel2 from '../public/parallax/surfaceLevel2.png'
import surfaceLevel3 from '../public/parallax/surfaceLevel3.png'
import surfaceLevel4 from '../public/parallax/surfaceLevel4.png'
import { useEffect, useState } from 'react'

type Props = {
  speed: number,
  src: StaticImageData,
  alt: string,
  scrollY: MotionValue<number>,
  customStyle?: Object,
  bg?: boolean
}

const AnimatedLayer = (props: Props) => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    // We need to check for window, because it is not available on initial SSR
    if (window && typeof window !== undefined) {
      const onResizeChange = () => {
        setWidth(window.innerWidth)
      }
      // We call it once to initially get the screen size
      onResizeChange()
      // And we add a resize listener in case the user ever swaps screens
      window.addEventListener('resize', onResizeChange)
      // And we can't forget to unsubscribe from event listener on unmount
      return window.removeEventListener('resizeWatcher', onResizeChange)
    }
  }, [])

  const {
    speed,
    src,
    alt,
    scrollY,
    bg = false,
    customStyle = {},
  } = props
  

  const inputRange = [0, 400, 500, 700]
  const outputRange = bg ? inputRange : [0, 400, 550, 600]
  const applySpeed = (array: number[]) => array.map(x => x * speed)

  const y = useTransform(
    scrollY,
    inputRange,
    applySpeed(outputRange),
  )

  const style = { ...customStyle, y }
  
  if (width >= 2560) {
    return (
      <figure className="w-full absolute z-1">
        <Image layout="responsive" src={src} alt={alt} />
      </figure>
    )
  }

  console.log('width', width)

  return (
    <motion.figure style={style} className="w-full absolute z-1">
      <Image layout="responsive" src={src} alt={alt} />
      <div className="w-full relative bg-main h-[350px] z-10" />
    </motion.figure>
  )
}

const Parallax = () => {
  const { scrollY } = useViewportScroll()
  return (
    <header id="parallax" className="overflow-y-hidden relative block w-full z-10 h-[400px] md:h-[750px] lg:h-[900px] xl:h-[1280px] uhd:h-[1900px] qhd:h-[1900px]">
      <AnimatedLayer scrollY={scrollY} src={background} bg alt="background" speed={1} />
      <AnimatedLayer scrollY={scrollY} src={stars} alt="stars" speed={0.8} />
      <AnimatedLayer scrollY={scrollY} src={moon} alt="moon" speed={1.5} />
      <AnimatedLayer scrollY={scrollY} src={clouds} alt="clouds" speed={0.9} />
      <AnimatedLayer scrollY={scrollY} src={surfaceLevel4} alt="surfaceLevel4" speed={1} />
      <AnimatedLayer scrollY={scrollY} src={surfaceLevel3} alt="surfaceLevel3" speed={0.9} />
      <AnimatedLayer scrollY={scrollY} src={surfaceLevel2} alt="surfaceLevel2" speed={0.6} />
      <AnimatedLayer scrollY={scrollY} src={surfaceLevel1} alt="surfaceLevel1" speed={0.3} />
      <AnimatedLayer scrollY={scrollY} src={surfaceLevel0} alt="surfaceLevel0" speed={0.2} />
    </header>
  )
}

export default Parallax