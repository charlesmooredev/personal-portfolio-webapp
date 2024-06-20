import { Wrapper } from '../../../components/Wrapper'
import { ProjectTitle } from '../../../components/Project/ProjectTitle'
import { ProjectDescription } from '../../../components/Project/ProjectDescription'
import { ProjectInformation } from '../../../components/Project/ProjectInformation'
import { ProjectInformationRole } from '../../../components/Project/ProjectInformation/components/ProjectInformationRole'
import { ProjectInformationResponsibilities } from '../../../components/Project/ProjectInformation/components/ProjectInformationResponsibilities'
import { ProjectInformationUrl } from '../../../components/Project/ProjectInformation/components/ProjectInformationUrl'

export function HeartlandTattooCoProjectPage() {
  return (
    <Wrapper>
      <ProjectTitle>Heartland Tattoo Company</ProjectTitle>
      <ProjectDescription>
        Heartland Tattoo Company, located in Clinton, Tennessee, is a tattoo
        shop renowned for its exceptional artistry and welcoming atmosphere.
        With a team of skilled artists specializing in various styles, the
        studio upholds high standards of hygiene and customer care, ensuring a
        safe and comfortable experience.
      </ProjectDescription>
      <ProjectInformation>
        <ProjectInformationRole>
          Frontend Software Engineer
        </ProjectInformationRole>
        <ProjectInformationResponsibilities>
          I designed the website using Figma and developed it utilizing React,
          TypeScript, and Tailwind, for a professional and seamless
          implementation.
        </ProjectInformationResponsibilities>
        <ProjectInformationUrl url="https://www.heartlandtattoocotn.com/" />
      </ProjectInformation>
    </Wrapper>
  )
}
