import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Header from './components/Header'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <Navbar setShowLogin={setShowLogin}/>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Header/>
    </>
  )
}

export default App
