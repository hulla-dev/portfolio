import type { ReactChild, ReactNode } from 'react'
import { Fragment } from 'react'
import Head from '../components/Head.client'
import Navbar from '../components/Navbar.client'

type Props = {
  children: ReactNode
  header?: ReactChild
  title: string
}

const Page = ({ children, header, title }: Props) => (
  <Fragment>
    {/* Page head meta */}
    <Head title={title} />
    {/* Header if provided */}
    {/* <Navbar /> */}
    {header && <header className="bg-main">{header}</header>}
    {/* We intentionally leave out width restrictions for styling reasons (i.e. we want fluent 4k effects) */}
    <main className="h-full w-full bg-main">{children}</main>
  </Fragment>
)

export default Page
