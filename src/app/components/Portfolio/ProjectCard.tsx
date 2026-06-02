import { motion } from 'motion/react'
import { ArrowUpRight, PlusLg } from 'react-bootstrap-icons'
import { getProjectSkills } from '../../helpers/PortfolioContent'

interface Props {
  project: App.Data.ProjectData
  index: number
  onSelect: () => void
  reduceMotion: boolean | null
}

export function ProjectCard({ project, index, onSelect, reduceMotion }: Props) {
  const skills = getProjectSkills(project)

  return (
    <motion.article
      className="group flex min-h-full flex-col overflow-hidden rounded-portfolio-card border border-portfolio-border bg-portfolio-surface shadow-none transition-colors hover:border-portfolio-border-strong"
      variants={{
        hidden: reduceMotion ? {} : { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.34, delay: index * 0.01, ease: 'easeOut' },
        },
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-portfolio-border bg-portfolio-raised">
        <img
          src={project.thumbnail}
          alt={`${project.name} thumbnail`}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,11,0.02),rgba(8,9,11,0.54))]" />
        <p className="absolute bottom-3 left-3 rounded-portfolio-control border border-white/12 bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase text-portfolio-text-secondary backdrop-blur-sm">
          {project.projectUrl ? 'Public project' : 'Private record'}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <p className="font-mono text-[11px] uppercase text-portfolio-accent">
            {project.role}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-portfolio-text">
            {project.name}
          </h3>
          <p className="mt-4 line-clamp-4 text-sm leading-7 text-portfolio-text-secondary">
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-portfolio-control border border-portfolio-border bg-portfolio-raised px-2.5 py-1 text-xs text-portfolio-text-muted"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 pt-1 sm:flex-row">
          <button
            type="button"
            onClick={onSelect}
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-portfolio-control border border-portfolio-accent bg-portfolio-accent/10 px-4 text-sm font-semibold text-portfolio-accent-strong transition-colors hover:bg-portfolio-accent/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent"
          >
            <PlusLg aria-hidden="true" size={14} />
            View project details
          </button>

          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-portfolio-control border border-portfolio-border px-4 text-sm font-semibold text-portfolio-text transition-colors hover:border-portfolio-border-strong hover:bg-portfolio-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent"
              aria-label={`Open ${project.name} website`}
            >
              <ArrowUpRight aria-hidden="true" size={15} />
              Visit
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
