export type NavigationLink = {
  label: string
  href: string
}

export type ContactLink = {
  name: 'GitHub' | 'LinkedIn' | 'Email'
  url: string
  description: string
}

export type SkillCategory = {
  label: string
  summary: string
  skills: string[]
}

export type ProfileStat = {
  value: string
  label: string
  detail: string
}

export const conversationEmail = 'charles@cmooredev.com'
export const conversationUrl = `mailto:${conversationEmail}`

export const navigationLinks: NavigationLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const contactLinks: ContactLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/charlesmooredev',
    description: 'Code, experiments, and shipped implementation work.',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/charles-m-159476297',
    description: 'Professional profile and direct recruiting channel.',
  },
  {
    name: 'Email',
    url: conversationUrl,
    description: conversationEmail,
  },
]

export const profileStats: ProfileStat[] = [
  {
    value: '9+',
    label: 'years',
    detail: 'shipping production web apps across startups, games, AI, and commerce',
  },
  {
    value: '3',
    label: 'platforms',
    detail: 'shipped as founder and lead engineer across the Anymals ecosystem',
  },
  {
    value: '8+',
    label: 'year run',
    detail: 'supporting Laravel backend APIs, browser games, and player communities',
  },
]

export const focusAreas = [
  'React and TypeScript product interfaces',
  'Node.js tooling, packages, and product workflows',
  'Laravel backend API systems with Nova operational tooling',
  'AI, Web3, realtime, and live-game product flows',
]

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend Systems',
    summary: 'Interfaces, state, routing, and component architecture built for real product use.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Vue.js',
      'TailwindCSS',
      'Redux Toolkit',
      'RTK Query',
      'PWA',
    ],
  },
  {
    label: 'Node.js And Packages',
    summary: 'JavaScript runtime fluency for tooling, reusable packages, and app delivery.',
    skills: [
      'Node.js',
      'NPM packages',
      'Vite',
      'JavaScript',
      'SSE',
      'WebSockets',
      'Streaming data',
      'Developer tooling',
    ],
  },
  {
    label: 'Laravel Backend APIs',
    summary: 'Backend API systems, Nova tooling, and live content operations.',
    skills: [
      'Laravel',
      'Laravel APIs',
      'Laravel Nova',
      'Backend API systems',
      'API integrations',
      'Content operations',
      'Live game operations',
      'Backend feedback loops',
    ],
  },
  {
    label: 'Product And Design',
    summary: 'Design translation, interaction quality, and responsive product polish.',
    skills: [
      'Figma',
      'Adobe XD',
      'Pixel-perfect implementation',
      'Responsive design',
      'Motion systems',
      'Accessibility',
    ],
  },
  {
    label: 'AI And Data Flows',
    summary: 'Modern product experiences with streaming, recognition, and LLM workflows.',
    skills: [
      'Streaming AI',
      'SSE',
      'WebSockets',
      'Prompt engineering',
      'AI image recognition',
      'LLM integration',
    ],
  },
  {
    label: 'Platform Range',
    summary: 'Deployment and platform context for shipping full-stack product surfaces.',
    skills: [
      'Firebase',
      'Firestore',
      'AWS Amplify',
      'Docker',
      'Capacitor',
      'Coinbase CDP SDK',
      'Smart Wallets',
      'USDC transactions',
      'Paymaster integration',
    ],
  },
]

export function getProjectSkills(
  project: App.Data.ProjectData,
  limit = 4,
): string[] {
  return project.skills.slice(0, limit).map((skill) => skill.name)
}
