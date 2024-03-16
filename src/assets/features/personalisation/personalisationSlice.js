import { createSlice } from "@reduxjs/toolkit";
import DATA from './../../../pizza.json';

const initialState = {
    pizza: { ...DATA.pizzas[6], ingredients: [] }, 
    ingredients: DATA.ingredients,
    prixExtraIngredients: 0,
    prixBasePizza: DATA.pizzas[6].prix
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        ajoutPickandmix : (state, action) => {
            state.pizza.ingredients = [];
            
            state.pizza.ingredients = state.ingredients.filter(ingredient => ingredient.total > 0);

            state.pizza.prixActuel = state.prixBasePizza + state.prixExtraIngredients;
        },
        modifierIngredient: (state, action) => {
            const { id, newIngredientData, operation } = action.payload;
            const index = state.ingredients.findIndex(ingredient => ingredient.id === id);
            if (index !== -1) {
                if (operation === 'ajout') {
                    state.pizza.ingredients.push(state.ingredients[index]);
                    state.pizza.prixActuel += state.ingredients[index].prix;
                } else if (operation === 'suppression' && state.ingredients[index].total > 0) {

                    const ingredientaSupp = state.ingredients[index];
                    const ingredientIndex = state.pizza.ingredients.findIndex(item => item.id === ingredientaSupp.id);
                    if (ingredientIndex !== -1) {
                        state.pizza.ingredients.splice(ingredientIndex, 1);
                        state.pizza.prixActuel -= ingredientaSupp.prix;
                    }
                }
            }

            state.ingredients[index] = { ...state.ingredients[index], ...newIngredientData };

            state.prixExtraIngredients = state.ingredients.reduce((total, ingredient) => {
                return total + ingredient.total * ingredient.prix;
            }, 0);
        },
    }
});

export const { modifierIngredient, ajoutPickandmix } = pizzaSlice.actions;

export default pizzaSlice.reducer;