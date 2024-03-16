

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import DATA from "./../../../pizza.json";
// import { useDispatch } from "react-redux";
// import { ajoutPanier } from "../cart/cartSlice";

// export default function CardsPizzas() {
//   const dispatch = useDispatch();
//   const [ingredientChoisi, setIngredientChoisi] = useState("all");
//   const [orderPrice, setFiltrerPrix] = useState("none");

//   let pizzasFiltrer =
//     ingredientChoisi === "all"
//       ? DATA.pizzas
//       : DATA.pizzas.filter((pizza) =>
//           pizza.ingredients.some(
//             (ingredient) =>
//               ingredient.toLowerCase() === ingredientChoisi.toLowerCase()
//           )
//         );

//   if (orderPrice === "croissant") {
//     pizzasFiltrer = pizzasFiltrer.slice().sort((a, b) => a.prix - b.prix);
//   } else if (orderPrice === "décroissant") {
//     pizzasFiltrer = pizzasFiltrer.slice().sort((a, b) => b.prix - a.prix);
//   }

//   return (
//     <>
//       <div className="flex flex-wrap items-center justify-center md:justify-between mt-5 ms-5 gap-3">
//         <div className="md:w-1/2">
//           <label htmlFor="ingredients" className="font-serif">
//             Filtre:{" "}
//           </label>
//           <select
//             name="ingredients"
//             id="ingredients"
//             className="rounded-lg px-5 py-1 border-2"
//             onChange={(e) => setIngredientChoisi(e.target.value)}
//             value={ingredientChoisi}
//           >
//             <option value="all">All</option>
//             {DATA.ingredients.map((ingredient, index) => (
//               <option value={ingredient.nom} key={index}>
//                 {ingredient.nom}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="md:w-1/2">
//           <label htmlFor="orderPrice" className="font-serif">
//             Ordre Prix:{" "}
//           </label>
//           <select
//             className="rounded-lg px-5 py-1 border-2"
//             onChange={(e) => setFiltrerPrix(e.target.value)}
//             value={orderPrice}
//           >
//             <option value="none">None</option>
//             <option value="croissant">Prix croissant</option>
//             <option value="décroissant">Prix décroissant</option>
//           </select>
//         </div>
//       </div>
//       <section className="flex justify-center flex-wrap px-5">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-gray-700">
//           {pizzasFiltrer.map((pizza, index) => (
//             <div
//               key={index}
//               className="card card-compact bg-base-100 shadow-xl relative"
//             >
//               <figure className="h-[70%] relative">
//                 <img
//                   src={
//                     new URL(
//                       `/src/assets/images/${pizza.image}`,
//                       import.meta.url
//                     ).href
//                   }
//                   className="h-full w-full object-fill rounded-t-lg"
//                   alt={pizza.nom}
//                 />
//                 <p className="p-2 capitalize absolute pb-5 top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
//                   {Object.values(pizza.ingredients).join(", ")}
//                 </p>
//               </figure>
//               <div className="card-body flex flex-col items-start p-4">
//                 <h2 className="card-title capitalize font-serif">
//                   {pizza.nom}
//                 </h2>
//                 <p className="flex justify-between w-full items-center">
//                   <span>Prix:</span>
//                   <span className="text-lg font-semibold">{pizza.prix} €</span>
//                 </p>
//                 <div className="w-full flex justify-around">
//                   <Link
//                     to={
//                       index == 6
//                         ? "/Pizzas-redux/Personalisation/"
//                         : "/Pizzas-redux/"
//                     }
//                   >
//                     <button
//                       onClick={
//                         pizza.id === 7
//                           ? null
//                           : () => dispatch(ajoutPanier(pizza))
//                       }
//                       className="bg-[#e7e6e6] btn mt-2"
//                     >
//                       Ajouter au panier
//                     </button>
//                   </Link>
//                   <Link to={`/Pizzas-redux/Details/${index}`} key={index}>
//                     <button className="bg-[#e7e6e6] btn mt-2">
//                       Plus d'info
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }



import React, { useState } from "react";
import { Link } from "react-router-dom";
import DATA from "./../../../pizza.json";
import { useDispatch } from "react-redux";
import { ajoutPanier } from "../cart/cartSlice";

export default function CardsPizzas() {
  const dispatch = useDispatch();
  const [ingredientChoisi, setIngredientChoisi] = useState("all");
  const [orderPrice, setFiltrerPrix] = useState("none");

  let pizzasFiltrer =
    ingredientChoisi === "all"
      ? DATA.pizzas
      : DATA.pizzas.filter((pizza) =>
          pizza.ingredients.some(
            (ingredient) =>
              ingredient.toLowerCase() === ingredientChoisi.toLowerCase()
          )
        );

  if (orderPrice === "croissant") {
    pizzasFiltrer = pizzasFiltrer.slice().sort((a, b) => a.prix - b.prix);
  } else if (orderPrice === "décroissant") {
    pizzasFiltrer = pizzasFiltrer.slice().sort((a, b) => b.prix - a.prix);
  }

  return (
    <>
      <div className="flex flex-wrap items-center mt-5 ms-5 gap-3">
        <label htmlFor="ingredients" className="font-serif">
          Filtre:{" "}
        </label>
        <select
          name="ingredients"
          id="ingredients"
          className="rounded-lg px-5 py-1 border-2"
          onChange={(e) => setIngredientChoisi(e.target.value)}
          value={ingredientChoisi}
        >
          <option value="all">All</option>
          {DATA.ingredients.map((ingredient, index) => (
            <option value={ingredient.nom} key={index}>
              {ingredient.nom}
            </option>
          ))}
        </select>
        <div>
          <label htmlFor="orderPrice" className="font-serif">
            Ordre Prix:{" "}
          </label>
          <select
            className="rounded-lg px-5 py-1 border-2"
            onChange={(e) => setFiltrerPrix(e.target.value)}
            value={orderPrice}
          >
            <option value="none">None</option>
            <option value="croissant">Prix croissant</option>
            <option value="décroissant">Prix décroissant</option>
          </select>
        </div>
      </div>
      <section className="flex justify-center flex-wrap px-10">
        <div className="flex flex-wrap w-full justify-center gap-x-5 gap-y-10 mt-10 text-gray-700">
          {pizzasFiltrer.map((pizza, index) => (
            <div
              key={index}
              className="card card-compact w-full sm:w-[35%] lg:w-[30%] xl:w-[20%]  bg-base-100 shadow-xl relative"
            >
              <figure className="w-full h-48 sm:h-56 md:h-64 lg:h-72 relative">
                <img
                  src={
                    new URL(
                      `/src/assets/images/${pizza.image}`,
                      import.meta.url
                    ).href
                  }
                  className="h-full w-full object-fill rounded-t-lg"
                  alt={pizza.nom}
                />
                <p className="p-2 capitalize absolute pb-5 top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {Object.values(pizza.ingredients).join(", ")}
                </p>
              </figure>
              <div className="card-body flex flex-col items-center justify-between p-4">
                <h2 className="card-title capitalize font-serif text-center">
                  {pizza.nom}
                </h2>
                <p className="text-lg font-semibold mt-2 font-serif">
                  Prix: <span className="font-sans font-semibold">{pizza.prix}</span> €
                </p>
                <div className="flex justify-between w-full mt-4">
                  <Link
                    to={
                      index === 6
                        ? "/Pizzas-redux/Personalisation/"
                        : "/Pizzas-redux/"
                    }
                  >
                    <button
                      onClick={
                        pizza.id === 7
                          ? null
                          : () => dispatch(ajoutPanier(pizza))
                      }
                      className="bg-[#e7e6e6] btn mr-2"
                    >
                      Ajouter au panier
                    </button>
                  </Link>
                  <Link to={`/Pizzas-redux/Details/${index}`} key={index}>
                    <button className="bg-[#e7e6e6] btn ml-2">
                      Plus d'info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
