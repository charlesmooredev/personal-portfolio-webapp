import { useMemo, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { projects } from '../../helpers/Projects'
import {
  contactLinks,
  conversationUrl,
  focusAreas,
  navigationLinks,
  profileStats,
  skillCategories,
} from '../../helpers/PortfolioContent'
import { ContactSection } from './ContactSection'
import { HeroSection } from './HeroSection'
import { ProjectDetailDialog } from './ProjectDetailDialog'
import { ProjectShowcase } from './ProjectShowcase'
import { SiteHeader } from './SiteHeader'
import { SkillsSection } from './SkillsSection'

export function PortfolioExperience() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()

  const selectedProject = useMemo(
    () =>
      selectedProjectId
        ? projects.find((project) => project.id === selectedProjectId) ?? null
        : null,
    [selectedProjectId],
  )

  const featuredImages = projects.slice(0, 4).map((project) => ({
    id: project.id,
    name: project.name,
    thumbnail: project.thumbnail,
  }))

  return (
    <div className="portfolio-canvas min-h-svh overflow-x-hidden bg-portfolio-bg text-portfolio-text">
      <SiteHeader links={navigationLinks} />

      <main>
        <HeroSection
          projectCount={projects.length}
          stats={profileStats}
          focusAreas={focusAreas}
          featuredImages={featuredImages}
          conversationUrl={conversationUrl}
          reduceMotion={reduceMotion}
        />

        <ProjectShowcase
          projects={projects}
          onSelectProject={(projectId) => setSelectedProjectId(projectId)}
          reduceMotion={reduceMotion}
        />

        <SkillsSection categories={skillCategories} />
        <ContactSection links={contactLinks} />
      </main>

      <ProjectDetailDialog
        project={selectedProject}
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedProjectId(null)
        }}
      />
    </div>
  )
}
