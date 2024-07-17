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
    name: 'Call of Development',
    thumbnail: '/assets/thumbnail/call_of_development.jpg',
    link: ProjectRoutes.CallOfDevelopment,
    description:
      'Call of Development presents a concept for a Call of Duty menu, seamlessly integrating both new and old school elements into the design.',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Spectrum Web Components' },
      { name: 'TailwindCSS' },
    ],
  },
  {
    name: 'Adobe Firefly Concept',
    thumbnail: '/assets/thumbnail/adobe_firefly.jpg',
    link: ProjectRoutes.AdobeFireflyConcept,
    description:
      "This project is an enhanced concept version of Adobe Firefly utilizing React, TailwindCSS, and Adobe's Spectrum Web Components.",
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Spectrum Web Components' },
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
      ' Heartland Tattoo Company is a tattoo shop located in Tennessee, renowned for its exceptional artistry and welcoming atmosphere.',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Redux' },
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
