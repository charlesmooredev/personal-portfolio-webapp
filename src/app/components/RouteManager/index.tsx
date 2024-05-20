import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProjectRoutes, Routes } from '../../helpers/Routes.ts'
import { ProjectsPage } from '../../pages/ProjectsPage'
import { ContactPage } from '../../pages/ContactPage'
import { OzoneProjectPage } from '../../pages/Projects/OzoneProjectPage'
import { MyLikenessProjectPage } from '../../pages/Projects/MyLikenessProjectPage'
import { MobstersProjectPage } from '../../pages/Projects/MobstersProjectPage'
import { SororityWarsProjectPage } from '../../pages/Projects/SororityWarsProjectPage'

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
    path: '*',
    element: <div>Not Found</div>,
  },
])

export function RouteManager() {
  return <RouterProvider router={router} />
}
