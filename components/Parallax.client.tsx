import {
  useViewportScroll,
} from 'framer-motion'
import AnimatedLayer from './AnimatedLayer.client'
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
/* ------------------------------ Internal API ------------------------------ */
import { useScreenSize } from '../lib/useScreenSize'


/* ---- Complete Parallax section consisting of multiple animated layers ---- */
const Parallax = () => {
  const { scrollY } = useViewportScroll()
  const { x: screenWidth } = useScreenSize()

  return (
    <section
      id="parallax"
      className="relative z-10 block h-[400px] w-full overflow-y-hidden md:h-[750px] lg:h-[900px] xl:h-[1280px] qhd:h-[1900px] uhd:h-[1900px]">
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={background}
        bg
        alt="background"
        speed={1}
      />
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={stars}
        alt="stars"
        speed={0.8}
      />
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={moon}
        alt="moon"
        speed={1.5}
      />
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={clouds}
        alt="clouds"
        speed={0.9}
      />
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={surfaceLevel4}
        alt="surfaceLevel4"
        speed={1}
      />
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={surfaceLevel3}
        alt="surfaceLevel3"
        speed={0.9}
      />
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={surfaceLevel2}
        alt="surfaceLevel2"
        speed={0.6}
      />
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={surfaceLevel1}
        alt="surfaceLevel1"
        speed={0.3}
      />
      <AnimatedLayer
        screenWidth={screenWidth}
        scrollY={scrollY}
        src={surfaceLevel0}
        alt="surfaceLevel0"
        speed={0.2}
      />
    </section>
  )
}

export default Parallax
