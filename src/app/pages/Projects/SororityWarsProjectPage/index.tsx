import { Wrapper } from '../../../components/Wrapper'
import { ProjectTitle } from '../../../components/Project/ProjectTitle'
import { ProjectDescription } from '../../../components/Project/ProjectDescription'
import { ProjectInformation } from '../../../components/Project/ProjectInformation'
import { ProjectInformationRole } from '../../../components/Project/ProjectInformation/components/ProjectInformationRole'
import { ProjectInformationResponsibilities } from '../../../components/Project/ProjectInformation/components/ProjectInformationResponsibilities'
import { ProjectInformationUrl } from '../../../components/Project/ProjectInformation/components/ProjectInformationUrl'

export function SororityWarsProjectPage() {
  return (
    <Wrapper>
      <ProjectTitle>Sorority Wars</ProjectTitle>
      <ProjectDescription>
        Sorority Wars is an engaging game where players navigate the glamorous
        world of fashion, aiming to rise to the top. Compete in style
        challenges, build your wardrobe, and make strategic social moves to
        become the ultimate fashion icon in the sorority scene.
      </ProjectDescription>
      <ProjectInformation>
        <ProjectInformationRole>
          Frontend Software Engineer
        </ProjectInformationRole>
        <ProjectInformationResponsibilities>
          Developed feature-rich UI/UX projects for Sorority Wars using Vue.js
          and TailwindCSS, crafted detailed wireframes with Adobe XD, engineered
          an advanced admin panel with Laravel Nova, incorporated user feedback
          for continuous improvement, and planned new features to achieve
          project goals.
        </ProjectInformationResponsibilities>
        <ProjectInformationUrl url="https://sororitywars.app/" />
      </ProjectInformation>
    </Wrapper>
  )
}
