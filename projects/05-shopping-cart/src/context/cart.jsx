import { createContext, useState } from 'react'

// 1. crear contexto
export const CartContext = createContext()

// 2. crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // check if the product is in the cart
    const productInCarIndex = cart.findIndex((item) => item.id === product.id)

    if (productInCarIndex >= 0) {
      // Una forma de hacerlo
      const newCart = structuredClone(cart)
      newCart[productInCarIndex].quantity += 1
      return setCart(newCart)
    }

    // Otra forma de hacerlo

    //   producto no esta en el carro
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  const removeFromCart = (product) => {
    setCart((prevState) => {
      return prevState.filter((item) => item.id !== product.id)
    })
  }

  // const removeFromCart2 = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  // }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
