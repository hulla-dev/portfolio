import type { NextPage } from 'next'
import Parallax from '../components/Parallax.client'
import Page from '../components/Page.server'
import Content from '../components/Content.server'

const Home: NextPage = () => {
  return (
    <div className="h-[4000px]">
      <Page title="Welcome to my Portfolio" header={<Parallax />}>
        <Content>
          <h1>Hi, I'm Samuel Hulla.</h1>
          <h3>Welcome to my portfolio</h3>
        </Content>
      </Page>
    </div>
  )
}

export default Home
