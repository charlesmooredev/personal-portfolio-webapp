import { RouteManager } from './app/components/RouteManager'
import 'animate.css/animate.compat.css'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

function App() {
  const location = window.location

  useEffect(() => {
    ReactGA.initialize('G-86PK8XB39Y')
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: location.pathname === '/' ? 'Landing Page' : 'Contact Page',
    })
  }, [location.pathname])

  return <RouteManager />
}

export default App
