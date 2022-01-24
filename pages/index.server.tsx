import type { NextPage } from 'next'
import Parallax from '../components/Parallax.server'

const Home: NextPage = () => {
  return (
    <main className="w-full h-full">
      <Parallax />
    </main>
  )
}

export default Home
