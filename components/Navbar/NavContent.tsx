import Link from 'next/link'
import { motion } from 'framer-motion'

export type ItemProps = {
  href: string,
  name: string,
}

type ContentProps = {
  items: ItemProps[],
}


const NavContent = ({ items }: ContentProps) => {
  return (
    <motion.ul className="flex flex-row h-full">
      {items.map(({ href, name }) => (
        <motion.li key={name}>
          <Link href={href}>
            <a>{name}</a>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default NavContent