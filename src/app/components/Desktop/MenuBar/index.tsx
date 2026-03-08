import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function MenuBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(interval)
  }, [])

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <motion.div
      className="h-7 w-full bg-surface-900/80 backdrop-blur-xl flex items-center justify-between px-4 text-[13px] font-medium text-surface-200 select-none shrink-0 z-50"
      initial={{ y: -28 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <span className="font-bold">Charles Moore</span>
      </div>
      <div className="flex items-center gap-3 text-surface-300">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </motion.div>
  )
}
