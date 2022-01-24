import type { NextPage } from 'next'
import Image from 'next/image'
import staticImage from '../public/background.png'

const Home: NextPage = () => {
  return (
    <section>
      <Image src={staticImage} alt="Staticly served background" />
      <p>this is fucked</p>
      <Image src="/background.png" layout="fill" alt="Pls work" />
    </section>
  )
}

export default Home
