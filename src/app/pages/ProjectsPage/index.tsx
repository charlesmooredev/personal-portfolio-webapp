import { Wrapper } from '../../components/Wrapper'
import { ProjectsIntroduction } from '../../components/Projects/ProjectsIntroduction'
import { ProjectsGrid } from '../../components/Projects/ProjectsGrid'

export function ProjectsPage() {
  return (
    <Wrapper>
      <ProjectsIntroduction />
      <ProjectsGrid />
    </Wrapper>
  )
}
