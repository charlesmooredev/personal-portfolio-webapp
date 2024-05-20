import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProjectRoutes, Routes } from '../../helpers/Routes.ts'
import { ProjectsPage } from '../../pages/ProjectsPage'
import { ContactPage } from '../../pages/ContactPage'

const router = createBrowserRouter([
  {
    path: Routes.Contact,
    element: <ContactPage />,
  },
  {
    path: Routes.Projects,
    element: <ProjectsPage />,
    children: [
      {
        path: ProjectRoutes.Ozone,
        element: <>Ozone</>,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
])

export function RouteManager() {
  return <RouterProvider router={router} />
}
