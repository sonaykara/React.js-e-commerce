import { configureStore } from '@reduxjs/toolkit'
import productReducer  from '../features/productSlice.jsx'
import basketSlice from '../features/basketSlice.jsx'


export const store = configureStore({
  reducer: {
    productReducer ,
    basketSlice
  },
})

