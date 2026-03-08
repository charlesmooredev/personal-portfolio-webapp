import { motion, useMotionValue } from 'motion/react'
import {
  EnvelopeAtFill,
  Facebook,
  Github,
  Linkedin,
} from 'react-bootstrap-icons'
import { DockIcon } from './DockIcon'

export function Dock() {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      className="fixed bottom-3 left-0 right-0 flex justify-center z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.6, delay: 0.3 }}
    >
      <div
        className="flex items-end gap-2 px-3 py-2 bg-surface-900/60 backdrop-blur-2xl rounded-2xl border border-white/10"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <DockIcon
          icon={<Facebook size={22} />}
          label="Facebook"
          href="https://www.facebook.com/profile.php?id=1843639691"
          mouseX={mouseX}
        />
        <DockIcon
          icon={<Linkedin size={22} />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/charles-m-159476297"
          mouseX={mouseX}
        />
        <DockIcon
          icon={<EnvelopeAtFill size={22} />}
          label="Email"
          href="mailto:charles@cmooredev.com"
          mouseX={mouseX}
        />

        <div className="w-px h-8 bg-white/10 mx-1 self-center" />

        <DockIcon
          icon={<Github size={22} />}
          label="GitHub"
          href="https://github.com/charlesmooredev"
          mouseX={mouseX}
        />
      </div>
    </motion.div>
  )
}
