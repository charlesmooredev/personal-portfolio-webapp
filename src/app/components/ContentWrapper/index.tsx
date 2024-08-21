import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export function ContentWrapper({ children }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full lg:max-w-screen-xl space-y-[30px] pt-20 px-2.5">
        {children}
      </div>
    </div>
  )
}
