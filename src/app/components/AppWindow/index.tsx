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
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      <motion.div
        className="relative w-full h-full lg:w-[90vw] lg:max-w-4xl lg:max-h-[80vh] lg:h-auto lg:rounded-xl overflow-hidden shadow-2xl shadow-black/50 lg:border lg:border-white/10 flex flex-col backdrop-blur-2xl bg-surface-900/70"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 15,
          filter: 'blur(8px)',
          rotateX: 3,
          transition: {
            duration: 0.25,
            ease: [0.36, 0, 0.66, -0.56],
          },
        }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
        style={{ perspective: 800 }}
      >
        <div className="h-11 bg-surface-850/60 backdrop-blur-xl flex items-center px-4 shrink-0 border-b border-white/5">
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all group relative"
            >
              <svg
                className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#4a0002]"
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
            className="lg:hidden flex items-center gap-1 text-blue-400 text-sm font-medium"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M10 3L5 8l5 5" />
            </svg>
            Back
          </button>

          <div className="flex-1 text-center text-[13px] font-medium text-surface-400 select-none">
            {title}
          </div>

          <div className="w-[52px]" />
        </div>

        <div className="flex-1 overflow-y-auto bg-surface-900/50 window-scroll">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
