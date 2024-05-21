import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export function ProjectTitle({ children }: Props) {
  return (
    <div className="w-full text-[10vw] font-semibold h-[calc(100vh-100px)] flex items-center justify-center">
      {children}
    </div>
  )
}