import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }
  const test =
    'gjakgjkajgkajkgjkgjkgjkajgkjakgjkajgkajgkjakgjkajgkajkgjkagjakgjkgjakjgkajgkajkgjakjgkjajgkajkgjajgakjagggggg'

  return (
    <motion.nav
      animate={isExpanded ? 'open' : 'closed'}
      variants={variants}
      className="fixed top-0 z-50 h-full w-full overflow-hidden bg-white">
      <button onClick={() => setExpanded((prevExpanded) => !prevExpanded)}>
        Toggle
      </button>
      {test.split('').map((letter, index) => (
        <p key={index}>{letter}</p>
      ))}
    </motion.nav>
  )
}

export default Navbar
