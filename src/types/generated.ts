// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace App.Data {
  export type ProjectSkillData = {
    name: string
  }

  export type ProjectData = {
    name: string
    thumbnail: string
    link: string
    description: string
    skills: ProjectSkillData[]
  }
}
