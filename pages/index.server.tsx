import type { NextPage } from 'next'
import Parallax from '../components/Parallax.client'

const Home: NextPage = () => {
  return (
    <main className="w-full h-[120rem] bg-main">
      <Parallax />
    </main>
  )
}

export default Home
