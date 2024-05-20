import { Routes } from '../../helpers/Routes.ts'
import { NavLink } from 'react-router-dom'

const headerRoutes = [
  { name: 'Projects', route: Routes.Projects },
  { name: 'Contact', route: Routes.Contact },
]

export function Header() {
  return (
    <div className="w-full mb-[20px] px-[10px] lg:px-[100px]">
      <div className="w-full flex items-center">
        <div className="w-[100px]">
          <NavLink to={Routes.Projects}>
            <img
              src="/assets/logo.png"
              alt="Charles Moore"
              className="h-[50px]"
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
