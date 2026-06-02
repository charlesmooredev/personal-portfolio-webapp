import { motion } from 'motion/react'
import type { ProfileStat } from '../../helpers/PortfolioContent'

type FeaturedImage = {
  id: string
  name: string
  thumbnail: string
}

interface Props {
  projectCount: number
  stats: ProfileStat[]
  focusAreas: string[]
  featuredImages: FeaturedImage[]
  conversationUrl: string
  reduceMotion: boolean | null
}

export function HeroSection({
  projectCount,
  stats,
  focusAreas,
  featuredImages,
  conversationUrl,
  reduceMotion,
}: Props) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-portfolio-border"
    >
      <div className="absolute inset-0 -z-20 bg-portfolio-bg" />
      <div className="absolute inset-0 -z-10 opacity-[0.42]">
        <div className="absolute right-0 top-10 grid w-[min(48rem,72vw)] grid-cols-2 gap-3 px-6 sm:grid-cols-4 lg:right-10 lg:top-20">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="aspect-[4/5] overflow-hidden rounded-portfolio-card border border-portfolio-border bg-portfolio-surface shadow-portfolio-soft"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            >
              <img
                src={image.thumbnail}
                alt={`${image.name} project thumbnail`}
                className="h-full w-full object-cover grayscale"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="portfolio-vignette absolute inset-0 -z-10" />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-[calc(100vw-2rem)] max-w-7xl content-center gap-12 py-20 sm:w-full sm:px-8 lg:px-10 lg:py-24">
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-mono text-xs uppercase text-portfolio-accent">
            Full-stack product engineer
          </p>
          <h1 className="portfolio-text-balance mt-6 max-w-[21rem] text-4xl font-bold leading-[1.03] text-portfolio-text sm:max-w-4xl sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            I'm Charles Moore. I build full-stack products with frontend craft.
          </h1>
          <p className="mt-7 max-w-[21rem] text-lg leading-8 text-portfolio-text-secondary sm:max-w-2xl sm:text-xl sm:leading-9">
            I work across React, TypeScript, Node.js, Laravel, motion, and
            product architecture for AI, Web3, gaming, local business, and
            multi-platform products.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center rounded-portfolio-control border border-portfolio-accent bg-portfolio-accent/10 px-5 text-sm font-semibold text-portfolio-accent-strong transition-colors hover:bg-portfolio-accent/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent"
            >
              Read the work
            </a>
            <a
              href={conversationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-portfolio-control border border-portfolio-border bg-portfolio-surface/80 px-5 text-sm font-semibold text-portfolio-text transition-colors hover:border-portfolio-border-strong hover:bg-portfolio-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-accent"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
          <div className="grid gap-px overflow-hidden rounded-portfolio-card border border-portfolio-border bg-portfolio-border sm:grid-cols-3 lg:h-full lg:min-h-[18rem]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col bg-portfolio-raised p-5 sm:p-6"
              >
                <p className="text-3xl font-semibold text-portfolio-text">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase text-portfolio-accent">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-portfolio-text-muted">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col rounded-portfolio-card border border-portfolio-border bg-portfolio-raised/90 p-5 backdrop-blur-sm sm:p-6 lg:h-full lg:min-h-[18rem]">
            <div className="flex items-center justify-between gap-4 border-b border-portfolio-border pb-4">
              <p className="font-mono text-[11px] uppercase text-portfolio-text-muted">
                Project index
              </p>
              <p className="text-sm text-portfolio-text-secondary">
                {projectCount} projects
              </p>
            </div>
            <ul className="mt-4 grid flex-1 content-center gap-3">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex gap-3 text-sm leading-6 text-portfolio-text-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
