import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { sweetsData } from '../data/sweetsData'

const SweetsMenu = () => {
  const { addToCart } = useCart()
  
  // Handle Add to Cart functionality
  const handleAddToCart = (e, sweet) => {
    e.preventDefault() // Prevent Link navigation
    addToCart(sweet)
  }
  
  // Using centralized sweets data - imported from data/sweetsData.js

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Popular Sweets</h2>
          <p className="text-gray-600">Discover delicious traditional and modern sweets</p>
        </div>

        {/* Responsive Grid Layout - 4 cards (desktop), 2 cards (tablet), 1 card (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sweetsData.map((sweet) => (
            // Sweet card without navigation - details page not implemented yet
            <div 
              key={sweet.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Sweet Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                {/* Sweet image with proper rendering and fallback */}
                <img 
                  src={sweet.image} 
                  alt={sweet.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder - hidden by default, shown only if image fails */}
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
                
                {/* Add to Cart Button */}
                <button 
                  onClick={(e) => handleAddToCart(e, sweet)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SweetsMenu