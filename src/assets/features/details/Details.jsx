import React from "react";
import { useParams } from "react-router-dom";
import DATA from "./../../../pizza.json";

export default function Details() {
  const { idPizza = 0 } = useParams();

  const pizza = DATA.pizzas[idPizza];

  return (
    <>
      <section className=" my-28 h-[500px] flex justify-center ">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden rounded-xl w-[65%] h-full flex justify-between">
          <div className="w-[48%] h-full   ">
            <img
              src={
                new URL(`/src/assets/images/${pizza.image}`, import.meta.url)
                  .href
              }
              alt=""
              className="h-full w-full object-fill"
            />
          </div>
          <div className="w-[50%] h-full py-10 px-4 ">
            <h1 className="text-4xl font-serif text-gray-700 capitalize">
              {pizza.nom}
            </h1>
            <p className="text-xl mt-5 text-gray-700 capitalize">
              description : <br />
              <span className="text-sm ">{pizza.description}</span>
            </p>
            <p className="mt-5 text-xl text-gray-700 font-serif">
              Prix : {pizza.prix} €
            </p>
            <button className="btn bg-[#e7e6e6] mt-10 float-right">
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
