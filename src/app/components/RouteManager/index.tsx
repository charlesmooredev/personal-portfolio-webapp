import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Routes } from '../../helpers/Routes.ts'
import { PortfolioExperience } from '../Portfolio'

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <PortfolioExperience />,
  },
  {
    path: '*',
    element: <Navigate to={Routes.Home} replace />,
  },
])

export function RouteManager() {
  return <RouterProvider router={router} />
}
