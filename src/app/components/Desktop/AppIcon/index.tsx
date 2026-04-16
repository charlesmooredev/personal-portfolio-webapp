import { motion } from 'motion/react'

interface Props {
  name: string
  thumbnail: string
  onClick: () => void
  index: number
}

export function AppIcon({ name, thumbnail, onClick, index }: Props) {
  return (
    <motion.button
      className="group flex w-[76px] flex-col items-center gap-2 text-center lg:w-[92px]"
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 18 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 220,
            damping: 18,
            delay: index * 0.05,
          },
        },
      }}
      whileHover={{ y: -5, scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', bounce: 0.25, duration: 0.3 }}
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-[20px] border border-white/20 bg-white/12 shadow-[0_18px_45px_rgba(3,8,20,0.42)] ring-1 ring-black/10 lg:h-[78px] lg:w-[78px]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))]" />
        <img
          src={thumbnail}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <span className="line-clamp-2 max-w-[78px] text-[11px] font-medium leading-tight text-white/92 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] lg:max-w-[92px]">
        {name}
      </span>
    </motion.button>
  )
}
