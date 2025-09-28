import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, Search } from 'lucide-react'
import { useCart } from '../hooks/useCart'

const SearchPage = () => {
  const { addToCart } = useCart()
  // Search state management
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredSweets, setFilteredSweets] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Same sweets data as in SweetsMenu.jsx for consistency
  const sweetsData = [
    {
      id: 1,
      name: "Gulab Jamun",
      rating: 4.5,
      prepTime: "15–20 mins",
      price: "₹120/kg",
      image: "/gulab-jamun.jpg"
    },
    {
      id: 2,
      name: "Rasgulla",
      rating: 4.3,
      prepTime: "20–25 mins",
      price: "₹180/kg",
      image: "/rasgulla.jpg"
    },
    {
      id: 3,
      name: "Kaju Katli",
      rating: 4.7,
      prepTime: "10–15 mins",
      price: "₹800/kg",
      image: "/kaju-katli.jpg"
    },
    {
      id: 4,
      name: "Jalebi",
      rating: 4.2,
      prepTime: "12–18 mins",
      price: "₹200/kg",
      image: "/jalebi.jpg"
    },
    {
      id: 5,
      name: "Laddu",
      rating: 4.4,
      prepTime: "18–22 mins",
      price: "₹250/kg",
      image: "/laddu.jpg"
    },
    {
      id: 6,
      name: "Barfi",
      rating: 4.6,
      prepTime: "15–20 mins",
      price: "₹350/kg",
      image: "/barfi.jpg"
    },
    {
      id: 7,
      name: "Sandesh",
      rating: 4.1,
      prepTime: "20–25 mins",
      price: "₹300/kg",
      image: "/sandesh.jpg"
    },
    {
      id: 8,
      name: "Mysore Pak",
      rating: 4.3,
      prepTime: "25–30 mins",
      price: "₹400/kg",
      image: "/mysore-pak.jpg"
    },
    {
      id: 9,
      name: "Soan Papdi",
      rating: 4.0,
      prepTime: "30–35 mins",
      price: "₹280/kg",
      image: "/soan-papdi.jpg"
    },
    {
      id: 10,
      name: "Ras Malai",
      rating: 4.8,
      prepTime: "35–40 mins",
      price: "₹450/kg",
      image: "/ras-malai.jpg"
    },
    {
      id: 11,
      name: "Peda",
      rating: 4.2,
      prepTime: "15–20 mins",
      price: "₹320/kg",
      image: "/peda.jpg"
    },
    {
      id: 12,
      name: "Kheer",
      rating: 4.4,
      prepTime: "40–45 mins",
      price: "₹150/kg",
      image: "/kheer.jpg"
    }
  ]

  // Handle search functionality with filtering
  const handleSearch = (query) => {
    setSearchQuery(query)
    setIsLoading(true)
    
    // Simulate search delay for better UX
    setTimeout(() => {
      if (query.trim() === '') {
        setFilteredSweets([])
      } else {
        // Filter sweets based on name (case-insensitive)
        const filtered = sweetsData.filter(sweet =>
          sweet.name.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredSweets(filtered)
      }
      setIsLoading(false)
    }, 300)
  }

  // Handle Add to Cart functionality
  const handleAddToCart = (sweet) => {
    addToCart(sweet)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Sweets</h1>
          
          {/* Search Input */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for sweets..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {isLoading ? 'Searching...' : `Search Results for "${searchQuery}" (${filteredSweets.length} found)`}
            </h2>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        )}

        {/* Search Results Grid - Same format as SweetsMenu.jsx */}
        {!isLoading && searchQuery && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSweets.length > 0 ? (
              filteredSweets.map((sweet) => (
                // Each sweet card with same design as SweetsMenu.jsx
                <div 
                  key={sweet.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Sweet Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={sweet.image} 
                      alt={sweet.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-500 text-sm">Sweet Image</span>
                    </div>
                  </div>

                  {/* Sweet Details */}
                  <div className="p-4">
                    {/* Sweet Name */}
                    <h3 className="font-bold text-lg text-gray-800 mb-2 truncate">{sweet.name}</h3>
                    
                    {/* Rating and Preparation Time */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{sweet.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">{sweet.prepTime}</span>
                    </div>
                    
                    {/* Price */}
                    <p className="text-sm font-semibold text-orange-600 mb-2">{sweet.price}</p>
                    
                    {/* Add to Cart Button - Functional */}
                    <button 
                      onClick={() => handleAddToCart(sweet)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // No results found message
              <div className="col-span-full text-center py-12">
                <div className="text-gray-500">
                  <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No sweets found</h3>
                  <p className="text-gray-500">Try searching with different keywords</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Default state when no search query */}
        {!searchQuery && (
          <div className="text-center py-12">
            <Search className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Search for your favorite sweets</h3>
            <p className="text-gray-500">Enter a sweet name in the search box above to find delicious options</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage