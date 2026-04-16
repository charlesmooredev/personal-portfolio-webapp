import { motion, useMotionValue } from 'motion/react'
import {
  EnvelopeAtFill,
  Facebook,
  Github,
  Linkedin,
} from 'react-bootstrap-icons'
import { DockIcon } from './DockIcon'

interface Props {
  variant: 'desktop' | 'mobile'
}

export function Dock({ variant }: Props) {
  const mouseX = useMotionValue(Infinity)
  const isMobile = variant === 'mobile'

  return (
    <motion.div
      className="flex justify-center"
      initial={{ y: isMobile ? 28 : 48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        bounce: 0.18,
        duration: 0.55,
        delay: 0.28,
      }}
    >
      <div
        className={`flex items-end rounded-[26px] border shadow-[0_24px_60px_rgba(3,8,20,0.35)] backdrop-blur-3xl ${
          isMobile
            ? 'gap-2 border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.12))] px-3 py-2.5'
            : 'gap-2.5 border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(214,220,230,0.24))] px-4 py-3'
        }`}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <DockIcon
          icon={<Facebook size={22} />}
          label="Facebook"
          href="https://www.facebook.com/profile.php?id=1843639691"
          mouseX={mouseX}
          compact={isMobile}
        />
        <DockIcon
          icon={<Linkedin size={22} />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/charles-m-159476297"
          mouseX={mouseX}
          compact={isMobile}
        />
        <DockIcon
          icon={<EnvelopeAtFill size={22} />}
          label="Email"
          href="mailto:charles@cmooredev.com"
          mouseX={mouseX}
          compact={isMobile}
        />

        <div className="mx-1 h-9 w-px self-center bg-white/12" />

        <DockIcon
          icon={<Github size={22} />}
          label="GitHub"
          href="https://github.com/charlesmooredev"
          mouseX={mouseX}
          compact={isMobile}
        />
      </div>
    </motion.div>
  )
}
