import { RouteManager } from './app/components/RouteManager'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

function App() {
  const location = window.location

  useEffect(() => {
    ReactGA.initialize('G-86PK8XB39Y')
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: 'Portfolio',
    })
  }, [location.pathname])

  return <RouteManager />
}

export default App
