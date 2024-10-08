import { ReactNode } from 'react'
import { Header } from '../Header'
import { ContentWrapper } from '../ContentWrapper'

interface Props {
  children: ReactNode | ReactNode[]
}

export function Wrapper({ children }: Props) {
  return (
    <div className="w-screen pb-[100px]">
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  )
}
