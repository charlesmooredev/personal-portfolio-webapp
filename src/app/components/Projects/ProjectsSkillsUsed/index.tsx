import ProjectSkillData = App.Data.ProjectSkillData
import { ProjectsSkillCard } from '../ProjectsSkillCard'

interface Props {
  skills: ProjectSkillData[]
}

export function ProjectsSkillsUsed({ skills }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-[5px]">
      {skills.map((skill) => (
        <ProjectsSkillCard name={skill.name} key={skill.name} />
      ))}
    </div>
  )
}
