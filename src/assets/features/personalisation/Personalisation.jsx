import React from "react";
import { Link } from "react-router-dom";
import PICK from "./../../images/pickandmix.jpg";
import { useDispatch, useSelector } from "react-redux";
import { modifierIngredient } from "./personalisationSlice"; // Importar la acción ajoutPanier
import { ajoutPanier } from "../cart/cartSlice";

export default function Personalisation() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.personalisation.ingredients);
  const pizza = useSelector((state) => state.personalisation.pizza);

  console.log(pizza);

  const prixBasePizza = useSelector(
    (state) => state.personalisation.prixBasePizza
  );
  const prixExtraIngredients = useSelector(
    (state) => state.personalisation.prixExtraIngredients
  );
  const modifyIngredient = (id, operation) => {
    let nouveauTotal = ingredients[id - 1].total;
    if (operation === "ajout") {
      nouveauTotal += 1;
    } else {
      if (nouveauTotal > 0) {
        nouveauTotal -= 1;
      }
    }
    const newIngredientData = {
      total: nouveauTotal,
    };
    dispatch(modifierIngredient({ id, newIngredientData, operation }));
  };

  const prixTotal = prixBasePizza + prixExtraIngredients;

  return (
    <>
      <section className="flex flex-col items-center relative">
        <Link to="/Pizzas-redux/">
          <span className="absolute left-5 top-5 size-16 text-[12px] font-serif rounded-full flex items-center justify-center text-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            Retour
          </span>
        </Link>
        <h2 className="my-10 text-2xl font-serif text-gray-700">
          Liste des ingrédients :
        </h2>
        <div className="w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-xl flex justify-between  flex-wrap lg:flex-nowrap">
          <ul className="w-full flex flex-col gap-y-2">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="flex justify-between w-full lg:w-[70%] capitalize "
              >
                {ingredient.nom}
                <div className="w-[40%] h-fit flex flex-wrap md:flex-nowrap gap-x-3 items-center justify-start ">
                  <button
                    onClick={() =>
                      modifyIngredient(ingredient.id, "suppression")
                    }
                    className="size-7 bg-gray-600 cursor-pointer flex justify-center items-center text-white rounded-full text-lg"
                  >
                    -
                  </button>
                  <span className=" text-lg">{ingredient.total}</span>
                  <button
                    onClick={() => modifyIngredient(ingredient.id, "ajout")}
                    disabled={ingredient.total === 2}
                    className="size-7 bg-gray-600 cursor-pointer flex justify-center items-center text-white rounded-full text-lg"
                  >
                    +
                  </button>
                  <p className="text-gray-700 text-lg ms-3">
                    prix: <span className="text-sm">{ingredient.prix} € </span>
                  </p>
                </div>
              </div>
            ))}
          </ul>
          <div className="w-full lg:w-[80%] h-[250px] mt-8 lg:mt-0 md:h-[460px] hidden lg:block rounded-xl overflow-hidden">
            <img src={PICK} alt="" className="h-full w-full object-fill" />
          </div>
        </div>
        <Link to="/Pizzas-redux/">
          <button
            onClick={() => dispatch(ajoutPanier(pizza))}
            className="btn mt-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          >
            Ajouter au panier
          </button>
        </Link>
        <h1 className="my-5 text-2xl font-serif text-gray-700 ">
          Prix: {prixTotal} €
        </h1>
      </section>
    </>
  );
}
