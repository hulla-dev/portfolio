import type { ReactNode } from 'react'
import { Fragment } from 'react'
import Head from '../components/Head.client'

type Props = {
  children: ReactNode,
  title: string,
}

const Page = ({ children, title }: Props) => (
  <Fragment>
    <Head title={title} />
    <main className="bg-main w-full h-full">
      {children}
    </main>
  </Fragment>
)

export default Page