import Image from 'next/image'
import background from '../public/parallax/background.png'
import backdropLevel0 from '../public/parallax/BackdropLevel0.png'

const Parallax = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Image width={1000} height={800} src={background} alt="Background" />
      <Image src="/parallax/background.png"  width={500} height={500} alt="Lowest backdrop" />
      <Image src={backdropLevel0} alt="Wtf" />

      <p>Why dont u work</p>
    </div>
  )
}

export default Parallax