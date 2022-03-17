import { motion } from 'framer-motion'

const Backdrop = () => {
  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  return (
    <motion.div className="absolute top-0 left-0 bottom-0 w-96 bg-white" variants={variants} />
  )
}

export default Backdrop
