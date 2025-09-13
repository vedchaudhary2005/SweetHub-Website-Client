import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Header from './components/Header'
import ShopMenu from './components/ShopMenu'
import Footer from './components/Footer'
function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <Navbar setShowLogin={setShowLogin}/>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Header/>
      <ShopMenu/>
      <Footer/>
    </>
  )
}

export default App
