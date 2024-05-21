import { Wrapper } from '../../../components/Wrapper'
import { ProjectTitle } from '../../../components/Project/ProjectTitle'
import { ProjectDescription } from '../../../components/Project/ProjectDescription'
import { ProjectInformation } from '../../../components/Project/ProjectInformation'
import { ProjectInformationRole } from '../../../components/Project/ProjectInformation/components/ProjectInformationRole'
import { ProjectInformationResponsibilities } from '../../../components/Project/ProjectInformation/components/ProjectInformationResponsibilities'
import { ProjectInformationUrl } from '../../../components/Project/ProjectInformation/components/ProjectInformationUrl'

export function OzoneProjectPage() {
  return (
    <Wrapper>
      <ProjectTitle>Ozone</ProjectTitle>
      <ProjectDescription>
        Ozone is a cutting-edge browser-based video editor that allows users to
        create and edit videos seamlessly within their web browser. With
        features like trimming, merging clips, adding transitions, and applying
        filters, Ozone offers a comprehensive and user-friendly toolkit for both
        amateur and professional video creators.
      </ProjectDescription>
      <ProjectInformation>
        <ProjectInformationRole>
          Founding Frontend Software Engineer
        </ProjectInformationRole>
        <ProjectInformationResponsibilities>
          Played a pivotal role in developing a cutting-edge cloud-based video
          editor, collaborating with engineering and design teams using Tailwind
          CSS, React, TypeScript, and Figma to ensure seamless integration and
          functionality, and enhancing the backend testing environment with
          Vue.js for optimal performance.
        </ProjectInformationResponsibilities>
        <ProjectInformationUrl url="https://ozone.pro/" />
      </ProjectInformation>
    </Wrapper>
  )
}
