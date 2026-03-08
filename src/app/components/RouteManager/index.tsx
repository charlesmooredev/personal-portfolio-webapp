import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Routes } from '../../helpers/Routes.ts'
import { Desktop } from '../Desktop'

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <Desktop />,
  },
  {
    path: '*',
    element: <Navigate to={Routes.Home} replace />,
  },
])

export function RouteManager() {
  return <RouterProvider router={router} />
}
