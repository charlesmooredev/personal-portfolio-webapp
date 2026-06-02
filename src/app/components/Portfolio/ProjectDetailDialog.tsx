import * as Dialog from '@radix-ui/react-dialog'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, X } from 'react-bootstrap-icons'

interface Props {
  project: App.Data.ProjectData | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDetailDialog({ project, open, onOpenChange }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {project ? (
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <motion.div
              className="fixed inset-0 z-50 bg-black/72 backdrop-blur-sm"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />
          </Dialog.Overlay>

          <Dialog.Content asChild>
            <motion.div
              className="portfolio-scrollbar fixed left-1/2 top-1/2 z-50 max-h-[calc(100svh-2rem)] w-[calc(100vw-1.5rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-portfolio-card border border-portfolio-border-strong bg-portfolio-surface shadow-portfolio-soft focus:outline-none sm:w-[calc(100vw-3rem)]"
              initial={
                reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_22rem]">
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase text-portfolio-accent">
                        Project details
                      </p>
                      <Dialog.Title className="mt-3 text-3xl font-semibold leading-tight text-portfolio-text sm:text-5xl">
                        {project.name}
                      </Dialog.Title>
                    </div>

                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-portfolio-control border border-portfolio-border text-portfolio-text-muted transition-colors hover:border-portfolio-border-strong hover:bg-portfolio-surface-soft hover:text-portfolio-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent"
                        aria-label={`Close ${project.name} project details`}
                      >
                        <X aria-hidden="true" size={20} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <Dialog.Description className="mt-5 max-w-3xl text-base leading-8 text-portfolio-text-secondary">
                    {project.description}
                  </Dialog.Description>

                  <div className="mt-8 grid gap-6 border-t border-portfolio-border pt-7">
                    <section>
                      <p className="font-mono text-[11px] uppercase text-portfolio-text-muted">
                        Role
                      </p>
                      <p className="mt-3 text-xl font-semibold leading-7 text-portfolio-text">
                        {project.role}
                      </p>
                    </section>

                    <section>
                      <p className="font-mono text-[11px] uppercase text-portfolio-text-muted">
                        Responsibilities
                      </p>
                      <p className="mt-3 text-base leading-8 text-portfolio-text-secondary">
                        {project.responsibilities}
                      </p>
                    </section>

                    <section>
                      <p className="font-mono text-[11px] uppercase text-portfolio-text-muted">
                        Stack
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="rounded-portfolio-control border border-portfolio-border bg-portfolio-raised px-3 py-1.5 text-sm text-portfolio-text-secondary"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                <aside className="border-t border-portfolio-border bg-portfolio-raised p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-6">
                  <div className="overflow-hidden rounded-portfolio-card border border-portfolio-border bg-portfolio-bg">
                    <img
                      src={project.thumbnail}
                      alt={`${project.name} project visual`}
                      className="aspect-[4/3] w-full object-cover grayscale"
                    />
                  </div>

                  <dl className="mt-6 grid gap-0 overflow-hidden rounded-portfolio-card border border-portfolio-border">
                    <div className="grid grid-cols-[0.72fr_1fr] border-b border-portfolio-border bg-portfolio-surface">
                      <dt className="px-3 py-3 font-mono text-[11px] uppercase text-portfolio-text-muted">
                        Access
                      </dt>
                      <dd className="px-3 py-3 text-sm text-portfolio-text-secondary">
                        {project.projectUrl ? 'Public link' : 'Private record'}
                      </dd>
                    </div>
                    <div className="grid grid-cols-[0.72fr_1fr] bg-portfolio-surface">
                      <dt className="px-3 py-3 font-mono text-[11px] uppercase text-portfolio-text-muted">
                        Primary
                      </dt>
                      <dd className="px-3 py-3 text-sm text-portfolio-text-secondary">
                        {project.skills[0]?.name ?? 'Product engineering'}
                      </dd>
                    </div>
                  </dl>

                  {project.projectUrl ? (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-portfolio-control border border-portfolio-accent bg-portfolio-accent/10 px-4 text-sm font-semibold text-portfolio-accent-strong transition-colors hover:bg-portfolio-accent/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent"
                    >
                      <ArrowUpRight aria-hidden="true" size={16} />
                      Open live project
                    </a>
                  ) : (
                    <p className="mt-5 rounded-portfolio-card border border-portfolio-border bg-portfolio-surface p-4 text-sm leading-6 text-portfolio-text-muted">
                      This project is private or legacy work. Details are
                      available through the contact channel.
                    </p>
                  )}
                </aside>
              </div>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      ) : null}
    </Dialog.Root>
  )
}
