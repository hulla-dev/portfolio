import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: (...args: any[]) => void | Promise<void>
  variant?: 'default' | 'outlined' | 'icon'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
}

const Button = (props: Props) => {
  const {
    children,
    onClick,
    variant = 'default',
    // size = 'medium',
    disabled = false,
    className = '',
  } = props
  const styles = clsx(
    variant === 'default' && 'bg-primary p-5',
    variant === 'outlined' &&
      'transition ease-in-out delay-50 hover:bg-primary border border-primary p-5',
    typeof children === 'string' && 'text-white',
    className,
  )
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={styles}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </motion.button>
  )
}

export default Button
