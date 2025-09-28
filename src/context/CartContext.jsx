import { createContext, useState } from 'react'

// Create Cart Context
const CartContext = createContext()

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('sweetHubCart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
      return []
    }
  })
  // Toast state for cart notifications
  const [toast, setToast] = useState({ message: '', isVisible: false })

  // Add item to cart with toast notification and localStorage persistence
  const addToCart = (sweet) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === sweet.id)
      let newCart
      if (existingItem) {
        newCart = prev.map(item =>
          item.id === sweet.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newCart = [...prev, { ...sweet, quantity: 1 }]
      }
      
      // Save to localStorage
      try {
        localStorage.setItem('sweetHubCart', JSON.stringify(newCart))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
      
      return newCart
    })
    
    // Show toast notification after adding to cart
    showToast('Item added to cart!')
  }

  // Remove item from cart with localStorage persistence
  const removeFromCart = (sweetId) => {
    setCartItems(prev => {
      const newCart = prev.filter(item => item.id !== sweetId)
      // Save to localStorage
      try {
        localStorage.setItem('sweetHubCart', JSON.stringify(newCart))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
      return newCart
    })
  }

  // Increase item quantity with localStorage persistence
  const increaseQuantity = (sweetId) => {
    setCartItems(prev => {
      const newCart = prev.map(item =>
        item.id === sweetId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      // Save to localStorage
      try {
        localStorage.setItem('sweetHubCart', JSON.stringify(newCart))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
      return newCart
    })
  }

  // Decrease item quantity with localStorage persistence
  const decreaseQuantity = (sweetId) => {
    setCartItems(prev => {
      const newCart = prev.map(item =>
        item.id === sweetId 
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      ).filter(item => item.quantity > 0)
      // Save to localStorage
      try {
        localStorage.setItem('sweetHubCart', JSON.stringify(newCart))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
      return newCart
    })
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