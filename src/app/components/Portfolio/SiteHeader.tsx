import type { NavigationLink } from '../../helpers/PortfolioContent'

interface Props {
  links: NavigationLink[]
}

export function SiteHeader({ links }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-portfolio-border/80 bg-portfolio-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[calc(100vw-2rem)] max-w-7xl items-center justify-between gap-3 sm:w-full sm:gap-4 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="group flex min-h-11 items-center gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-accent"
        >
          <span className="grid h-9 w-9 place-items-center rounded-portfolio-control border border-portfolio-border-strong bg-portfolio-surface text-sm font-semibold text-portfolio-text transition-colors group-hover:border-portfolio-accent">
            CM
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-portfolio-text">
              Charles Moore
            </span>
            <span className="block text-xs text-portfolio-text-muted">
              Full-stack product engineer
            </span>
          </span>
        </a>

        <nav
          aria-label="Portfolio sections"
          className="flex items-center gap-0 rounded-portfolio-control border border-portfolio-border bg-portfolio-raised p-1 sm:gap-1"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-9 rounded-portfolio-control px-2.5 py-2 text-xs text-portfolio-text-muted transition-colors hover:bg-portfolio-surface-soft hover:text-portfolio-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent sm:px-4 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
