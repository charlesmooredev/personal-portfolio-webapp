interface Props {
  name: string
}

export function ProjectsSkillCard({ name }: Props) {
  return (
    <div className="rounded-full px-[15px] py-[2.5px] lg:bg-black-950 bg-black-900 text-[0.85rem]">
      {name}
    </div>
  )
}
