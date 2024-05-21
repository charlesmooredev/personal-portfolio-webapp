import { ReactNode } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

interface Props {
  children: ReactNode | ReactNode[]
}

export function ProjectDescription({ children }: Props) {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={0}>
      <div className="text-[20px] lg:text-[40px] px-[15px]">{children}</div>
    </ScrollAnimation>
  )
}
