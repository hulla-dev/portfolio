import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import Link, { LinkProps } from 'next/link'

export type Props = PropsWithChildren<LinkProps>

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    y: -50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const NavItem = ({ children, ...linkProps }: Props) => {
  return (
    <motion.li className="w-full py-2 hover:text-primary" variants={variants}>
      <Link {...linkProps}>
        <motion.a
          className="text-semibold cursor-pointer text-3xl"
          whileTap={{ scale: 0.9 }}>
          {children}
        </motion.a>
      </Link>
    </motion.li>
  )
}

export default NavItem
