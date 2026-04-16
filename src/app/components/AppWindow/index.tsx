import { motion } from 'motion/react'
import { useEffect, type ReactNode } from 'react'

interface Props {
  onClose: () => void
  title: string
  children: ReactNode
}

export function AppWindow({ onClose, title, children }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-[#05080d]/56 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      <motion.div
        className="relative flex h-full w-full flex-col overflow-hidden bg-[linear-gradient(180deg,rgba(16,21,31,0.96),rgba(10,14,22,0.94))] shadow-2xl shadow-black/45 lg:m-8 lg:h-[calc(100%-4rem)] lg:max-h-[760px] lg:w-[min(100%-4rem,1024px)] lg:rounded-[28px] lg:border lg:border-white/12 lg:backdrop-blur-2xl"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        exit={{
          opacity: 0,
          scale: 0.97,
          y: 15,
          filter: 'blur(8px)',
          transition: {
            duration: 0.22,
            ease: [0.36, 0, 0.66, 0.2],
          },
        }}
        transition={{ type: 'spring', bounce: 0.18, duration: 0.48 }}
      >
        <div className="flex h-14 shrink-0 items-center border-b border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-4 backdrop-blur-xl lg:h-12">
          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={onClose}
              className="group relative h-3 w-3 rounded-full bg-[#ff5f57] transition-all hover:brightness-110"
              aria-label={`Close ${title}`}
            >
              <svg
                className="h-3 w-3 text-[#4a0002] opacity-0 transition-opacity group-hover:opacity-100"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 3l6 6M9 3l-6 6" />
              </svg>
            </button>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1 text-sm font-medium text-[#8fc0ff] lg:hidden"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M10 3L5 8l5 5" />
            </svg>
            Home
          </button>

          <div className="flex-1 text-center text-[13px] font-medium text-white/62 select-none">
            {title}
          </div>

          <div className="w-[52px] lg:hidden" />
          <div className="hidden w-[52px] lg:block" />
        </div>

        <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,rgba(10,14,22,0.78),rgba(5,8,14,0.94))] window-scroll">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
