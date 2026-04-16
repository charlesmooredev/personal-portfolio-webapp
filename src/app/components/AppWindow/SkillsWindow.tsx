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
    <div className="px-5 pb-8 pt-5 lg:px-8 lg:pb-10 lg:pt-7">
      <div className="grid gap-8 border-b border-white/10 pb-7 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.36em] text-white/48">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white lg:text-4xl">
            Frontend systems with product-level polish.
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/72 lg:text-base">
            Entrepreneurial full-stack engineer with 9+ years building
            production software from scratch, with the strongest depth in React,
            TypeScript, interface design, and shipping disciplined frontend
            architecture.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/46">
              Years
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              9+
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/46">
              Core
            </p>
            <p className="mt-2 text-base text-white/74">
              React, TypeScript, design systems
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/46">
              Shipping style
            </p>
            <p className="mt-2 text-base text-white/74">
              Product-minded, fast, detail-heavy
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7 grid gap-x-8 gap-y-6 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <section key={category.label} className="border-t border-white/10 pt-5">
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/48">
              {category.label}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[12px] font-medium tracking-[0.02em] text-white/82"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
