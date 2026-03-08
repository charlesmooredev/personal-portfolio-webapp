const skillCategories = [
  {
    label: 'Languages & Frameworks',
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES2024)',
      'Vue.js',
      'PHP/Laravel',
      'HTML5',
      'CSS3',
      'TailwindCSS',
      'Node.js',
    ],
  },
  {
    label: 'AI & Data',
    skills: [
      'Anthropic Claude API',
      'Streaming AI (SSE/WebSockets)',
      'AI-Powered Image Recognition',
      'Prompt Engineering',
      'LLM Integration',
    ],
  },
  {
    label: 'Web3 & Blockchain',
    skills: [
      'Coinbase CDP SDK',
      'Smart Wallets',
      'USDC/On-Chain Transactions',
      'Paymaster Integration',
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: [
      'AWS Amplify',
      'Firebase/Firestore',
      'DigitalOcean',
      'Docker',
      'Laravel Sail',
      'Vite',
      'NPM Package Authoring',
    ],
  },
  {
    label: 'State & Architecture',
    skills: [
      'Redux Toolkit',
      'RTK Query',
      'Context API',
      'Multi-Domain Auth Flows',
      'PWA (Capacitor)',
      'Firestore Security Rules',
    ],
  },
  {
    label: 'Design & Tooling',
    skills: [
      'Figma',
      'Adobe XD',
      'Pixel-Perfect Implementation',
      'Responsive/Mobile-First Design',
      'VS Code + Claude Code',
    ],
  },
]

export function SkillsWindow() {
  return (
    <div className="p-6 lg:p-8 space-y-5">
      <p className="text-lg text-surface-300 leading-relaxed">
        Entrepreneurial full-stack engineer with 9+ years of experience building
        production-grade applications from scratch. Expert in React, TypeScript,
        and AI-integrated platforms.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className="space-y-3 p-5 rounded-xl bg-surface-850/50 border border-surface-800/50"
          >
            <div className="text-[11px] uppercase tracking-widest font-semibold text-surface-500">
              {category.label}
            </div>
            <div className="h-0.5 w-10 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-3 py-1 bg-surface-800/80 text-xs font-medium tracking-wide text-surface-300 border border-surface-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
