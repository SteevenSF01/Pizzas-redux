import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    produits: [],
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        ajoutPanier : (state, action) => {
            const existingProductIndex = state.produits.findIndex(product => product.id === action.payload.id);
            if (existingProductIndex !== -1) {
                state.produits[existingProductIndex].total += 1;
            } else {
                state.produits.push(action.payload);
            }
        },
        ajoutQuantite: (state, action) => {
            const index = state.produits.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.produits[index].total += 1;
            }
        },
        suppQuantite: (state, action) => {
            const index = state.produits.findIndex(product => product.id === action.payload.id);
            if (index !== -1 && state.produits[index].total > 0) {
                state.produits[index].total -= 1;
            }
        },
        removeQuantite: (state, action) => {
            const productId = action.payload;
            state.produits = state.produits.filter(product => product.id !== productId);
        },    
    }
});

export const { ajoutPanier, ajoutQuantite, suppQuantite, removeQuantite } = cartSlice.actions;

export default cartSlice.reducer;