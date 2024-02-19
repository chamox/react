export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = (cart) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCarIndex = state.findIndex((item) => item.id === id)

      if (productInCarIndex >= 0) {
        // Una forma de hacerlo
        const newCart = structuredClone(state)
        newCart[productInCarIndex].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }
      updateLocalStorage([...state, { ...action.payload, quantity: 1 }])

      return [...state, { ...action.payload, quantity: 1 }]
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newCart = state.filter((item) => item.id !== id)
      updateLocalStorage(newCart)
      return newCart
    }
    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }
  }
}
