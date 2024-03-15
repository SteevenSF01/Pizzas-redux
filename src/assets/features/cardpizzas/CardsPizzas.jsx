import React from "react";
import { Link } from "react-router-dom";
import DATA from "./../../../pizza.json";

export default function CardsPizzas() {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex flex-wrap w-[60%] justify-center gap-x-10 gap-y-6 mt-10 text-gray-700">
          {DATA.pizzas.map((pizza, index) => {
            return (
              <div className="card card-compact w-fit h-[400px] bg-base-100 shadow-xl relative">
                <figure className="w-full h-[70%] relative">
                  <img
                    src={
                      new URL(
                        `/src/assets/images/${pizza.image}`,
                        import.meta.url
                      ).href
                    }
                    className="h-full w-full object-fill rounded-lg "
                    alt={pizza.nom}
                  />
                  <p className="p-2 capitalize absolute pb-5 top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {Object.values(pizza.ingredients).join(", ")}
                  </p>
                </figure>
                <div className="card-body flex items-start">
                  <h2 className="card-title capitalize font-serif">
                    {pizza.nom}
                  </h2>
                  <p className=" flex justify-end w-full items-center ">
                    à partir de :{" "}
                    <span className="text-lg font-semibold">
                      &nbsp; {pizza.prix}
                    </span>
                    €
                  </p>
                </div>
                <div className="py-2 px-2 flex gap-x-2">
                  <button className="bg-[#e7e6e6] btn ">
                    Ajouter au panier
                  </button>
                  <Link to={`/Pizzas-redux/Details/${index}`} key={index}>
                    <button className="bg-[#e7e6e6] btn">Plus d'info</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
