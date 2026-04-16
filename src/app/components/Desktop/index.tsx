import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useState, type ReactNode } from 'react'
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

interface DeviceScreenProps {
  mobile: boolean
  onOpenApp: (app: Exclude<OpenApp, null>) => void
  onClose: () => void
  openApp: OpenApp
  openProject: App.Data.ProjectData | null
}

function UtilityAppButton({
  name,
  icon,
  onClick,
  index,
  gradient,
}: {
  name: string
  icon: ReactNode
  onClick: () => void
  index: number
  gradient: string
}) {
  return (
    <motion.button
      className="flex w-[76px] flex-col items-center gap-2 text-center lg:w-[92px]"
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
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-[20px] border border-white/20 bg-gradient-to-br shadow-[0_18px_45px_rgba(3,8,20,0.45)] lg:h-[78px] lg:w-[78px] ${gradient}`}
      >
        {icon}
      </div>
      <span className="max-w-[78px] text-[11px] font-medium leading-tight text-white/92 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] lg:max-w-[92px]">
        {name}
      </span>
    </motion.button>
  )
}

function DeviceScreen({
  mobile,
  onOpenApp,
  onClose,
  openApp,
  openProject,
}: DeviceScreenProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#08101d] text-white">
      <img
        src="/assets/desktop_background.png"
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,21,0.24)_0%,rgba(7,12,21,0.38)_44%,rgba(5,8,14,0.76)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(130,166,255,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_32%)]" />

      <div className="relative z-10 flex h-full flex-col">
        <MenuBar />

        {mobile ? (
          <div className="relative flex flex-1 overflow-hidden">
            <div className="h-full w-full overflow-y-auto px-4 pb-[8.75rem] pt-3 window-scroll">
              <motion.div
                className="pb-5 text-center"
                initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <p className="text-[12px] uppercase tracking-[0.35em] text-white/58">
                  Portfolio
                </p>
                <h1 className="mt-2 text-[30px] font-semibold tracking-[-0.04em] text-white">
                  Charles Moore
                </h1>
                <p className="mx-auto mt-2 max-w-[18rem] text-sm leading-6 text-white/72">
                  Frontend engineer shipping polished product surfaces with
                  motion, clarity, and production discipline.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: reduceMotion ? 0 : 0.04 },
                  },
                }}
              >
                <div className="grid grid-cols-3 justify-items-center gap-x-3 gap-y-5">
                  {projects.map((project, index) => (
                    <AppIcon
                      key={project.id}
                      name={project.name}
                      thumbnail={project.thumbnail}
                      onClick={() =>
                        onOpenApp({ type: 'project', id: project.id })
                      }
                      index={index}
                    />
                  ))}

                  <UtilityAppButton
                    name="Skills"
                    icon={<CpuFill size={30} className="text-white" />}
                    onClick={() => onOpenApp({ type: 'skills' })}
                    index={projects.length}
                    gradient="from-[#37c791] via-[#18a96a] to-[#0b7e4c]"
                  />

                  <UtilityAppButton
                    name="Contact"
                    icon={<EnvelopeAtFill size={28} className="text-white" />}
                    onClick={() => onOpenApp({ type: 'contact' })}
                    index={projects.length + 1}
                    gradient="from-[#6ca8ff] via-[#3478f6] to-[#134ad9]"
                  />
                </div>
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-[linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.72)_58%,rgba(5,8,14,0.96)_100%)]" />

            <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2">
              <Dock variant="mobile" />
            </div>
          </div>
        ) : (
          <div className="flex flex-1 gap-6 px-8 pb-5 pt-6">
            <motion.div
              className="flex min-w-0 flex-[1.15] flex-col justify-between"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.04 },
                },
              }}
            >
              <div className="space-y-3">
                <p className="text-[12px] uppercase tracking-[0.38em] text-white/54">
                  Portfolio OS
                </p>
                <div className="grid grid-cols-5 gap-x-6 gap-y-7">
                  {projects.map((project, index) => (
                    <AppIcon
                      key={project.id}
                      name={project.name}
                      thumbnail={project.thumbnail}
                      onClick={() =>
                        onOpenApp({ type: 'project', id: project.id })
                      }
                      index={index}
                    />
                  ))}

                  <UtilityAppButton
                    name="Skills"
                    icon={<CpuFill size={30} className="text-white" />}
                    onClick={() => onOpenApp({ type: 'skills' })}
                    index={projects.length}
                    gradient="from-[#37c791] via-[#18a96a] to-[#0b7e4c]"
                  />

                  <UtilityAppButton
                    name="Contact"
                    icon={<EnvelopeAtFill size={28} className="text-white" />}
                    onClick={() => onOpenApp({ type: 'contact' })}
                    index={projects.length + 1}
                    gradient="from-[#6ca8ff] via-[#3478f6] to-[#134ad9]"
                  />
                </div>
              </div>

              <Dock variant="desktop" />
            </motion.div>

            <motion.aside
              className="relative flex w-[29%] min-w-[280px] flex-col justify-between py-3"
              initial={reduceMotion ? undefined : { opacity: 0, x: 28 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div>
                <p className="text-[12px] uppercase tracking-[0.38em] text-white/54">
                  Charles Moore
                </p>
                <h1 className="mt-3 text-[clamp(2.8rem,4vw,4.6rem)] font-semibold leading-none tracking-[-0.055em] text-white">
                  Designed like a desktop.
                </h1>
                <p className="mt-5 max-w-sm text-base leading-7 text-white/70">
                  Open any project to see product thinking, implementation
                  range, and the kind of frontend craft I bring to shipped
                  software.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/14 pt-6">
                <div className="flex items-center justify-between text-[13px] text-white/58">
                  <span>Focus</span>
                  <span>React, TypeScript, Motion</span>
                </div>
                <div className="flex items-center justify-between text-[13px] text-white/58">
                  <span>Role</span>
                  <span>Frontend Engineer</span>
                </div>
                <div className="rounded-[28px] border border-white/12 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/48">
                    Recommended
                  </p>
                  <p className="mt-2 text-base font-medium text-white">
                    Start with Anymals or Ozone.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/66">
                    They show the clearest mix of interface polish, complex
                    product constraints, and full-build ownership.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/12" />

      <AnimatePresence>
        {openApp?.type === 'project' && openProject && (
          <AppWindow key={openProject.id} onClose={onClose} title={openProject.name}>
            <ProjectWindow project={openProject} />
          </AppWindow>
        )}

        {openApp?.type === 'skills' && (
          <AppWindow key="skills" onClose={onClose} title="Skills & Technologies">
            <SkillsWindow />
          </AppWindow>
        )}

        {openApp?.type === 'contact' && (
          <AppWindow key="contact" onClose={onClose} title="Contact">
            <ContactWindow />
          </AppWindow>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Desktop() {
  const [openApp, setOpenApp] = useState<OpenApp>(null)
  const reduceMotion = useReducedMotion()

  const handleClose = useCallback(() => setOpenApp(null), [])

  const openProject =
    openApp?.type === 'project'
      ? projects.find((project) => project.id === openApp.id) ?? null
      : null

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[#b5bfce]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_32%),linear-gradient(180deg,#d9e0ea_0%,#b9c3d1_36%,#8e9caf_100%)]" />
      <div className="absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-white/55 blur-3xl" />
      <div className="absolute left-[10%] top-[22%] h-72 w-72 rounded-full bg-[#8ea6d9]/30 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[10%] h-80 w-80 rounded-full bg-[#4f658a]/30 blur-3xl" />

      <div className="relative flex min-h-[100svh] items-center justify-center px-3 py-4 sm:px-5 lg:px-8 lg:py-10">
        <motion.div
          className="w-full max-w-[1320px]"
          initial={reduceMotion ? undefined : { opacity: 0, y: 28, scale: 0.985 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="mx-auto flex w-full justify-center lg:hidden">
            <div className="relative h-[min(860px,94svh)] w-full max-w-[390px] rounded-[3.2rem] bg-[#0d1015] p-[10px] shadow-[0_45px_100px_rgba(15,23,42,0.42),0_10px_30px_rgba(15,23,42,0.24)] ring-1 ring-white/30">
              <div className="absolute inset-[10px] rounded-[2.6rem] border border-white/8" />
              <div className="relative h-full overflow-hidden rounded-[2.55rem] bg-[#08101d] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="pointer-events-none absolute inset-[2px] z-20 rounded-[2.42rem] border border-[#2d5dff]/60 shadow-[inset_0_0_0_1px_rgba(46,93,255,0.15)]" />
                <DeviceScreen
                  mobile
                  onOpenApp={setOpenApp}
                  onClose={handleClose}
                  openApp={openApp}
                  openProject={openProject}
                />
                <div className="pointer-events-none absolute bottom-2 left-1/2 z-20 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/70" />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center">
            <div className="w-full max-w-[1180px]">
              <div className="rounded-[32px] bg-[linear-gradient(180deg,#4b515c_0%,#1e242d_18%,#121721_100%)] p-3 shadow-[0_60px_120px_rgba(15,23,42,0.28),0_12px_24px_rgba(15,23,42,0.2)] ring-1 ring-white/32">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/14 bg-black">
                  <div className="pointer-events-none absolute left-1/2 top-0 z-30 h-5 w-28 -translate-x-1/2 rounded-b-[18px] bg-black/92 shadow-[0_8px_20px_rgba(0,0,0,0.55)]" />
                  <DeviceScreen
                    mobile={false}
                    onOpenApp={setOpenApp}
                    onClose={handleClose}
                    openApp={openApp}
                    openProject={openProject}
                  />
                </div>
              </div>
            </div>

            <div className="w-[84%] max-w-[980px]">
              <div className="mx-auto h-7 rounded-b-[34px] bg-[linear-gradient(180deg,#edf1f6_0%,#ccd4df_44%,#8d98a7_100%)] shadow-[0_22px_40px_rgba(15,23,42,0.18)] ring-1 ring-white/55" />
              <div className="mx-auto h-5 w-[30%] rounded-b-[20px] bg-[linear-gradient(180deg,#c5ced9_0%,#8f9baa_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.68)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
