interface Props {
  name: string
}

export function ProjectsSkillCard({ name }: Props) {
  return (
    <div className="rounded-full px-[15px] py-[2.5px] bg-black-950 text-[0.85rem]">
      {name}
    </div>
  )
}
