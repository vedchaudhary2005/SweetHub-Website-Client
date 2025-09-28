import { Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../hooks/useCart'

const AddtoCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart()

  // Calculate item price based on quantity
  const getItemPrice = (item) => {
    const price = parseInt(item.price.replace('₹', '').replace('/kg', ''))
    return price * item.quantity
  }

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + getItemPrice(item), 0)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cart Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Cart</h1>
          <p className="text-gray-600">{cartItems.length} items in your cart</p>
        </div>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 border-b border-gray-200 last:border-b-0 space-y-4 sm:space-y-0">
                {/* Item Details - Mobile: full width, Desktop: left side */}
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xs font-medium">Sweet</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-gray-800 truncate">{item.name}</h3>
                    <p className="text-orange-600 font-medium text-sm sm:text-base">{item.price}</p>
                    <p className="text-lg font-bold text-gray-800">₹{getItemPrice(item)}</p>
                  </div>
                </div>

                {/* Quantity Controls - Mobile: full width centered, Desktop: right side */}
                <div className="flex items-center justify-center sm:justify-end space-x-4 sm:space-x-3">
                  {/* Decrease Button - Touch-friendly on mobile */}
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors touch-manipulation"
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    <Minus className="w-5 h-5 sm:w-4 sm:h-4 text-gray-600" />
                  </button>
                  
                  {/* Quantity Display - Larger on mobile */}
                  <span className="text-xl sm:text-lg font-semibold text-gray-800 min-w-[3rem] sm:min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  
                  {/* Increase Button - Touch-friendly on mobile */}
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors touch-manipulation"
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    <Plus className="w-5 h-5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Total - Responsive spacing and text sizes */}
            <div className="bg-gray-50 p-4 sm:p-6">
              <div className="flex justify-between items-center">
                <span className="text-lg sm:text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-xl sm:text-2xl font-bold text-orange-600">₹{getTotalPrice()}</span>
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart State
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some delicious sweets to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddtoCart