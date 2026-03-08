import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useState } from 'react'
import { CpuFill, EnvelopeAtFill } from 'react-bootstrap-icons'
import { projects } from '../../helpers/Projects'
import { AppWindow } from '../AppWindow'
import { ContactWindow } from '../AppWindow/ContactWindow'
import { ProjectWindow } from '../AppWindow/ProjectWindow'
import { SkillsWindow } from '../AppWindow/SkillsWindow'
import { AppIcon } from './AppIcon'
import { Dock } from './Dock'
import { MenuBar } from './MenuBar'

type OpenApp =
  | { type: 'project'; id: string }
  | { type: 'contact' }
  | { type: 'skills' }
  | null

export function Desktop() {
  const [openApp, setOpenApp] = useState<OpenApp>(null)

  const handleClose = useCallback(() => setOpenApp(null), [])

  const openProject =
    openApp?.type === 'project'
      ? projects.find((p) => p.id === openApp.id)
      : null

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-surface-950">
      <MenuBar />

      <div className="flex-1 relative overflow-hidden">
        <img
          src="/assets/desktop_background.png"
          alt=""
          className="absolute inset-0 w-full h-full blur-sm"
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-end pb-20 lg:pb-20 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center space-y-2 opacity-[0.06]">
            <div className="text-4xl lg:text-7xl font-light tracking-tight text-white">
              Charles Moore
            </div>
            <div className="text-base lg:text-xl font-light text-white tracking-wide">
              Software Engineer
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex items-start justify-center pt-6 lg:pt-12 px-4 lg:px-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8">
            {projects.map((project, i) => (
              <AppIcon
                key={project.id}
                name={project.name}
                thumbnail={project.thumbnail}
                onClick={() => setOpenApp({ type: 'project', id: project.id })}
                index={i}
              />
            ))}

            <motion.button
              className="flex flex-col items-center gap-1.5 group cursor-pointer w-[72px] lg:w-[90px]"
              onClick={() => setOpenApp({ type: 'skills' })}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.6,
                    delay: projects.length * 0.05,
                  },
                },
              }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', bounce: 0.4, duration: 0.3 }}
            >
              <div className="w-14 h-14 lg:w-[72px] lg:h-[72px] rounded-[14px] lg:rounded-[16px] overflow-hidden shadow-lg shadow-black/30 border border-white/10 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <CpuFill size={24} className="text-white lg:hidden" />
                <CpuFill size={28} className="text-white hidden lg:block" />
              </div>
              <span className="text-[10px] lg:text-[11px] text-surface-200 font-medium text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Skills
              </span>
            </motion.button>

            <motion.button
              className="flex flex-col items-center gap-1.5 group cursor-pointer w-[72px] lg:w-[90px]"
              onClick={() => setOpenApp({ type: 'contact' })}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.6,
                    delay: (projects.length + 1) * 0.05,
                  },
                },
              }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', bounce: 0.4, duration: 0.3 }}
            >
              <div className="w-14 h-14 lg:w-[72px] lg:h-[72px] rounded-[14px] lg:rounded-[16px] overflow-hidden shadow-lg shadow-black/30 border border-white/10 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <EnvelopeAtFill size={24} className="text-white lg:hidden" />
                <EnvelopeAtFill
                  size={28}
                  className="text-white hidden lg:block"
                />
              </div>
              <span className="text-[10px] lg:text-[11px] text-surface-200 font-medium text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Contact
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <Dock />

      <AnimatePresence>
        {openApp?.type === 'project' && openProject && (
          <AppWindow
            key={openProject.id}
            onClose={handleClose}
            title={openProject.name}
          >
            <ProjectWindow project={openProject} />
          </AppWindow>
        )}

        {openApp?.type === 'skills' && (
          <AppWindow
            key="skills"
            onClose={handleClose}
            title="Skills & Technologies"
          >
            <SkillsWindow />
          </AppWindow>
        )}

        {openApp?.type === 'contact' && (
          <AppWindow key="contact" onClose={handleClose} title="Contact">
            <ContactWindow />
          </AppWindow>
        )}
      </AnimatePresence>
    </div>
  )
}
