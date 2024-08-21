import ProjectData = App.Data.ProjectData
import { NavLink } from 'react-router-dom'
import { useCallback } from 'react'
import { ProjectsSkillsUsed } from '../ProjectsSkillsUsed'

interface Props {
  data: ProjectData
}

export function ProjectsThumbnail({ data }: Props) {
  const scrollToTopFn = useCallback(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <NavLink
      to={data.link}
      className="w-full space-y-[10px] transition-opacity duration-300 ease-in-out group"
      onClick={scrollToTopFn}
    >
      <div className="w-full overflow-hidden rounded-[12px] border-2 border-black-900 lg:relative">
        <div className="lg:group-hover:block lg:absolute text-[1.15rem] hidden bg-black-500/50 z-[999] backdrop-blur left-0 bottom-0 w-full p-[10px] space-y-[10px]">
          <div>{data.description}</div>
          <ProjectsSkillsUsed skills={data.skills} />
        </div>
        <img
          alt={data.thumbnail}
          src={data.thumbnail}
          className="w-fit opacity-95 hover:opacity-100 group-hover:scale-105 transition-effect rounded-[10px]"
        />
      </div>
      <div className="lg:bg-transparent lg:space-y-0 space-y-[5px] rounded-[10px] p-[5px]">
        <div className="font-semibold text-[1.5rem]">{data.name}</div>
        <div className="lg:hidden text-black-100 text-[1.10rem] space-y-[10px]">
          <div>{data.description}</div>
          <ProjectsSkillsUsed skills={data.skills} />
        </div>
      </div>
    </NavLink>
  )
}
