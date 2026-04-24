import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { projects } from '../../helpers/Projects'
import { AppWindow } from '../AppWindow'
import { ContactWindow } from '../AppWindow/ContactWindow'
import { ProjectWindow } from '../AppWindow/ProjectWindow'
import { SkillsWindow } from '../AppWindow/SkillsWindow'

type OpenApp =
  | { type: 'project'; id: string }
  | { type: 'contact' }
  | { type: 'skills' }
  | null

type OpenTarget = Exclude<OpenApp, null>

const systemLinks = [
  { label: 'Github', href: 'https://github.com/charlesmooredev' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/charles-m-159476297',
  },
  { label: 'Email', href: 'mailto:charles@cmooredev.com' },
]

const projectStatus = ['Active', 'Archived', 'Public', 'Restricted']

function formatRecordId(index: number) {
  return `REC-${String(index + 1).padStart(3, '0')}`
}

function getProjectStatus(project: App.Data.ProjectData, index: number) {
  if (!project.projectUrl) return 'Restricted'
  return projectStatus[index % (projectStatus.length - 1)]
}

function getProjectTags(project: App.Data.ProjectData) {
  return project.skills.slice(0, 3).map((skill) => skill.name)
}

function TerminalHeader() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(interval)
  }, [])

  const timestamp = time
    .toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace(',', '')

  return (
    <motion.header
      className="relative z-10 border-b border-[rgb(var(--crt-line))] px-4 py-3 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="grid gap-2 text-[11px] uppercase text-[rgb(var(--crt-muted))] sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
          <span className="phosphor text-[rgb(var(--crt-green))]">
            Silo Records Console
          </span>
          <span>Operator / Charles Moore</span>
          <span className="hidden sm:inline">Access / Portfolio Database</span>
        </div>
        <div className="flex items-center gap-3 sm:justify-end">
          <span>{timestamp}</span>
          <span className="h-2 w-2 bg-[rgb(var(--crt-green))] shadow-[0_0_14px_rgba(83,255,190,0.72)]" />
        </div>
      </div>
    </motion.header>
  )
}

function TerminalAction({
  children,
  onClick,
  active,
}: {
  children: string
  onClick: () => void
  active?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex min-h-11 items-center justify-between border px-3 py-2 text-left text-[12px] uppercase text-[rgb(var(--crt-muted))] transition-colors hover:border-[rgb(var(--crt-cyan))] hover:text-[rgb(var(--crt-cyan))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--crt-cyan))] ${
        active
          ? 'border-[rgb(var(--crt-cyan))] bg-[rgba(70,246,255,0.08)] text-[rgb(var(--crt-cyan))]'
          : 'border-[rgb(var(--crt-line))] bg-black/20'
      }`}
    >
      <span>{children}</span>
      <span className="text-[rgb(var(--crt-green))] opacity-70 transition-opacity group-hover:opacity-100">
        EXEC
      </span>
    </button>
  )
}

function ProjectRecordRow({
  project,
  index,
  active,
  onOpen,
}: {
  project: App.Data.ProjectData
  index: number
  active: boolean
  onOpen: () => void
}) {
  const status = getProjectStatus(project, index)
  const tags = getProjectTags(project)

  return (
    <motion.button
      onClick={onOpen}
      className={`record-row group grid min-h-[5.5rem] w-full grid-cols-[4.5rem_1fr] gap-3 border-b border-[rgb(var(--crt-line))] px-3 py-4 text-left text-[rgb(var(--crt-text))] transition-colors hover:bg-[rgba(70,246,255,0.06)] focus-visible:bg-[rgba(70,246,255,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[rgb(var(--crt-cyan))] sm:grid-cols-[5.5rem_minmax(0,1.2fr)_minmax(9rem,0.7fr)_7rem] sm:items-center lg:px-4 ${
        active ? 'bg-[rgba(83,255,190,0.08)]' : ''
      }`}
      aria-label={`Open ${project.name} record`}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.32,
            ease: 'easeOut',
            delay: index * 0.035,
          },
        },
      }}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.992 }}
    >
      <span className="font-mono text-[12px] text-[rgb(var(--crt-green))]">
        {formatRecordId(index)}
      </span>

      <span className="min-w-0">
        <span className="block text-base font-semibold uppercase leading-5 text-[rgb(var(--crt-text))] sm:text-lg">
          {project.name}
        </span>
        <span className="mt-1 block truncate text-[12px] uppercase text-[rgb(var(--crt-muted))]">
          {project.role}
        </span>
      </span>

      <span className="col-span-2 flex flex-wrap gap-1.5 sm:col-span-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-[rgb(var(--crt-line))] px-2 py-1 text-[10px] uppercase text-[rgb(var(--crt-muted))] group-hover:border-[rgba(70,246,255,0.42)] group-hover:text-[rgb(var(--crt-cyan))]"
          >
            {tag}
          </span>
        ))}
      </span>

      <span className="col-span-2 flex items-center justify-between text-[11px] uppercase text-[rgb(var(--crt-muted))] sm:col-span-1 sm:block sm:text-right">
        <span className="sm:hidden">Status</span>
        <span
          className={
            status === 'Restricted'
              ? 'text-[#ffd47a]'
              : 'text-[rgb(var(--crt-green))]'
          }
        >
          {status}
        </span>
      </span>
    </motion.button>
  )
}

function ConsoleSidebar({
  openApp,
  onOpenApp,
}: {
  openApp: OpenApp
  onOpenApp: (target: OpenTarget) => void
}) {
  return (
    <aside className="terminal-panel flex flex-col gap-5 p-4 lg:min-h-0">
      <section className="border-b border-[rgb(var(--crt-line))] pb-5">
        <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
          Active Operator
        </p>
        <h1 className="mt-3 text-[clamp(2.2rem,7vw,4.8rem)] font-black uppercase leading-[0.9] text-[rgb(var(--crt-text))] lg:text-[clamp(2.8rem,4.7vw,5rem)]">
          Charles
          <br />
          Moore
        </h1>
        <p className="mt-4 text-sm leading-6 text-[rgb(var(--crt-dim))]">
          Frontend engineer building polished product systems with React,
          TypeScript, motion, and production discipline.
        </p>
      </section>

      <nav className="grid gap-2" aria-label="Records console navigation">
        <TerminalAction
          onClick={() => onOpenApp({ type: 'skills' })}
          active={openApp?.type === 'skills'}
        >
          Skills Record
        </TerminalAction>
        <TerminalAction
          onClick={() => onOpenApp({ type: 'contact' })}
          active={openApp?.type === 'contact'}
        >
          Contact Channel
        </TerminalAction>
      </nav>

      <section className="mt-auto border-t border-[rgb(var(--crt-line))] pt-5">
        <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
          External Lines
        </p>
        <div className="mt-3 grid gap-2">
          {systemLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-10 items-center justify-between border border-[rgb(var(--crt-line))] px-3 text-[12px] uppercase text-[rgb(var(--crt-muted))] transition-colors hover:border-[rgb(var(--crt-green))] hover:text-[rgb(var(--crt-green))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--crt-green))]"
            >
              <span>{link.label}</span>
              <span>OUT</span>
            </a>
          ))}
        </div>
      </section>
    </aside>
  )
}

function ConsoleInspector() {
  return (
    <aside className="terminal-panel hidden min-h-0 flex-col p-4 xl:flex">
      <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
        Read Priority
      </p>
      <div className="mt-4 grid gap-4">
        <div className="border-t border-[rgb(var(--crt-line))] pt-4">
          <p className="text-[12px] uppercase text-[rgb(var(--crt-green))]">
            Anymals
          </p>
          <p className="mt-2 text-sm leading-6 text-[rgb(var(--crt-dim))]">
            Strongest record for product ownership, complex frontend systems,
            AI flows, Web3 auth, and PWA delivery.
          </p>
        </div>
        <div className="border-t border-[rgb(var(--crt-line))] pt-4">
          <p className="text-[12px] uppercase text-[rgb(var(--crt-green))]">
            Ozone
          </p>
          <p className="mt-2 text-sm leading-6 text-[rgb(var(--crt-dim))]">
            Best record for production UI implementation, design translation,
            and early-stage engineering range.
          </p>
        </div>
      </div>

      <div className="mt-auto border-t border-[rgb(var(--crt-line))] pt-5">
        <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
          Terminal State
        </p>
        <dl className="mt-3 grid gap-3 text-[12px] uppercase">
          <div className="flex justify-between gap-4">
            <dt className="text-[rgb(var(--crt-muted))]">Records</dt>
            <dd className="text-[rgb(var(--crt-text))]">{projects.length}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[rgb(var(--crt-muted))]">Core</dt>
            <dd className="text-[rgb(var(--crt-text))]">React / TS</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[rgb(var(--crt-muted))]">Mode</dt>
            <dd className="text-[rgb(var(--crt-green))]">Readable CRT</dd>
          </div>
        </dl>
      </div>
    </aside>
  )
}

export function Desktop() {
  const [openApp, setOpenApp] = useState<OpenApp>(null)
  const reduceMotion = useReducedMotion()

  const handleClose = useCallback(() => setOpenApp(null), [])

  const openProject = useMemo(
    () =>
      openApp?.type === 'project'
        ? projects.find((project) => project.id === openApp.id) ?? null
        : null,
    [openApp],
  )

  return (
    <div className="crt-shell relative h-[100svh] overflow-hidden bg-[rgb(var(--crt-bg))] font-mono text-[rgb(var(--crt-text))]">
      <motion.div
        className="relative z-10 flex h-full min-h-0 flex-col"
        initial={reduceMotion ? undefined : { opacity: 0, filter: 'blur(6px)' }}
        animate={reduceMotion ? undefined : { opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <TerminalHeader />

        <main className="window-scroll grid min-h-0 flex-1 gap-3 overflow-y-auto p-3 sm:p-4 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.8fr)] lg:overflow-hidden xl:grid-cols-[minmax(17rem,0.7fr)_minmax(0,1.65fr)_minmax(15rem,0.55fr)]">
          <ConsoleSidebar openApp={openApp} onOpenApp={setOpenApp} />

          <section className="terminal-panel flex min-h-[32rem] flex-col overflow-hidden">
            <div className="grid gap-3 border-b border-[rgb(var(--crt-line))] p-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
                  Dossier Database / Project Records
                </p>
                <h2 className="mt-2 text-2xl font-bold uppercase leading-tight text-[rgb(var(--crt-text))] sm:text-4xl">
                  Select a record
                  <span className="cursor-blink ml-2 inline-block h-[1em] w-2 translate-y-1 bg-[rgb(var(--crt-green))]" />
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] uppercase text-[rgb(var(--crt-muted))]">
                <span className="border border-[rgb(var(--crt-line))] px-2 py-1">
                  UI
                </span>
                <span className="border border-[rgb(var(--crt-line))] px-2 py-1">
                  Motion
                </span>
                <span className="border border-[rgb(var(--crt-line))] px-2 py-1">
                  Product
                </span>
              </div>
            </div>

            <div className="hidden grid-cols-[5.5rem_minmax(0,1.2fr)_minmax(9rem,0.7fr)_7rem] border-b border-[rgb(var(--crt-line))] px-4 py-2 text-[10px] uppercase text-[rgb(var(--crt-muted))] sm:grid">
              <span>ID</span>
              <span>Record Name / Role</span>
              <span>Stack Tags</span>
              <span className="text-right">Access</span>
            </div>

            <motion.div
              className="window-scroll min-h-0 flex-1 overflow-y-auto"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.035 },
                },
              }}
            >
              {projects.map((project, index) => (
                <ProjectRecordRow
                  key={project.id}
                  project={project}
                  index={index}
                  active={openApp?.type === 'project' && openApp.id === project.id}
                  onOpen={() => setOpenApp({ type: 'project', id: project.id })}
                />
              ))}
            </motion.div>
          </section>

          <ConsoleInspector />
        </main>
      </motion.div>

      <AnimatePresence>
        {openApp?.type === 'project' && openProject && (
          <AppWindow key={openProject.id} onClose={handleClose} title={openProject.name}>
            <ProjectWindow project={openProject} />
          </AppWindow>
        )}

        {openApp?.type === 'skills' && (
          <AppWindow key="skills" onClose={handleClose} title="Skills Record">
            <SkillsWindow />
          </AppWindow>
        )}

        {openApp?.type === 'contact' && (
          <AppWindow key="contact" onClose={handleClose} title="Contact Channel">
            <ContactWindow />
          </AppWindow>
        )}
      </AnimatePresence>
    </div>
  )
}
