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
    <div className="p-4 sm:p-5 lg:p-6">
      <div className="grid gap-5 border-b border-[rgb(var(--crt-line))] pb-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
            Capability Record
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-none text-[rgb(var(--crt-text))] sm:text-5xl">
            Frontend systems with product-level polish.
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[rgb(var(--crt-dim))] sm:text-base">
            Entrepreneurial full-stack engineer with 9+ years building
            production software from scratch, with the strongest depth in React,
            TypeScript, interface design, and disciplined frontend architecture.
          </p>
        </div>

        <dl className="grid content-start gap-3 text-[12px] uppercase">
          <div className="flex justify-between gap-4 border-b border-[rgb(var(--crt-line))] pb-3">
            <dt className="text-[rgb(var(--crt-muted))]">Years</dt>
            <dd className="text-[rgb(var(--crt-text))]">9+</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-[rgb(var(--crt-line))] pb-3">
            <dt className="text-[rgb(var(--crt-muted))]">Core</dt>
            <dd className="text-[rgb(var(--crt-text))]">React / TS</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-[rgb(var(--crt-line))] pb-3">
            <dt className="text-[rgb(var(--crt-muted))]">Style</dt>
            <dd className="text-[rgb(var(--crt-green))]">Product-Minded</dd>
          </div>
        </dl>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <section
            key={category.label}
            className="border border-[rgb(var(--crt-line))] bg-black/20 p-4"
          >
            <div className="flex items-center justify-between gap-4 border-b border-[rgb(var(--crt-line))] pb-3">
              <p className="text-[12px] uppercase text-[rgb(var(--crt-green))]">
                {category.label}
              </p>
              <span className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
                CAT-{String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[rgb(var(--crt-line))] px-2.5 py-1.5 text-[11px] uppercase text-[rgb(var(--crt-dim))]"
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
