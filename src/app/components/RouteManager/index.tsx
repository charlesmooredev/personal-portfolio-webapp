import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProjectRoutes, Routes } from '../../helpers/Routes.ts'
import { ProjectsPage } from '../../pages/ProjectsPage'
import { ContactPage } from '../../pages/ContactPage'
import { OzoneProjectPage } from '../../pages/Projects/OzoneProjectPage'
import { MyLikenessProjectPage } from '../../pages/Projects/MyLikenessProjectPage'
import { MobstersProjectPage } from '../../pages/Projects/MobstersProjectPage'
import { SororityWarsProjectPage } from '../../pages/Projects/SororityWarsProjectPage'
import { HeartlandTattooCoProjectPage } from '../../pages/Projects/HeartlandTattooCoProjectPage'
import { AdobeFireflyConceptPage } from '../../pages/Projects/AdobeFireflyConceptPage'
import { CallOfDevelopmentPage } from '../../pages/Projects/CallOfDevelopmentPage'

const router = createBrowserRouter([
  {
    path: Routes.Contact,
    element: <ContactPage />,
  },
  {
    path: Routes.Projects,
    element: <ProjectsPage />,
  },
  {
    path: ProjectRoutes.Ozone,
    element: <OzoneProjectPage />,
  },
  {
    path: ProjectRoutes.AdobeFireflyConcept,
    element: <AdobeFireflyConceptPage />,
  },
  {
    path: ProjectRoutes.CallOfDevelopment,
    element: <CallOfDevelopmentPage />,
  },
  {
    path: ProjectRoutes.MyLikeness,
    element: <MyLikenessProjectPage />,
  },
  {
    path: ProjectRoutes.SororityWars,
    element: <SororityWarsProjectPage />,
  },
  {
    path: ProjectRoutes.Mobsters,
    element: <MobstersProjectPage />,
  },
  {
    path: ProjectRoutes.HeartlandTattooCo,
    element: <HeartlandTattooCoProjectPage />,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
])

export function RouteManager() {
  return <RouterProvider router={router} />
}
