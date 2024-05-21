import { Wrapper } from '../../../components/Wrapper'
import { ProjectTitle } from '../../../components/Project/ProjectTitle'
import { ProjectDescription } from '../../../components/Project/ProjectDescription'
import { ProjectInformation } from '../../../components/Project/ProjectInformation'
import { ProjectInformationRole } from '../../../components/Project/ProjectInformation/components/ProjectInformationRole'
import { ProjectInformationResponsibilities } from '../../../components/Project/ProjectInformation/components/ProjectInformationResponsibilities'
import { ProjectInformationUrl } from '../../../components/Project/ProjectInformation/components/ProjectInformationUrl'

export function MyLikenessProjectPage() {
  return (
    <Wrapper>
      <ProjectTitle>MyLikenessAI</ProjectTitle>
      <ProjectDescription>
        MyLikenessAI is a revolutionary tool that enables creators and actors to
        monetize their digital likeness by creating and managing virtual
        representations of themselves. This platform provides an innovative way
        for users to generate income through personalized digital experiences
        and endorsements, leveraging advanced AI technology.
      </ProjectDescription>
      <ProjectInformation>
        <ProjectInformationRole>
          Frontend Software Engineer
        </ProjectInformationRole>
        <ProjectInformationResponsibilities>
          Crafted Figma mock-up designs, transformed them into pixel-perfect web
          applications using React and TypeScript, and implemented RTK Query and
          Redux for robust state management and efficient caching.
        </ProjectInformationResponsibilities>
        <ProjectInformationUrl url="https://app.mylikeness.ai/" />
      </ProjectInformation>
    </Wrapper>
  )
}
