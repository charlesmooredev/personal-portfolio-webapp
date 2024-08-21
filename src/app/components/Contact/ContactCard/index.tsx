import { ReactNode } from 'react'

interface Props {
  name: string
  url: string
  icon: ReactNode
}

export function ContactCard({ name, url, icon }: Props) {
  return (
    <a href={url} target="_blank">
      <div className="flex items-center justify-center space-x-[10px] bg-black border border-white hover:bg-white hover:text-black-950 px-[25px] py-[10px] transition-effect">
        <div>{icon}</div>
        <div className="text-[1.25rem] font-semibold">{name}</div>
      </div>
    </a>
  )
}
