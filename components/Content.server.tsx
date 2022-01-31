import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Content = ({ children }: Props) => (
  <div className="flex justify-center w-full">
    <section id="content" className="px-[10rem] w-full max-w-[1920px]">
      {children}
    </section>  
  </div> 
)

export default Content