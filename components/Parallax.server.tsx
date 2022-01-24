import Image from 'next/image'
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
    <section id="parallax" className="w-full h-4">
      <Image src={background} alt="background" layout="fill" />
      <Image src={stars} alt="stars" layout="fill" />
      <Image src={moon} alt="moon" layout="fill" />
      <Image src={clouds} alt="clouds" layout="fill" />
      <Image src={surfaceLevel4} alt="surfaceLevel4" layout="fill" />
      <Image src={surfaceLevel3} alt="surfaceLevel3" layout="fill" />
      <Image src={surfaceLevel2} alt="surfaceLevel2" layout="fill" />
      <Image src={surfaceLevel1} alt="surfaceLevel1" layout="fill" />
      <Image src={surfaceLevel0} alt="surfaceLevel0" layout="fill" />
    </section>
  )
}

export default Parallax