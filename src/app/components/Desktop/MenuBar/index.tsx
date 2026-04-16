import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function MenuBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(interval)
  }, [])

  const formattedDesktopDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  const formattedDesktopTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  const formattedMobileTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <>
      {/* macOS Menu Bar — desktop only */}
      <motion.div
        className="hidden h-8 w-full shrink-0 items-center justify-between border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] px-4 text-[13px] font-medium text-white/88 backdrop-blur-xl lg:flex"
        initial={{ y: -28 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <span className="font-semibold tracking-[-0.02em]">Charles Moore</span>
          <span className="text-white/50">Portfolio</span>
        </div>
        <div className="flex items-center gap-3 text-white/60">
          <span>{formattedDesktopDate}</span>
          <span>{formattedDesktopTime}</span>
        </div>
      </motion.div>

      {/* iPhone Status Bar + Dynamic Island — mobile only */}
      <motion.div
        className="relative z-50 h-[56px] w-full shrink-0 select-none lg:hidden"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
      >
        <div className="relative h-full">
          {/* Left: Time */}
          <span className="absolute left-5 top-[11px] text-[15px] font-semibold tracking-[-0.03em] text-white">
            {formattedMobileTime}
          </span>

          {/* Center: Dynamic Island */}
          <div className="pointer-events-none absolute inset-x-0 top-[7px] flex justify-center">
            <motion.div
              className="relative flex h-[34px] w-[126px] items-center justify-center rounded-full bg-black shadow-lg shadow-black/50"
              initial={{ scaleX: 0.6, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                bounce: 0.3,
                duration: 0.8,
                delay: 0.2,
              }}
            >
              {/* Camera dot */}
              <div className="absolute right-[16px] h-[10px] w-[10px] rounded-full bg-[#131520] ring-1 ring-white/8">
                <div className="absolute inset-[3px] rounded-full bg-[#1a1a3a]" />
              </div>
            </motion.div>
          </div>

          {/* Right: Status icons */}
          <div className="absolute right-5 top-[18px] flex items-center gap-1.5">
            {/* Signal bars */}
            <svg
              width="17"
              height="12"
              viewBox="0 0 17 12"
              fill="none"
              className="text-white"
            >
              <rect x="0" y="9" width="3" height="3" rx="0.5" fill="currentColor" />
              <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill="currentColor" />
              <rect x="9" y="3" width="3" height="9" rx="0.5" fill="currentColor" />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="currentColor" />
            </svg>
            {/* WiFi */}
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              className="text-white"
            >
              <path d="M8 10.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="currentColor" />
              <path d="M5.17 9.17a4 4 0 015.66 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M2.34 6.34a7.5 7.5 0 0111.32 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M0 3.5a11 11 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {/* Battery */}
            <svg
              width="27"
              height="12"
              viewBox="0 0 27 12"
              fill="none"
              className="text-white"
            >
              <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.35" />
              <rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" />
              <path d="M24 4v4a2 2 0 000-4z" fill="currentColor" fillOpacity="0.4" />
            </svg>
          </div>
        </div>
      </motion.div>
    </>
  )
}
