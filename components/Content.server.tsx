import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Content = ({ children }: Props) => (
  <section id="content" className="flex justify-center max-w-[1920px]">
    {children}
  </section> 
)

export default Content