import React from "react";
import DATA from "./../../../pizza.json";

export default function CardsPizzas() {
  return (
    <>
    <section className="flex justify-center">

      <div className="flex flex-wrap w-[60%] justify-center gap-x-10 gap-y-6 mt-10">
        {DATA.pizzas.map((pizza, index) => {
          return (
            <div
              key={index}
              className="card card-compact w-64 h-[350px] bg-base-100 shadow-xl"
            >
              <figure className="w-full h-[70%] ">
                <img
                  src={
                    new URL(
                      `/src/assets/images/${pizza.image}`,
                      import.meta.url
                    ).href
                  }
                  className="h-full w-full object-fill rounded-lg"
                  alt={pizza.nom}
                />
              </figure>
              <div className="card-body flex items-start">
                <h2 className="card-title capitalize font-serif">{pizza.nom}</h2>
                <p className=" flex justify-end w-full items-center "> à partir de : <span className="text-lg font-semibold"> &nbsp; {pizza.prix}</span> €</p>
                <div className="card-actions justify-end">
                  <button className="bg-[#e7e6e6] btn ">Ajouter au panier</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </section>

    </>
  );
}
