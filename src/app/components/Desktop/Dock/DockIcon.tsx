import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface Props {
  icon: ReactNode
  label: string
  onClick?: () => void
  href?: string
  mouseX: ReturnType<typeof useMotionValue<number>>
}

export function DockIcon({ icon, label, onClick, href, mouseX }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 68, 48])
  const width = useSpring(widthSync, {
    stiffness: 300,
    damping: 25,
  })

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="relative flex items-center justify-center rounded-xl bg-surface-800/80 border border-white/10 cursor-pointer group backdrop-blur-sm"
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring', bounce: 0.3, duration: 0.2 }}
    >
      <div className="text-surface-200 flex items-center justify-center text-xl">
        {icon}
      </div>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-surface-800/90 backdrop-blur-xl text-surface-100 text-[11px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none border border-surface-700/50">
        {label}
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  )
}
