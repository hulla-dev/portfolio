import type { NextPage } from 'next'
import Parallax from '../components/Parallax.client'
import Page from '../components/Page.server'

const Home: NextPage = () => {
  return (
    <div className="h-[4000px]">
      <Page title="Welcome to my Portfolio" header={<Parallax />}>
        <p>example</p>
      </Page>
    </div>
  )
}

export default Home
