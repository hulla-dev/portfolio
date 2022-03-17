import Link from 'next/link'
import { motion } from 'framer-motion'

export type ItemProps = {
  href: string,
  name: string,
}

type ContentProps = {
  items: ItemProps[],
}


const NavItem = ({ href, name }: ItemProps) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

  return (
    <motion.li key={name} variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </motion.li>
  )
}

const NavContent = ({ items }: ContentProps) => {
  const variants = {
    open: { staggerChildren: 0.07, delayChildren: 0.2 },
    closed: { staggerChildren: 0.05, staggerDirection: -1 },
  }

  return (
    // @ts-ignore throws error on type open not assignable to type Variant
    <motion.ul variants={variants}>
      {items.map(({ href, name }) => (
        <NavItem href={href} name={name} key={name} />
      ))}
    </motion.ul>
  )
}


export default NavContent