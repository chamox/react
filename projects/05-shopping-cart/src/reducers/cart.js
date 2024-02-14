export const cartInitialState = []
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
        return newCart
      }

      return [...state, { ...action.payload, quantity: 1 }]
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      return state.filter((item) => item.id !== id)
    }
    case 'CLEAR_CART': {
      return cartInitialState
    }
  }
}
