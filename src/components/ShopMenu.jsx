import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const ShopMenu = () => {
  // Dummy shop data array - future-ready for API integration
  const shopData = [
    {
      id: 1,
      name: "Sainik Sweets",
      rating: 4.3,
      deliveryTime: "50–60 mins",
      category: "Sweets, Desserts, Beverages",
      location: "Near Baba Chauraha,Ashok Nagar",
      image: "/Shop1.png"
    },
    {
      id: 2,
      name: "kamdhenu",
      rating: 4.1,
      deliveryTime: "60–70 mins",
      category: "Traditional Sweets, Fast Food",
      location: "Civil Lines,Prayagraj",
      image: "/Kamdhenu1.png"
    },
    {
      id: 3,
      name: "Hira Halwai & Sons",
      rating: 4.5,
      deliveryTime: "45–55 mins",
      category: "Cakes, Pastries, Ice Cream",
      location: "Mahol Chaurah, Prayagraj",
      image: "/Hira-Halwai1.png"
    },
    {
      id: 4,
      name: "Netram Moolchand",
      rating: 4.2,
      deliveryTime: "55–65 mins",
      category: "Indian Sweets, Snacks",
      location: "259,Old Katra Chauraha",
      image: "/netram-moolchand-and-sons.png"
    },
    {
      id: 5,
      name: "XYZ",
      rating: 4.4,
      deliveryTime: "40–50 mins",
      category: "Chocolates, Truffles, Gifts",
      location: "Mall Road",
      image: "/placeholder-shop5.jpg"
    },
    {
      id: 6,
      name: "XYZ",
      rating: 4.0,
      deliveryTime: "65–75 mins",
      category: "Premium Sweets, Dry Fruits",
      location: "Heritage Plaza",
      image: "/placeholder-shop6.jpg"
    },
     {
      id: 7,
      name: "XYZ",
      rating: 4.0,
      deliveryTime: "65–75 mins",
      category: "Premium Sweets, Dry Fruits",
      location: "Heritage Plaza",
      image: "/placeholder-shop6.jpg"
    },
     {
      id: 8,
      name: "XYZ",
      rating: 4.0,
      deliveryTime: "65–75 mins",
      category: "Premium Sweets, Dry Fruits",
      location: "Heritage Plaza",
      image: "/placeholder-shop6.jpg"
    },
     {
      id: 9,
      name: "XYZ",
      rating: 4.0,
      deliveryTime: "65–75 mins",
      category: "Premium Sweets, Dry Fruits",
      location: "Heritage Plaza",
      image: "/placeholder-shop6.jpg"
    },
     {
      id: 10,
      name: "XYZ",
      rating: 4.0,
      deliveryTime: "65–75 mins",
      category: "Premium Sweets, Dry Fruits",
      location: "Heritage Plaza",
      image: "/placeholder-shop6.jpg"
    },
     {
      id: 11,
      name: "XYZ",
      rating: 4.0,
      deliveryTime: "65–75 mins",
      category: "Premium Sweets, Dry Fruits",
      location: "Heritage Plaza",
      image: "/placeholder-shop6.jpg"
    },
     {
      id: 12,
      name: "XYZ",
      rating: 4.0,
      deliveryTime: "65–75 mins",
      category: "Premium Sweets, Dry Fruits",
      location: "Heritage Plaza",
      image: "/placeholder-shop6.jpg"
    },
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Sweet Shops Near You</h2>
          <p className="text-gray-600">Discover the best sweet shops in your area</p>
        </div>

        {/* Responsive Grid Layout - 4 cards (desktop), 2 cards (tablet), 1 card (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopData.map((shop) => (
            // Each card is fully clickable using Link for navigation
            <Link 
              key={shop.id}
              to={`/shop/${shop.id}`} 
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Shop Image with Offer Overlay */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                {/* Fixed: Replaced placeholder div with proper img tag for image rendering */}
                {/* Images will now display properly and fit cleanly like Swiggy/Zomato cards */}
                <img 
                  src={shop.image} 
                  alt={shop.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder - hidden by default, shown only if image fails */}
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-500 text-sm">Shop Image</span>
                </div>                
               
              </div>

              {/* Shop Details */}
              <div className="p-4">
                {/* Shop Name */}
                <h3 className="font-bold text-lg text-gray-800 mb-2 truncate">{shop.name}</h3>
                
                {/* Rating and Delivery Time */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{shop.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">{shop.deliveryTime}</span>
                </div>
                
                {/* Shop Category */}
                <p className="text-sm text-gray-600 mb-2 truncate">{shop.category}</p>
                
                {/* Location */}
                <p className="text-sm text-gray-500">{shop.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopMenu
