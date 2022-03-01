import { MotionValue, motion, useTransform } from 'framer-motion'
import Image from 'next/image'

type Props = {
  speed: number
  src: StaticImageData
  alt: string
  scrollY: MotionValue<number>
  customStyle?: Record<string, unknown>
  bg?: boolean
  screenWidth: number
}

const AnimatedLayer = (props: Props) => {
  const {
    speed,
    src,
    alt,
    scrollY,
    bg = false,
    screenWidth,
    customStyle = {},
  } = props

  const inputRange = [0, 400, 500, 700]
  const outputRange = bg ? inputRange : [0, 400, 550, 600]
  const applySpeed = (array: number[]) => array.map((x) => x * speed)

  const y = useTransform(scrollY, inputRange, applySpeed(outputRange))

  const style = { ...customStyle, y }

  if (screenWidth >= 2560) {
    return (
      <figure className="z-1 absolute w-full">
        <Image layout="responsive" src={src} alt={alt} />
      </figure>
    )
  }

  return (
    <motion.figure style={style} className="z-1 absolute w-full">
      <Image layout="responsive" src={src} alt={alt} />
      <div className="relative z-10 h-[350px] w-full bg-main" />
    </motion.figure>
  )
}

export default AnimatedLayer
