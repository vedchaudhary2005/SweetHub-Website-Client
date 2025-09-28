import { useState } from 'react';
import { Home, Search, User, ShoppingCart, HelpCircle, BadgePercent } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  // State to control side panel visibility
  const [isLocationPanelOpen, setIsLocationPanelOpen] = useState(false);
  // Get dynamic cart count
  const cartCount = getCartCount();

  // Toggle location panel
  const toggleLocationPanel = () => {
    setIsLocationPanelOpen(!isLocationPanelOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  // Handle signin button click
  const handleSigninClick = () => {  
    setShowLogin(true);
  };

  // Navigate to search page
  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <>
      {/* Main Navbar - Full Width and Fixed */}
      <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Left Section - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo Placeholder */}
              <div className="flex-shrink-0 px-2 sm:px-0">
                <div className="text-2xl font-bold text-orange-500">SweetHub</div>
              </div>
              
              {/* Desktop Hamburger for Location */}
              <div className="hidden md:flex items-center">
                <button 
                  onClick={toggleLocationPanel}
                  onKeyDown={(e) => handleKeyDown(e, toggleLocationPanel)}
                  aria-label="Select location"
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-base font-semibold">Location</span>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation Items */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Home */}
                <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Go to home page">
                  <Home className="w-5 h-5" />
                  <span className="font-semibold text-base">Home</span>
                </Link>
                
                {/* Search - Navigate to search page */}
                <button 
                  onClick={handleSearchClick}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
                  aria-label="Go to search page"
                >
                  <Search className="w-5 h-5" />
                  <span className="font-semibold text-base">Search</span>
                </button>

                {/* Help */}
                <Link to="/help" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Get help">
                  <HelpCircle className="w-5 h-5" />
                  <span className="font-semibold text-base">Help</span>
                </Link>
          
              {/* Cart (Always visible) */}
              <Link to="/cart" className="relative flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1" aria-label={`Cart with ${cartCount} items`}>
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline font-semibold text-base">Cart</span>
                {/* Cart Badge - Show count only if items exist */}
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Link>
              
                {/* Sign In */}
                <button 
                  onClick={handleSigninClick}
                  className="flex items-center space-x-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-semibold text-sm"
                  aria-label="Sign in to your account"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
              </div>

              {/* Mobile Sign In */}
              <button 
                onClick={handleSigninClick}
                className="md:hidden flex items-center space-x-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-semibold text-sm"
                aria-label="Sign in to your account"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </button>
              
              {/* Mobile Hamburger for Location */}
              <button 
                onClick={toggleLocationPanel}
                onKeyDown={(e) => handleKeyDown(e, toggleLocationPanel)}
                aria-label="Select location"
                className="md:hidden text-gray-700 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>


      </nav>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>

      {/* Mobile Bottom Navigation Bar - Only visible on mobile screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 rounded-t-2xl shadow-lg">
        <div className="flex justify-around items-center py-2 px-4">
          
          {/* Home Navigation - Mobile only */}
          <Link 
            to="/"
            className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-orange-500 transition-colors"
            aria-label="Go to home page"
          >
            <Home className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          
          {/* Search Navigation */}
          <Link 
            to="/search"
            className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-orange-500 transition-colors"
            aria-label="Go to search page"
          >
            <Search className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Search</span>
          </Link>
          
          {/* Cart Navigation with Badge */}
          <Link 
            to="/cart"
            className="relative flex flex-col items-center py-2 px-4 text-gray-600 hover:text-orange-500 transition-colors"
            aria-label={`Cart with ${cartCount} items`}
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6 mb-1" />
              {/* Cart Badge - Show count only if items exist */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">Cart</span>
          </Link>
          
        </div>
      </div>

      {/* Bottom spacer for mobile navigation - Only on mobile screens */}
      <div className="md:hidden h-16"></div>

      {/* Location Side Panel */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isLocationPanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleLocationPanel}
        ></div>
        
        {/* Side Panel */}
        <div className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isLocationPanelOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Panel Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Select Location</h2>
            <button 
              onClick={toggleLocationPanel}
              onKeyDown={(e) => handleKeyDown(e, toggleLocationPanel)}
              aria-label="Close location panel"
              className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Panel Content */}
          <div className="p-4">
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-medium text-gray-800">Current Location</div>
                <div className="text-sm text-gray-500">Use GPS to find nearby shops</div>
              </button>
              
              <div className="border-t pt-3">
                <div className="text-sm font-medium text-gray-600 mb-2">Popular Cities</div>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors text-gray-700">Mumbai</button>
                  <button className="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors text-gray-700">Delhi</button>
                  <button className="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors text-gray-700">Bangalore</button>
                  <button className="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors text-gray-700">Pune</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Navbar;