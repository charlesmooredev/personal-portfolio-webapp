import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export function ContentWrapper({ children }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full lg:w-[1200px] space-y-[30px] px-[10px] lg:px-0">
        {children}
      </div>
    </div>
  )
}
