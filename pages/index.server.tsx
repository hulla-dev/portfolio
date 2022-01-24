import type { NextPage } from 'next'
import Parallax from '../components/Parallax.client'
import Page from '../components/Page.server'

const Home: NextPage = () => {
  return (
    <Page title="Welcome to my Portfolio">
      <Parallax />
    </Page>
  )
}

export default Home
