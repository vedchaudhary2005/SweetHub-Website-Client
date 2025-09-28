import { createContext, useState } from 'react'

// Create Cart Context
const CartContext = createContext()

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  // Toast state for cart notifications
  const [toast, setToast] = useState({ message: '', isVisible: false })

  // Add item to cart with toast notification
  const addToCart = (sweet) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === sweet.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === sweet.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...sweet, quantity: 1 }]
    })
    
    // Show toast notification after adding to cart
    showToast('Item added to cart!')
  }

  // Remove item from cart
  const removeFromCart = (sweetId) => {
    setCartItems(prev => prev.filter(item => item.id !== sweetId))
  }

  // Increase item quantity
  const increaseQuantity = (sweetId) => {
    setCartItems(prev => prev.map(item =>
      item.id === sweetId 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }

  // Decrease item quantity
  const decreaseQuantity = (sweetId) => {
    setCartItems(prev => prev.map(item =>
      item.id === sweetId 
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    ).filter(item => item.quantity > 0))
  }

  // Get cart count
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  // Show toast notification
  const showToast = (message) => {
    setToast({ message, isVisible: true })
  }

  // Hide toast notification
  const hideToast = () => {
    setToast({ message: '', isVisible: false })
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      getCartCount,
      toast,
      showToast,
      hideToast
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Export CartContext for custom hook usage
export { CartContext }