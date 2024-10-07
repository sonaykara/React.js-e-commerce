import { createSlice } from '@reduxjs/toolkit'

const getBasketFromLocalStorage = () => {
  let basket = localStorage.getItem('basket')
  if (basket) {
    return JSON.parse(basket)
  } else {
    return []
  }
}



const initialState = {
  basket : getBasketFromLocalStorage(),
  totalPrice : null
  
}

const writeFromBasketToStorge = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }



export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
   addToBasket: (state, action) => {
        const findProduct = state.basket && state.basket.find((product) => product.id === action.payload.id)
        if (findProduct) {
         const extractedBasketItem = state.basket.filter((produtc) => produtc.id !== action.payload.id)
         findProduct.quantity += action.payload.quantity
         state.basket = [...extractedBasketItem, findProduct]
         writeFromBasketToStorge(state.basket)
        } else {
        state.basket = [...state.basket, action.payload ]
        writeFromBasketToStorge(state.basket)
        }
        
  },

  
    totalPriceCalc :  (state) => {
        state.totalPrice = (state.basket.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2)
      },

      updateStateProductQuantity: (state, action) => {
        const findProduct = state.basket.find(
          (basketItems) => basketItems.id === action.payload.id
        );
        if (findProduct) {
          findProduct.quantity = action.payload.quantity;
        }
        writeFromBasketToStorge(state.basket);
      },

      removeItemBasket: (state, action) => {
        const index = state.basket.findIndex(
          (basketItems) => basketItems.id === action.payload
        );
        if (index !== -1) {
          state.basket.splice(index, 1);
          writeFromBasketToStorge(state.basket);
        }
      },
  },

  

 
}) 




export default basketSlice.reducer
export const { addToBasket, totalPriceCalc, updateStateProductQuantity, removeItemBasket} = basketSlice.actions