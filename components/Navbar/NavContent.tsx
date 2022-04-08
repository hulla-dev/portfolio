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
        <motion.li className="flex flex-row align-center px-5" key={name}>
          <Link href={href}>
            <a className="mt-10 text-lg uppercase text-text">{name}</a>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default NavContent