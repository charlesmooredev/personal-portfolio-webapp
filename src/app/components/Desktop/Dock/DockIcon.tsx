import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface Props {
  icon: ReactNode
  label: string
  onClick?: () => void
  href?: string
  mouseX: ReturnType<typeof useMotionValue<number>>
  compact?: boolean
}

export function DockIcon({
  icon,
  label,
  onClick,
  href,
  mouseX,
  compact = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const restSize = compact ? 46 : 54
  const peakSize = compact ? 56 : 70
  const widthSync = useTransform(distance, [-150, 0, 150], [restSize, peakSize, restSize])
  const width = useSpring(widthSync, {
    stiffness: 300,
    damping: 25,
  })

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={`group relative flex cursor-pointer items-center justify-center rounded-[18px] border text-white backdrop-blur-xl shadow-[0_14px_30px_rgba(3,8,20,0.32)] ${
        compact
          ? 'border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.1))]'
          : 'border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(217,223,232,0.12))]'
      }`}
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring', bounce: 0.3, duration: 0.2 }}
    >
      <div className="flex items-center justify-center text-xl text-white/92">
        {icon}
      </div>
      {!compact && (
        <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[12px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(234,238,244,0.92))] px-3 py-1 text-[11px] font-semibold text-[#19212d] opacity-0 shadow-[0_10px_24px_rgba(15,23,42,0.2)] transition-opacity duration-150 group-hover:opacity-100">
          {label}
        </div>
      )}
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
