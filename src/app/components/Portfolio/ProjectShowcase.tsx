import { motion } from 'motion/react'
import { ProjectCard } from './ProjectCard'

interface Props {
  projects: App.Data.ProjectData[]
  onSelectProject: (projectId: string) => void
  reduceMotion: boolean | null
}

export function ProjectShowcase({
  projects,
  onSelectProject,
  reduceMotion,
}: Props) {
  return (
    <section id="work" className="border-b border-portfolio-border bg-portfolio-bg">
      <div className="mx-auto w-[calc(100vw-2rem)] max-w-7xl py-16 sm:w-full sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-portfolio-accent">
              Selected work
            </p>
            <h2 className="portfolio-text-balance mt-4 text-4xl font-semibold leading-tight text-portfolio-text sm:text-5xl">
              Projects with full-stack scope, product judgment, and visible craft.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-portfolio-text-secondary lg:justify-self-end">
            Each entry is written to make the work scannable first and worth
            reading second: role, product context, stack, backend range, and what
            I owned.
          </p>
        </div>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.055 },
            },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => onSelectProject(project.id)}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
