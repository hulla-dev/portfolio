import Link from 'next/link'
import { MotionValue, motion, useTransform } from 'framer-motion'
import NavContent, { ItemProps } from "./NavContent"
import { useScrollWithDirection } from '../../lib/useScrollWithDirection'

const MENU_ITEMS: ItemProps[] = [
	{
		href: '/',
		name: 'Home',
	},
	{
		href: '/about',
		name: 'About',
	},
	{
		href: '/projects',
		name: 'Projects',
	},
	{
		href: '/contact',
		name: 'Contact',
	},
	{
		href: '/blog',
		name: 'Blog',
	},
	{
		href: '/courses',
		name: 'Courses',
	}
]

const Navbar = () => {
	const { scrollDirection, scrollYProgress } = useScrollWithDirection()

	/* ------------------------------ Nav animation ----------------------------- */
	const scrollDownOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
	const scrollUpOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1])

	const opacity = scrollDirection === 'down' ? scrollDownOpacity : scrollUpOpacity

	/* --------------------------- Backdrop animation --------------------------- */
	const variants = {
		visible: (scrollProgress: MotionValue<number>) => ({
			opacity: scrollProgress.get() < 0.01 ? 0 : 1,
		}),
		hidden: {
			opacity: 0,
		}
	}

	return (
		<>
			<motion.div
				className="fixed top-0 left-0 right-0 z-20 h-28 bg-light"
				initial="hidden"
				animate={scrollDirection === 'down' ? 'hidden' : 'visible'}
				variants={variants}
				custom={scrollYProgress}
			/>
			<motion.nav
				className="fixed flex justify-center top-0 left-0 w-full h-20 z-50"
				style={{ opacity }}
				initial={false}>
				<NavContent items={MENU_ITEMS} />
			</motion.nav>
		</>
	)
}

export default Navbar