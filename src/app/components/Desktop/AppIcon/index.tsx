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
      className="flex flex-col items-center gap-1.5 group cursor-pointer w-[72px] lg:w-[90px]"
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.6,
            delay: index * 0.05,
          },
        },
      }}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', bounce: 0.4, duration: 0.3 }}
    >
      <div className="w-14 h-14 lg:w-[72px] lg:h-[72px] rounded-[14px] lg:rounded-[16px] overflow-hidden shadow-lg shadow-black/30 border border-white/10">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-[10px] lg:text-[11px] text-surface-200 font-medium text-center leading-tight line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        {name}
      </span>
    </motion.button>
  )
}
