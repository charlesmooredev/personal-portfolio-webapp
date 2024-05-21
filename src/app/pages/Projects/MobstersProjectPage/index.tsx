import { Wrapper } from '../../../components/Wrapper'
import { ProjectTitle } from '../../../components/Project/ProjectTitle'
import { ProjectDescription } from '../../../components/Project/ProjectDescription'
import { ProjectInformation } from '../../../components/Project/ProjectInformation'
import { ProjectInformationRole } from '../../../components/Project/ProjectInformation/components/ProjectInformationRole'
import { ProjectInformationResponsibilities } from '../../../components/Project/ProjectInformation/components/ProjectInformationResponsibilities'
import { ProjectInformationUrl } from '../../../components/Project/ProjectInformation/components/ProjectInformationUrl'

export function MobstersProjectPage() {
  return (
    <Wrapper>
      <ProjectTitle>Mobsters</ProjectTitle>
      <ProjectDescription>
        Mobsters: New Beginnings is an immersive browser-based game where
        players strive to rise through the ranks to become the top mobster.
        Engage in strategic battles, build your criminal empire, and outmaneuver
        rivals in a quest for power and dominance in the underworld.
      </ProjectDescription>
      <ProjectInformation>
        <ProjectInformationRole>
          Frontend Software Engineer
        </ProjectInformationRole>
        <ProjectInformationResponsibilities>
          Designed and implemented interactive UI/UX features with Vue.js and
          TailwindCSS, developed comprehensive wireframes using Adobe XD,
          created an advanced admin panel with Laravel Nova, integrated user
          feedback for ongoing enhancements, and strategically introduced new
          features to drive project success.
        </ProjectInformationResponsibilities>
        <ProjectInformationUrl url="https://top.newmobsters.com/" />
      </ProjectInformation>
    </Wrapper>
  )
}
