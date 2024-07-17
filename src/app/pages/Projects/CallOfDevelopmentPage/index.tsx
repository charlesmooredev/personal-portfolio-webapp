import { Wrapper } from '../../../components/Wrapper'
import { ProjectTitle } from '../../../components/Project/ProjectTitle'
import { ProjectDescription } from '../../../components/Project/ProjectDescription'
import { ProjectInformation } from '../../../components/Project/ProjectInformation'
import { ProjectInformationRole } from '../../../components/Project/ProjectInformation/components/ProjectInformationRole'
import { ProjectInformationResponsibilities } from '../../../components/Project/ProjectInformation/components/ProjectInformationResponsibilities'
import { ProjectInformationUrl } from '../../../components/Project/ProjectInformation/components/ProjectInformationUrl'

export function CallOfDevelopmentPage() {
  return (
    <Wrapper>
      <ProjectTitle>Call of Development</ProjectTitle>
      <ProjectDescription>
        Call of Development is a blend of old-school and modern Call of Duty,
        featuring a functional ‘Create a Class’ and operator selection menu.
      </ProjectDescription>
      <ProjectInformation>
        <ProjectInformationRole>
          Frontend Software Engineer
        </ProjectInformationRole>
        <ProjectInformationResponsibilities>
          I developed a functional concept for a Call of Duty menu system.
        </ProjectInformationResponsibilities>
        <ProjectInformationUrl url="https://call-of-duty-xi.vercel.app/" />
      </ProjectInformation>
    </Wrapper>
  )
}
