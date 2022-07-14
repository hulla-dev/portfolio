import type { NextPage } from 'next'
import Parallax from '../components/Parallax.client'
import Page from '../components/Page.server'
import Content from '../components/Content.server'

const Home: NextPage = () => {
  return (
    <Page title="Welcome to my Portfolio" header={<Parallax />}>
      <Content>
        <article className="flex">
          <h1>Hi, I&apos;m&nbsp;</h1>
          <h1 className="text-primary">Samuel Hulla</h1>
          <h1>.</h1>
        </article>
        <h3>Welcome to my portfolio</h3>
        <div className="my-28">
          My portfolio is currently undergoing a major overhaul. I&apos;ll be
          happy to welcome you upon the official release in upcoming months
        </div>
        <div className="h-[800px]"></div>
      </Content>
    </Page>
  )
}

export default Home
