import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <Navbar setShowLogin={setShowLogin}/>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </>
  )
}

export default App
