// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace App.Data {
  export type ProjectSkillData = {
    name: string
  }

  export type ProjectData = {
    id: string
    name: string
    thumbnail: string
    description: string
    skills: ProjectSkillData[]
    role: string
    responsibilities: string
    projectUrl?: string
  }
}
