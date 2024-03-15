import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './assets/features/cart/cartSlice'

export const store = configureStore({
    devTools: true, 
    reducer : {
        cart: cartReducer , 
    }
})