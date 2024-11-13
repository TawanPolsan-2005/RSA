import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//Components
import Navigation from './components/Navigation'
import ProfileHeader from './components/ProfileHeader'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileHeader/>
      <Navigation/>
      <Search/>
      <Footer/>
    </>
  )
}

export default App
