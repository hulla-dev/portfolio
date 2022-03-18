import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Content = ({ children }: Props) => (
	<div className="flex w-full justify-center">
		<section id="content" className="w-full max-w-[1920px] px-[10rem]">
			{children}
		</section>
	</div>
)

export default Content
