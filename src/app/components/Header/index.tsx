import { Routes } from '../../helpers/Routes.ts'
import { NavLink } from 'react-router-dom'

const headerRoutes = [
  { name: 'Projects', route: Routes.Projects },
  { name: 'Contact', route: Routes.Contact },
]

export function Header() {
  return (
    <div className="w-full flex flex-col items-center fixed bg-black-950/50 px-2 py-1 backdrop-blur-md z-[9999]">
      <div className="w-full lg:max-w-screen-xl flex items-center">
        <div className="w-[100px]">
          <NavLink to={Routes.Projects}>
            <img
              src="/assets/logo.png"
              alt="Charles Moore"
              className="h-[65px]"
            />
          </NavLink>
        </div>
        <div className="w-[calc(100%-100px)] flex justify-end space-x-[15px]">
          {headerRoutes.map((route) => (
            <NavLink
              key={route.name}
              to={route.route}
              className={({ isActive }) => `${isActive ? 'font-semibold' : ''}`}
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}
