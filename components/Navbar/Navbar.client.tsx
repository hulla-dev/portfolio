import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import NavItem, { Props as NavItemProps } from './NavItem'
import BurgerMenu from './BurgerMenu'
import Button from '../Button'
import logo from '../../public/logos/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: 'circle(240vw at 90vw 90vh)',
      width: '100vw',
      height: '100vh',
      opacity: 100,
      transition: {
        type: 'spring',
        duration: 0.8,
      },
    },
    closed: {
      clipPath: 'circle(20px at 97.5vw 4.5vh)',
      height: 0,
      opacity: 0,
      transition: {
        delay: 0.4,
        type: 'spring',
        duration: 0.4,
      },
    },
  }

  const menuItems = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const items: NavItemProps[] = [
    {
      href: '/',
      children: 'Home',
    },
    {
      href: '/about',
      children: 'About me',
    },
    {
      href: '/projects',
      children: 'Projects',
    },
    {
      href: '/blog',
      children: 'Blog',
    },
    {
      href: '/docs',
      children: 'Docs',
    },
  ]

  return (
    <nav className="fixed top-0 right-0 z-50">
      <button
        className="fixed top-5 right-5 z-50 h-10 w-10 rounded-full bg-content"
        onClick={() => setOpen(prevOpen => !prevOpen)}>
        {/* Burger menu svg open-close animation */}
        <BurgerMenu open={open} />
      </button>
      {/* This acts as an overlay stacked on top of the button, we use two different version because of measurements */}
      <motion.div
        className="fixed right-0 top-0 z-30 hidden bg-transparent"
        variants={variants}
        custom="web"
        initial={false}
        animate={open ? 'open' : 'closed'}>
        <div className="flex h-screen w-screen">
          {/* Left side - display */}
          <section className="hidden h-full w-full bg-content opacity-60 md:block"></section>
          {/* Right side - nav menu */}
          <section
            id="nav items"
            className="flex h-screen w-screen flex-col justify-between bg-content px-8 md:h-auto md:w-auto md:px-12">
            <div>
              <motion.figure
                animate={open ? 'open' : 'closed'}
                variants={{
                  open: { opacity: 1 },
                  closed: { opacity: 0, transition: { delay: 0.2 } },
                }}
                className="relative top-16">
                <Image width={180} height={70} alt="My logo" src={logo} />
              </motion.figure>
              <motion.ul
                animate={open ? 'open' : 'closed'}
                variants={menuItems}
                className="z-40 mt-32 ml-1 min-w-[10rem]">
                {items.map((itemProps, index) => (
                  <NavItem key={index} {...itemProps} />
                ))}
              </motion.ul>
            </div>
            <Button className="mb-12" variant="outlined">
              Contact me
            </Button>
          </section>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
