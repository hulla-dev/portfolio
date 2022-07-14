import { useState } from 'react'
import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import clsx from 'clsx'

type Props = {
  children: string
  icon?: string | StaticImageData
  onClick?: (...args: any[]) => void | Promise<void>
  variant?: 'default' | 'outlined' | 'icon'
  disabled?: boolean
  className?: string
}

const Button = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const {
    children,
    onClick,
    variant = 'default',
    disabled = false,
    className = '',
  } = props

  const styles = clsx(
    'p-5 min-h-[4rem] max-w-sm md:max-w-fit overflow-hidden',
    variant === 'default' && 'bg-primary',
    variant === 'outlined' && 'border border-primary',
    typeof children === 'string' && 'text-white',
    className,
  )

  const fillStyles = clsx(
    'absolute z-0 h-28 right-0 bottom-0 w-28 h-16',
    variant === 'default' && 'bg-primaryDark',
    variant === 'outlined' && 'bg-primary',
  )

  const textStyle = 'z-20 uppercase font-semibold text-center'

  // Using logarithmic function for diminishing speed returns
  const getTransitionDuration = (length: number, start: number) => {
    const duration = start - Math.log10(length) * 0.1
    const LIMIT = 0.27
    return duration <= LIMIT ? LIMIT : duration
  }

  const hoverVariants = {
    default: (length: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 45,
      x: 155,
      y: 44,
      transition: {
        duration: getTransitionDuration(length, 0.35),
      },
    }),
    hovered: (length: number) => ({
      scale: 14,
      opacity: 1,
      rotate: 45,
      transition: {
        duration: getTransitionDuration(length, 0.4),
      },
    }),
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={styles}
      onClick={onClick}
      initial={false}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}>
      {/* This text is used to calculate button width / height */}
      <p className={textStyle}>{children}</p>
      {/* Expanding span for hover effect */}
      <div className="relative">
        <motion.span
          custom={children.length}
          initial={false}
          animate={isHovered ? 'hovered' : 'default'}
          className={fillStyles}
          variants={hoverVariants}
        />
        {/* This text is what the user actually sees */}
        <p className={clsx(textStyle, 'absolute bottom-0')}>{children}</p>
      </div>
    </motion.button>
  )
}

export default Button
