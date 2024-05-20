import ProjectData = App.Data.ProjectData
import { NavLink } from 'react-router-dom'
import { useLayoutEffect, useMemo, useState } from 'react'

interface Props {
  data: ProjectData
  time: number
}

export function ProjectsThumbnail({ data, time }: Props) {
  const [timer, setTimer] = useState(0)

  const projectCls = useMemo(() => {
    return `w-full space-y-[10px] transition-opacity duration-300 ease-in-out ${timer >= time ? 'opacity-100' : 'opacity-0'}`
  }, [time, timer])

  useLayoutEffect(() => {
    if (timer >= time) return

    setTimeout(() => {
      setTimer(timer + time)
    }, time)
  }, [time, timer])

  return (
    <NavLink to={data.link} className={projectCls}>
      <div className="w-full overflow-hidden rounded-[12px] border-2 border-black-900">
        <img
          src={data.thumbnail}
          className="h-fit w-fit hover:scale-105 transition-effect rounded-[10px]"
        />
      </div>
      <div className="font-semibold text-[1.2rem]">{data.name}</div>
    </NavLink>
  )
}
