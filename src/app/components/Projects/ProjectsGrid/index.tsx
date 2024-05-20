import { ProjectsThumbnail } from '../ProjectsThumbnail'
import { ProjectRoutes } from '../../../helpers/Routes.ts'

const projects = [
  {
    name: 'Ozone',
    thumbnail: '/assets/thumbnail/ozone.jpg',
    link: ProjectRoutes.Ozone,
  },
  {
    name: 'MyLikenessAI',
    thumbnail: '/assets/thumbnail/mylikenessai.jpg',
    link: ProjectRoutes.MyLikeness,
  },
  {
    name: 'Sorority Wars',
    thumbnail: '/assets/thumbnail/sorority.jpg',
    link: ProjectRoutes.SororityWars,
  },
  {
    name: 'Mobsters: New Beginnings',
    thumbnail: '/assets/thumbnail/mobsters.jpg',
    link: ProjectRoutes.Mobsters,
  },
]

export function ProjectsGrid() {
  return (
    <div className="w-full space-y-[25px]">
      <div className="text-[2.25rem]">Recent Work</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        {projects.map((project, key) => (
          <ProjectsThumbnail
            time={key * 1000 + 1000}
            key={project.link}
            data={project}
          />
        ))}
      </div>
    </div>
  )
}
