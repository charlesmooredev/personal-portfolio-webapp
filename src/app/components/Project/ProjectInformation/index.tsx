import { ReactNode } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

interface Props {
  children: ReactNode | ReactNode[]
}

export function ProjectInformation({ children }: Props) {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        {children}
      </div>
    </ScrollAnimation>
  )
}
