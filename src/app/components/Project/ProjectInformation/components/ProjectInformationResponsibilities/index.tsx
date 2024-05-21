import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export function ProjectInformationResponsibilities({ children }: Props) {
  return (
    <div className="space-y-[10px] px-[25px] mt-[25px]">
      <div className="border-b-2 border-black-200 inline font-semibold pb-[5px] uppercase text-[1.15rem]">
        Responsibilities
      </div>
      <div className="text-[1.05rem]">{children}</div>
    </div>
  )
}
