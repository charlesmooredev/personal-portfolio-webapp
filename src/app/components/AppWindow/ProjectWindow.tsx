import type { ReactNode } from 'react'
import ProjectData = App.Data.ProjectData

interface Props {
  project: ProjectData
}

function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="border-t border-[rgb(var(--crt-line))] pt-4">
      <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
        {label}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  )
}

export function ProjectWindow({ project }: Props) {
  return (
    <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[minmax(0,1.35fr)_20rem] lg:p-6">
      <section className="min-w-0">
        <div className="grid gap-5 border-b border-[rgb(var(--crt-line))] pb-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
              Project Dossier
            </p>
            <h1 className="mt-3 text-3xl font-black uppercase leading-none text-[rgb(var(--crt-text))] sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[rgb(var(--crt-dim))] sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="relative min-h-48 overflow-hidden border border-[rgb(var(--crt-line))] bg-black/40">
            <img
              src={project.thumbnail}
              alt={project.name}
              className="h-full min-h-48 w-full object-cover opacity-75 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,17,0.05),rgba(3,12,10,0.72))]" />
            <div className="absolute bottom-3 left-3 border border-[rgb(var(--crt-line))] bg-black/70 px-2 py-1 text-[10px] uppercase text-[rgb(var(--crt-green))]">
              Visual Archive
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5">
          <Field label="Role">
            <p className="text-lg uppercase text-[rgb(var(--crt-text))]">
              {project.role}
            </p>
          </Field>

          <Field label="Responsibilities">
            <p className="max-w-4xl text-sm leading-7 text-[rgb(var(--crt-dim))] sm:text-base">
              {project.responsibilities}
            </p>
          </Field>

          <Field label="Stack">
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="border border-[rgb(var(--crt-line))] bg-black/25 px-2.5 py-1.5 text-[11px] uppercase text-[rgb(var(--crt-green))]"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Field>
        </div>
      </section>

      <aside className="grid content-start gap-4 border-t border-[rgb(var(--crt-line))] pt-5 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
        <div className="grid gap-3 text-[12px] uppercase">
          <div className="flex justify-between gap-4 border-b border-[rgb(var(--crt-line))] pb-3">
            <span className="text-[rgb(var(--crt-muted))]">Access</span>
            <span
              className={
                project.projectUrl
                  ? 'text-[rgb(var(--crt-green))]'
                  : 'text-[#ffd47a]'
              }
            >
              {project.projectUrl ? 'Public Link' : 'Private Record'}
            </span>
          </div>
          <div className="flex justify-between gap-4 border-b border-[rgb(var(--crt-line))] pb-3">
            <span className="text-[rgb(var(--crt-muted))]">Primary</span>
            <span className="text-[rgb(var(--crt-text))]">
              {project.skills[0]?.name ?? 'Frontend'}
            </span>
          </div>
          <div className="flex justify-between gap-4 border-b border-[rgb(var(--crt-line))] pb-3">
            <span className="text-[rgb(var(--crt-muted))]">Signal</span>
            <span className="text-[rgb(var(--crt-text))]">Product UI</span>
          </div>
        </div>

        {project.projectUrl ? (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-between border border-[rgb(var(--crt-cyan))] bg-[rgba(70,246,255,0.07)] px-4 text-[12px] uppercase text-[rgb(var(--crt-cyan))] transition-colors hover:bg-[rgba(70,246,255,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--crt-cyan))]"
          >
            <span>Open Website</span>
            <span>OUT</span>
          </a>
        ) : (
          <div className="border border-[rgb(var(--crt-line))] bg-black/25 px-4 py-3 text-sm leading-6 text-[rgb(var(--crt-dim))]">
            Private project or legacy work. Details available through the
            contact channel.
          </div>
        )}

        <div className="border border-[rgb(var(--crt-line))] bg-black/25 p-4">
          <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
            Review Guidance
          </p>
          <p className="mt-3 text-sm leading-6 text-[rgb(var(--crt-dim))]">
            Read for execution range, product judgment, interaction detail, and
            production frontend ownership.
          </p>
        </div>
      </aside>
    </div>
  )
}
