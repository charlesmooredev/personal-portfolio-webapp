import { ProjectRoutes } from './Routes.ts'
import ProjectData = App.Data.ProjectData

export const projects = [
  {
    name: 'Ozone',
    thumbnail: '/assets/thumbnail/ozone.jpg',
    link: ProjectRoutes.Ozone,
    description:
      'Ozone is a cutting-edge browser-based video editor that allows users to create and edit videos seamlessly within their web browser. ',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Redux' },
      { name: 'Websockets' },
      { name: 'TailwindCSS' },
    ],
  },
  {
    name: 'MyLikenessAI',
    thumbnail: '/assets/thumbnail/mylikenessai.jpg',
    link: ProjectRoutes.MyLikeness,
    description:
      'MyLikenessAI is a revolutionary tool that enables creators and actors to monetize their digital likeness by creating and managing virtual representations of themselves.',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Redux' },
      { name: 'RTK Query' },
      { name: 'Figma' },
    ],
  },
  {
    name: 'Heartland Tattoo Company',
    thumbnail: '/assets/thumbnail/heartland_tattoo_company.jpg',
    link: ProjectRoutes.HeartlandTattooCo,
    description:
      'Ozone is a cutting-edge browser-based video editor that allows users to create and edit videos seamlessly within their web browser. ',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Redux' },
      { name: 'Websockets' },
      { name: 'TailwindCSS' },
    ],
  },
  {
    name: 'Sorority Wars',
    thumbnail: '/assets/thumbnail/sorority.jpg',
    link: ProjectRoutes.SororityWars,
    description:
      'Sorority Wars is a thrilling game where players dive into the dazzling world of fashion, striving to become the ultimate style queen.',
    skills: [
      { name: 'Vue' },
      { name: 'VueX' },
      { name: 'JavaScript' },
      { name: 'Websockets' },
      { name: 'TailwindCSS' },
    ],
  },
  {
    name: 'Mobsters: New Beginnings',
    thumbnail: '/assets/thumbnail/mobsters.jpg',
    link: ProjectRoutes.Mobsters,
    description:
      'Mobsters: New Beginnings is an immersive browser-based game where players strive to rise through the ranks to become the top mobster.',
    skills: [
      { name: 'Vue' },
      { name: 'VueX' },
      { name: 'JavaScript' },
      { name: 'Websockets' },
      { name: 'TailwindCSS' },
    ],
  },
] as ProjectData[]
