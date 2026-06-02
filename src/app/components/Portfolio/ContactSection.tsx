import {
  ArrowUpRight,
  EnvelopeAtFill,
  Github,
  Linkedin,
} from 'react-bootstrap-icons'
import type { ContactLink } from '../../helpers/PortfolioContent'

interface Props {
  links: ContactLink[]
}

function ContactIcon({ name }: { name: ContactLink['name'] }) {
  if (name === 'GitHub') return <Github aria-hidden="true" size={18} />
  if (name === 'LinkedIn') return <Linkedin aria-hidden="true" size={18} />
  return <EnvelopeAtFill aria-hidden="true" size={18} />
}

export function ContactSection({ links }: Props) {
  return (
    <section id="contact" className="bg-portfolio-bg">
      <div className="mx-auto grid w-[calc(100vw-2rem)] max-w-7xl gap-10 py-16 sm:w-full sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-24">
        <div>
          <p className="font-mono text-xs uppercase text-portfolio-accent">
            Contact
          </p>
          <h2 className="portfolio-text-balance mt-4 text-4xl font-semibold leading-tight text-portfolio-text sm:text-5xl">
            Open to serious full-stack product work.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-portfolio-text-secondary">
            For hiring, contract builds, design-to-code implementation, Node.js
            workflows, Laravel backend API systems, Nova tooling, or product UI
            systems, use the channel that fits the conversation.
          </p>
        </div>

        <div className="grid gap-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="group grid min-h-24 grid-cols-[2.75rem_1fr_auto] items-center gap-4 rounded-portfolio-card border border-portfolio-border bg-portfolio-surface p-4 transition-colors hover:border-portfolio-border-strong hover:bg-portfolio-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent sm:p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-portfolio-control border border-portfolio-border bg-portfolio-raised text-portfolio-accent">
                <ContactIcon name={link.name} />
              </span>
              <span className="min-w-0">
                <span className="block text-lg font-semibold text-portfolio-text">
                  {link.name}
                </span>
                <span className="mt-1 block text-sm leading-6 text-portfolio-text-muted">
                  {link.description}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                size={17}
                className="text-portfolio-text-muted transition-colors group-hover:text-portfolio-accent-strong"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
