import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './assets/features/cart/cartSlice'
import personalisationReducer from './assets/features/personalisation/personalisationSlice'

export const store = configureStore({
    devTools: true, 
    reducer : {
        cart: cartReducer ,
        personalisation: personalisationReducer,
    }
})