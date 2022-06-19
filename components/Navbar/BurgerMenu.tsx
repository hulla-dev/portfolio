import { ComponentProps, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  open: boolean
}

const BurgerMenu = ({ open }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const transitionOpen = (delay: number) => ({
    delay,
    type: 'spring',
    stiffness: 20,
    restDelta: 2,
  })

  const transitionClosed = (delay: number) => ({
    delay,
    type: 'spring',
    stiffness: 400,
    damping: 40,
  })

  const variant1 = {
    closed: {
      d: 'M 10 13 L 30 13',
      pathLength: 1,
      transition: transitionClosed,
    },
    open: { d: 'M 10 12 L 28 28', pathLength: 1, transition: transitionOpen },
  }

  const variant2 = {
    closed: { opacity: 1, pathLength: 1, transition: transitionClosed },
    open: { opacity: 0, pathLength: 1, transition: transitionOpen },
  }

  const variant3 = {
    closed: {
      d: 'M 10 23 L 30 23',
      pathLength: 1,
      transition: transitionClosed,
    },
    open: { d: 'M 28 12 L 10 28', pathLength: 1, transition: transitionOpen },
  }

  const Path = (props: ComponentProps<typeof motion.path>) => (
    <motion.path
      {...props}
      initial={{ pathLength: 0.5 }}
      transition={{ pathLength: { duration: 0.3, delay: 0.1 } }}
      animate={open ? 'open' : 'closed'}
      strokeLinecap="round"
      className={`fill-transparent stroke-2 transition duration-100 ease-in-out ${
        isHovered ? 'stroke-primary' : 'stroke-white'
      }`}
    />
  )

  return (
    <motion.svg
      width="40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      height="40"
      className="z-50 transition-colors ease-in hover:stroke-primary"
      viewBox="0 0 40 40"
      initial="false"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path custom={1.2} variants={variant1} />
      <Path
        custom={0.7}
        d="M 10 18 L 30 18"
        variants={variant2}
        transition={{ duration: 0.1 }}
        stroke="white"
      />
      <Path custom={0.4} variants={variant3} />
    </motion.svg>
  )
}

export default BurgerMenu
