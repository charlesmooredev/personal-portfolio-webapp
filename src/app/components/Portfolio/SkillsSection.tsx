import type { SkillCategory } from '../../helpers/PortfolioContent'

interface Props {
  categories: SkillCategory[]
}

export function SkillsSection({ categories }: Props) {
  return (
    <section
      id="skills"
      className="border-b border-portfolio-border bg-portfolio-raised"
    >
      <div className="mx-auto w-[calc(100vw-2rem)] max-w-7xl py-16 sm:w-full sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase text-portfolio-accent">
            Skills and range
          </p>
          <h2 className="portfolio-text-balance mt-4 text-4xl font-semibold leading-tight text-portfolio-text sm:text-5xl">
            Frontend craft, Node.js fluency, and Laravel backend API range.
          </h2>
          <p className="mt-5 text-base leading-8 text-portfolio-text-secondary">
            The strongest signal is product execution across the full stack:
            polished interfaces, backend API systems, Nova operational tooling,
            AI flows, Web3 flows, and deployment context.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-portfolio-card border border-portfolio-border bg-portfolio-border md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <section
              key={category.label}
              className="bg-portfolio-surface p-5 sm:p-6"
            >
              <h3 className="text-xl font-semibold text-portfolio-text">
                {category.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-portfolio-text-muted">
                {category.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-portfolio-control border border-portfolio-border bg-portfolio-raised px-2.5 py-1.5 text-xs text-portfolio-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
