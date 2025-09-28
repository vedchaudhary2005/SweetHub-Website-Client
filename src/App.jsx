import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import LoginPopup from './components/LoginPopup'
import Header from './components/Header'
import Footer from './components/Footer'
import SweetsMenu from './components/SweetsMenu'
import SearchPage from './components/SearchPage'
import AddtoCart from './components/AddtoCart'
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import { CartProvider } from './context/CartContext'
import { useCart } from './hooks/useCart'

// App content component to access cart context
const AppContent = ({ showLogin, setShowLogin }) => {
  // Access cart context for toast notifications
  const { toast, hideToast } = useCart()

  return (
    <>
      {/* Router wrapper for navigation between pages */}
      <Router>
        {/* Scroll to top on route change */}
        <ScrollToTop />
        
        {/* Navbar appears on all pages */}
        <Navbar setShowLogin={setShowLogin} />
        
        {/* Login popup - shows conditionally on all pages */}
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        
        {/* Route-based page rendering */}
        <Routes>
          {/* Home page route - shows Header and SweetsMenu */}
          <Route 
            path="/" 
            element={
              <>
                <Header/>
                <SweetsMenu/>
              </>
            } 
          />
          
          {/* Separate Search page route - shows only SearchPage */}
          <Route 
            path="/search" 
            element={<SearchPage />} 
          />
          
          {/* Cart page route - shows only Cart */}
          <Route 
            path="/cart" 
            element={<AddtoCart />} 
          />
        </Routes>
        
        {/* Footer appears on all pages */}
        <Footer/>
        
        {/* Toast notification for cart actions */}
        <Toast 
          message={toast.message}
          isVisible={toast.isVisible}
          onClose={hideToast}
        />
      </Router>
    </>
  )
}

function App() {
  // Login popup state management
  const [showLogin, setShowLogin] = useState(false)

  return (
    // Cart Provider for global cart state
    <CartProvider>
      {/* App content with cart context access */}
      <AppContent showLogin={showLogin} setShowLogin={setShowLogin} />
    </CartProvider>
  )
}

export default App
