import React from "react";
import DATA from "./../../../pizza.json";

export default function CardsPizzas() {
  return (
    <>
      <section className="flex flex-wrap justify-center gap-5 mt-10">
        {DATA.pizzas.map((pizza, index) => {
          return (
            <div
              key={index}
              className="card card-compact w-60 h-[350px] bg-base-100 shadow-xl"
            >
              <figure className="w-full h-[60%] ">
                <img
                  src={
                    new URL(
                      `/src/assets/images/${pizza.image}`,
                      import.meta.url
                    ).href
                  }
                  className="h-full w-full object-fill"
                  alt={pizza.nom}
                />
              </figure>
              <div className="card-body flex items-center">
                <h2 className="card-title">{pizza.nom}</h2>
                {/* <p>{pizza.description}</p> */}
                <p>{pizza.prix} €</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary ">Ajouter au panier</button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
