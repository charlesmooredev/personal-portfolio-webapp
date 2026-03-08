import ProjectData = App.Data.ProjectData

interface Props {
  project: ProjectData
}

export function ProjectWindow({ project }: Props) {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="space-y-4">
        <p className="text-lg lg:text-xl text-surface-300 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill.name}
              className="rounded-full px-3 py-1 bg-surface-800/80 text-xs font-medium tracking-wide text-surface-300 border border-surface-700/50"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch">
        <div className="flex-1 space-y-2 p-5 rounded-xl bg-surface-850/50 border border-surface-800/50">
          <div className="text-[11px] uppercase tracking-widest font-semibold text-surface-500">
            Role
          </div>
          <div className="h-0.5 w-10 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
          <p className="text-base font-medium text-surface-200">
            {project.role}
          </p>
        </div>

        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 sm:py-0 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-sm hover:brightness-110 transition-all shrink-0"
          >
            Visit Website
            <svg
              className="w-4 h-4"
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
        )}
      </div>

      <div className="space-y-3 p-6 rounded-xl bg-surface-850/50 border border-surface-800/50">
        <div className="text-[11px] uppercase tracking-widest font-semibold text-surface-500">
          What I Did
        </div>
        <div className="h-0.5 w-10 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
        <p className="text-base text-surface-300 leading-relaxed">
          {project.responsibilities}
        </p>
      </div>
    </div>
  )
}
