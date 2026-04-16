import ProjectData = App.Data.ProjectData

interface Props {
  project: ProjectData
}

export function ProjectWindow({ project }: Props) {
  return (
    <div className="px-5 pb-8 pt-5 lg:px-8 lg:pb-10 lg:pt-7">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/6 shadow-[0_24px_60px_rgba(2,6,23,0.24)]">
        <div className="relative aspect-[16/10] lg:aspect-[16/9]">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(5,8,14,0.08),rgba(5,8,14,0.28)_42%,rgba(5,8,14,0.88)_100%)] lg:block" />
          <div className="absolute inset-x-0 bottom-0 hidden p-8 lg:block">
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/56">
              Project
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white lg:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/74 lg:text-base lg:leading-7">
              {project.description}
            </p>
          </div>
        </div>

        <div className="border-t border-white/8 px-5 py-5 lg:hidden">
          <p className="text-[11px] uppercase tracking-[0.36em] text-white/48">
            Project
          </p>
          <h1 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-white">
            {project.name}
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-white/74">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="space-y-8">
          <section className="border-t border-white/10 pt-5">
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/48">
              What I Did
            </p>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/74 lg:text-base">
              {project.responsibilities}
            </p>
          </section>

          <section className="border-t border-white/10 pt-5">
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/48">
              Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {project.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[12px] font-medium tracking-[0.02em] text-white/82"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6 border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/48">
              Role
            </p>
            <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
              {project.role}
            </p>
          </div>

          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-between rounded-[18px] border border-[#7fb3ff]/30 bg-[linear-gradient(135deg,rgba(65,125,255,0.26),rgba(80,130,255,0.08))] px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-[#9bc4ff]/45 hover:bg-[linear-gradient(135deg,rgba(74,138,255,0.34),rgba(80,130,255,0.12))]"
            >
              Visit Website
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 3h7v7" />
                <path d="M13 3L6 10" />
              </svg>
            </a>
          ) : (
            <div className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-3.5 text-sm leading-6 text-white/58">
              Private project or legacy work. Details available on request.
            </div>
          )}

          <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/46">
              Read
            </p>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Focus on execution range, product judgment, and UI quality across
              each build.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
