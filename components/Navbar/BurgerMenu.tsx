import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

type Props = {
  onClick: () => void,
}

/**
 * Helper component for rendering SVG Path with Motion Props
 * @param props 
 * @returns 
 */
const Path = (props: MotionProps & { d?: string }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeDasharray="0 1"
    strokeLinecap="round"
    {...props}
  />
)

/**
 * A burger menu that accepts a useCycle toggler
 * @param param0 
 * @returns 
 */
const BurgerMenu = ({ onClick }: Props) => (
  <button onClick={onClick}>
    <svg width="25" height="25" viewBox="0 0 25 25">
      <Path
        variants={{
          open: { d: "M 3 16.5 L17 2.5" },
          closed: { d: "M 2 2.5 L 20 2.5" },
        }}
      />
      <Path
        d="M 2 9.43 L 20 9.43"
        variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          open: { d: "M 3 2.5 L 17 16.35" },
          closed: { d: "M 3 2.5 L 17 16.35" },
        }}
      />
    </svg>
  </button>
)

export default BurgerMenu
