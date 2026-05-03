import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { HTMLMotionProps, Variants } from 'framer-motion'

type TransitionDirection = 'left' | 'right' | 'none'

type PageTransitionProps = HTMLMotionProps<'div'> & {
  direction?: TransitionDirection
}

const variants = {
  initial: (direction: TransitionDirection) => ({
    opacity: 0,
    x: direction === 'right' ? '100%' : direction === 'left' ? '-100%' : 0,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 200,
    },
  },
  exit: (direction: TransitionDirection) => ({
    opacity: 0,
    x: direction === 'right' ? '-100%' : direction === 'left' ? '100%' : 0,
    transition: {
      duration: 0.5,
    },
  }),
} as const satisfies Variants

export function PageTransition({
  children,
  direction = 'right',
  className,
  ...props
}: PageTransitionProps) {
  const isDesktop =
    typeof window !== 'undefined' &&
    window.matchMedia('(min-width: 768px)').matches
  const activeDirection = isDesktop ? 'none' : direction

  return (
    <motion.div
      custom={activeDirection}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={cn('h-full w-full', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
