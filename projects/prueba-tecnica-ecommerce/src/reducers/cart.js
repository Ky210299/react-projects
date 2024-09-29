
export const initialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const reducer = (state, action) => {
  const { type, payload } = action;

  const saveCartOnLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
  }

  switch (type) {
    case 'ADD_TO_CART': {
      const { id } = payload
      const productIndex = state.findIndex(item => item.id === id);

      if (productIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productIndex].quantity += 1;
        saveCartOnLocalStorage(newCart);
        return newCart
      } else {
        const newCart = [...state];
        newCart.push({ ...payload, quantity: 1 });
        saveCartOnLocalStorage(newCart);
        return newCart
      }
    }
    case 'REMOVE_FROM_CART': {
      const { id } = payload;
      const newCart = state.filter(item => item.id !== id);
      saveCartOnLocalStorage(newCart);
      return newCart;
    }
    case 'CLEAR_CART': {
      saveCartOnLocalStorage([]);
      return []
    }
  }
  return state
}



