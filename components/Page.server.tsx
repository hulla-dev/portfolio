import type { ReactChild, ReactNode } from 'react'
import { Fragment } from 'react'
import Head from '../components/Head.client'

type Props = {
  children: ReactNode,
  header?: ReactChild
  title: string,
}

const Page = ({ children, header, title }: Props) => (
  <Fragment>
    <Head title={title} />
    {header && (
      <header className="bg-main">
        {header}
      </header>
    )}
    <div className="flex justify-center bg-main w-full h-full">
      <main className="w-full bg-main max-w-[2560px]">
        {children}
      </main>
    </div>
  </Fragment>
)

export default Page