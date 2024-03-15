import React from "react";
import DATA from "./../../../pizza.json";
import PICk from "./../../images/pickandmix.jpg";

export default function Personalisation() {
  let choixIngredients = new Set();

  DATA.pizzas.forEach((pizza) => {
    pizza.ingredients.forEach((ingredient) => {
      choixIngredients.add(ingredient);
    });
  });

  let ingredientsArray = Array.from(choixIngredients);
  ingredientsArray.pop();

  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="my-10 text-2xl font-serif text-gray-700">
          Liste des ingrédients :
        </h2>
        <div className="w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-xl flex justify-between  flex-wrap lg:flex-nowrap">
          <ul className="w-full flex flex-col gap-y-2">
            {ingredientsArray.map((ingredient, index) => (
              <div
                key={index}
                className="flex justify-between w-full lg:w-[60%] capitalize "
              >
                {ingredient}
                <div className="w-fit h-fit flex gap-x-3 items-center ">
                  <button className="size-7 bg-gray-600 cursor-pointer flex justify-center items-center text-white rounded-full text-lg">
                    {" "}
                    +{" "}
                  </button>{" "}
                  <span className=" text-lg"> 0 </span>{" "}
                  <button className="size-7 bg-gray-600 cursor-pointer flex justify-center items-center text-white rounded-full text-lg">
                    -
                  </button>
                </div>
              </div>
            ))}
          </ul>
          <div className="w-full lg:w-[80%] h-[250px] mt-8 lg:mt-0 md:h-[460px] hidden lg:block rounded-xl overflow-hidden">
            <img src={PICk} alt="" className="h-full w-full object-fill" />
          </div>
        </div>
        <h1 className="my-5 text-2xl font-serif text-gray-700 ">Prix: 0 €</h1>
      </section>
    </>
  );
}
