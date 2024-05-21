import { ProjectsThumbnail } from '../ProjectsThumbnail'
import { ProjectRoutes } from '../../../helpers/Routes.ts'
import ProjectData = App.Data.ProjectData

const projects = [
  {
    name: 'Ozone',
    thumbnail: '/assets/thumbnail/ozone.jpg',
    link: ProjectRoutes.Ozone,
    description:
      'Ozone is a cutting-edge browser-based video editor that allows users to create and edit videos seamlessly within their web browser. ',
  },
  {
    name: 'MyLikenessAI',
    thumbnail: '/assets/thumbnail/mylikenessai.jpg',
    link: ProjectRoutes.MyLikeness,
    description:
      'MyLikenessAI is a revolutionary tool that enables creators and actors to monetize their digital likeness by creating and managing virtual representations of themselves.',
  },
  {
    name: 'Sorority Wars',
    thumbnail: '/assets/thumbnail/sorority.jpg',
    link: ProjectRoutes.SororityWars,
    description:
      'Sorority Wars is a thrilling game where players dive into the dazzling world of fashion, striving to become the ultimate style queen.',
  },
  {
    name: 'Mobsters: New Beginnings',
    thumbnail: '/assets/thumbnail/mobsters.jpg',
    link: ProjectRoutes.Mobsters,
    description:
      'Mobsters: New Beginnings is an immersive browser-based game where players strive to rise through the ranks to become the top mobster.',
  },
] as ProjectData[]

export function ProjectsGrid() {
  return (
    <div className="w-full space-y-[25px]">
      <div className="text-[2.25rem]">Recent Work</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
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
