import type { ReactChild, ReactNode } from 'react'
import { Fragment } from 'react'
import Navbar from './Navbar/Navbar.client'
import Head from '../components/Head.client'

type Props = {
  children: ReactNode
  header?: ReactChild
  title: string
}

const Page = ({ children, header, title }: Props) => (
  <Fragment>
    {/* Page head meta */}
    <Head title={title} />
    {/* Navbar */}
    <Navbar />
    {/* Header if provided */}
    {header && <header className="bg-main">{header}</header>}
    {/* We intentionally leave out width restrictions for styling reasons (i.e. we want fluent 4k effects) */}
    <main className="min-h-full w-full bg-main">{children}</main>
  </Fragment>
)

export default Page
