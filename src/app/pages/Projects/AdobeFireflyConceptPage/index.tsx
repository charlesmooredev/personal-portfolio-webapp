import { Wrapper } from '../../../components/Wrapper'
import { ProjectTitle } from '../../../components/Project/ProjectTitle'
import { ProjectDescription } from '../../../components/Project/ProjectDescription'
import { ProjectInformation } from '../../../components/Project/ProjectInformation'
import { ProjectInformationRole } from '../../../components/Project/ProjectInformation/components/ProjectInformationRole'
import { ProjectInformationResponsibilities } from '../../../components/Project/ProjectInformation/components/ProjectInformationResponsibilities'
import { ProjectInformationUrl } from '../../../components/Project/ProjectInformation/components/ProjectInformationUrl'

export function AdobeFireflyConceptPage() {
  return (
    <Wrapper>
      <ProjectTitle>Adobe Firefly Concept</ProjectTitle>
      <ProjectDescription>
        This project is a concept version of Adobe’s Firefly for generating AI
        images. It features a collapsible sidebar and a functional search tool
        for easily finding the desired effects.
      </ProjectDescription>
      <ProjectInformation>
        <ProjectInformationRole>
          Frontend Software Engineer
        </ProjectInformationRole>
        <ProjectInformationResponsibilities>
          I developed an enhanced concept version of Adobe Firefly utilizing
          React, TailwindCSS, and Spectrum Web Components.
        </ProjectInformationResponsibilities>
        <ProjectInformationUrl url="https://adobe-firefly-enhancements.vercel.app/" />
      </ProjectInformation>
    </Wrapper>
  )
}
