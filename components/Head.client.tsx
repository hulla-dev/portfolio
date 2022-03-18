import NextHead from 'next/head'

type Props = {
  title: string
}

const Head = ({ title }: Props) => (
	<NextHead>
		<title>{title}</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	</NextHead>
)

export default Head
