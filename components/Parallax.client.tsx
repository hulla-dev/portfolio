import Image from 'next/image'
import { motion } from 'framer-motion'
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

const Parallax = () => {
  return (
    <section id="parallax" className="static block w-full h-[891px]">
      <figure className="w-full absolute">
        <Image layout="responsive" src={background} alt="background"/>
      </figure>
      <figure className="w-full absolute">
        <Image layout="responsive" src={stars} alt="stars"/>
      </figure>
      <figure className="w-full absolute">
        <Image layout="responsive" src={moon} alt="moon" />
      </figure>
      <figure className="w-full absolute">
        <Image layout="responsive" src={clouds} alt="clouds" />
      </figure>
      <figure className="w-full absolute">
        <Image layout="responsive" src={surfaceLevel4} alt="surfaceLevel4" />
      </figure>
      <figure className="w-full absolute">
        <Image layout="responsive" src={surfaceLevel3} alt="surfaceLevel3" />
      </figure>
      <figure className="w-full absolute">
        <Image layout="responsive"  src={surfaceLevel2} alt="surfaceLevel2" />
      </figure>
      <figure className="w-full absolute">
        <Image layout="responsive"  src={surfaceLevel1} alt="surfaceLevel1" />
      </figure>
      <figure className="w-full absolute">
        <Image layout="responsive"  src={surfaceLevel0} alt="surfaceLevel0" />
      </figure>
    </section>
  )
}

export default Parallax