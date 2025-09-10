import { useState } from 'react';
import { Home, Search, User, ShoppingCart, HelpCircle, BadgePercent } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  // State to control side panel visibility
  const [isLocationPanelOpen, setIsLocationPanelOpen] = useState(false);

  // Toggle location panel
  const toggleLocationPanel = () => {
    setIsLocationPanelOpen(!isLocationPanelOpen);
  };

  return (
    <>
      {/* Main Navbar - Full Width and Fixed */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 w-full z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Left Section - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo Placeholder */}
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-orange-500">SweetHub</div>
              </div>
              
              {/* Desktop Hamburger for Location */}
              <div className="hidden md:flex items-center">
                <button 
                  onClick={toggleLocationPanel}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-sm">Location</span>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation Items */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Home */}
                <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </a>
                
                {/* Search */}
                <Link 
                  to="/search"
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </Link>
                
                {/* Offers */}
                <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                  <BadgePercent className="w-4 h-4" />
                  <span>Offers</span>
                </a>
                
                {/* Help */}
                <button className="text-gray-700 hover:text-orange-500 transition-colors">
                  <HelpCircle className="w-5 h-5" />
                </button>
                
                {/* Sign In */}
                <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
              </div>
              
              {/* Cart (Always visible) */}
              <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">Cart</span>
              </button>
              
              {/* Mobile Sign Up */}
              <button className="md:hidden text-gray-700 hover:text-orange-500 transition-colors">Sign Up</button>
              
              {/* Mobile Hamburger for Location */}
              <button 
                onClick={toggleLocationPanel}
                className="md:hidden text-gray-700 hover:text-orange-500 transition-colors"
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
      <div className="h-16"></div>

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
              className="text-gray-500 hover:text-gray-700 transition-colors"
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