// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     produits: [],
// };

// const cartSlice = createSlice({
//     name : 'cart',
//     initialState,
//     reducers : {
//         ajoutPanier : (state,action) => {
//             state.produits.push(action.payload)
//         },
//         ajoutQuantite: (state,action) => {
//             state.produits.total = [...state, total = total+1 ]
//         }
//     }
// })

// export const {ajoutPanier, ajoutQuantite} = cartSlice.actions

// export default cartSlice.reducer

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
        }
    }
});

export const { ajoutPanier, ajoutQuantite } = cartSlice.actions;

export default cartSlice.reducer;
