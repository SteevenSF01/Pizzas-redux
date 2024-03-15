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
            const index = state.produits.findIndex(product => product.id === action.payload.id);
            if (index !== -1 ) {
                state.produits[index].total = 0;
            }
        },
    }
});

export const { ajoutPanier, ajoutQuantite, suppQuantite, removeQuantite } = cartSlice.actions;

export default cartSlice.reducer;
