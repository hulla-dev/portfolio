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
    <section id="parallax" className="w-full">
      <figure className="absolute top-0 left-0">
        <Image src={background} alt="background"/>
      </figure>
      <figure className="absolute top-0 left-0">
        <Image src={stars} alt="stars"/>
      </figure>
      <motion.figure animate={{ rotate: 360 }} className="absolute top-0 left-0">
        <Image  src={moon} alt="moon" />
      </motion.figure>
      <figure className="absolute top-0 left-0">
        <Image src={clouds} alt="clouds" />
      </figure>
      <figure className="absolute top-0 left-0">
        <Image src={surfaceLevel4} alt="surfaceLevel4" />
      </figure>
      <figure className="absolute top-0 left-0">
        <Image src={surfaceLevel3} alt="surfaceLevel3" />
      </figure>
      <figure className="absolute top-0 left-0">
        <Image src={surfaceLevel2} alt="surfaceLevel2" />
      </figure>
      <figure className="absolute top-0 left-0">
        <Image src={surfaceLevel1} alt="surfaceLevel1" />
      </figure>
      <figure className="absolute top-0 left-0">
        <Image src={surfaceLevel0} alt="surfaceLevel0" />
      </figure>
    </section>
  )
}

export default Parallax