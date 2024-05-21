import { ProjectsThumbnail } from '../ProjectsThumbnail'
import { projects } from '../../../helpers/Projects.ts'

export function ProjectsGrid() {
  return (
    <div className="w-full space-y-[25px]">
      <div className="text-[2.25rem]">Recent Work</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
        {projects.map((project, key) => (
          <ProjectsThumbnail
            time={key * 500 + 500}
            key={project.link}
            data={project}
          />
        ))}
      </div>
    </div>
  )
}
