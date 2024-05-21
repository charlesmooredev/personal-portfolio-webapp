import { ReactNode } from 'react'

interface Props {
  name: string
  url: string
  icon: ReactNode
}

export function ContactCard({ name, url, icon }: Props) {
  return (
    <a href={url} target="_blank">
      <div className="flex items-center justify-center space-x-[10px] bg-black-900 rounded-full px-[25px] py-[10px] transition-effect hover:bg-blue-500">
        <div>{icon}</div>
        <div className="text-[1.25rem] font-semibold">{name}</div>
      </div>
    </a>
  )
}
