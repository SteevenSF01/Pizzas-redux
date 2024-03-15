import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    produits: [],
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        ajoutPanier : (state,action) => {
            state.produits.push(action.payload)
        }
    }
})

export const {ajoutPanier} = cartSlice.actions

export default cartSlice.reducer