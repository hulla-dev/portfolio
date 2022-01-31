import type { NextPage } from 'next'
import Parallax from '../components/Parallax.client'
import Page from '../components/Page.server'

const Home: NextPage = () => {
  return (
    <div className="h-[4000px]">
      <Page title="Welcome to my Portfolio" header={<Parallax />}>
        <h1 className="text-white text-xl">Hello world</h1>
      </Page>
    </div>
  )
}

export default Home
