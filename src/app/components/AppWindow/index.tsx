import { motion, useReducedMotion } from 'motion/react'
import { useEffect, type ReactNode } from 'react'

interface Props {
  onClose: () => void
  title: string
  children: ReactNode
}

export function AppWindow({ onClose, title, children }: Props) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="absolute inset-0 z-[100] flex items-stretch justify-center p-2 sm:p-4 lg:p-8">
      <motion.div
        className="absolute inset-0 bg-black/72 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.14 } }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
      />

      <motion.div
        className="terminal-panel relative flex h-full w-full max-w-[1120px] flex-col overflow-hidden shadow-[0_0_70px_rgba(70,246,255,0.12)] lg:max-h-[820px]"
        initial={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, scaleY: 0.92, y: 18, filter: 'blur(5px)' }
        }
        animate={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 1, scaleY: 1, y: 0, filter: 'blur(0px)' }
        }
        exit={
          reduceMotion
            ? { opacity: 0 }
            : {
                opacity: 0,
                scaleY: 0.96,
                y: 12,
                filter: 'blur(6px)',
                transition: { duration: 0.18, ease: [0.36, 0, 0.66, 0.2] },
              }
        }
        transition={{ duration: 0.34, ease: 'easeOut' }}
      >
        <div className="grid min-h-14 shrink-0 grid-cols-[1fr_auto] items-center gap-3 border-b border-[rgb(var(--crt-line))] bg-black/35 px-3 py-3 sm:grid-cols-[1fr_auto_1fr] sm:px-4">
          <div className="min-w-0">
            <p className="truncate text-[11px] uppercase text-[rgb(var(--crt-muted))]">
              Open Record / {title}
            </p>
            <p className="mt-1 truncate text-sm uppercase text-[rgb(var(--crt-green))]">
              SYS.STATUS: ACTIVE
            </p>
          </div>

          <div className="hidden text-center text-[12px] uppercase text-[rgb(var(--crt-text))] sm:block">
            {title}
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="min-h-10 border border-[rgb(var(--crt-line))] px-3 text-[12px] uppercase text-[rgb(var(--crt-muted))] transition-colors hover:border-[#ffd47a] hover:text-[#ffd47a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd47a]"
              aria-label={`Close ${title}`}
            >
              Close / ESC
            </button>
          </div>
        </div>

        <div className="window-scroll min-h-0 flex-1 overflow-y-auto bg-black/20">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
