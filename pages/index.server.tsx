import type { NextPage } from 'next'
import Parallax from '../components/Parallax.client'
import Page from '../components/Page.server'
import Content from '../components/Content.server'

const Home: NextPage = () => {
  return (
    <div className="h-[4000px]">
      <Page title="Welcome to my Portfolio" header={<Parallax />}>
        <Content>
          <h1 className="text-xl text-white">Hello world</h1>
        </Content>
        <div className="h-[400px] w-full bg-red-400" />
      </Page>
    </div>
  )
}

export default Home
