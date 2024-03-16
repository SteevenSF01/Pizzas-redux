import React from "react";
import { useParams } from "react-router-dom";
import DATA from "./../../../pizza.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ajoutPanier } from "../cart/cartSlice";

export default function Details() {
  const { idPizza = 0 } = useParams();
  const pizza = DATA.pizzas[idPizza];
  const dispatch = useDispatch();

  return (
    <>
      <section className="my-28 flex justify-center relative">
        <Link to="/Pizzas-redux/">
          <span className="absolute left-5 -top-20 size-16 text-[12px] font-serif rounded-full flex items-center justify-center text-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            Retour
          </span>
        </Link>

        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden rounded-xl w-full md:w-[65%] h-fit md:h-full md:flex flex-wrap ">
          <div className="w-full md:w-[48%] h-80 md:h-auto lg:block hidden">
            <img
              src={
                new URL(`/src/assets/images/${pizza.image}`, import.meta.url)
                  .href
              }
              alt=""
              className="h-full w-full object-fill "
            />
          </div>
          <div className="w-full lg:w-[50%] py-5 md:py-10 px-10 flex flex-col justify-center overflow-auto ">
            <h1 className="text-4xl font-serif text-gray-700 capitalize">
              {pizza.nom}
            </h1>
            <p className="text-xl mt-5 text-gray-700 leading-6 font-serif ">
              Description : <br />
              <span className="text-sm font-sans text-black ">
                {pizza.description}
              </span>
            </p>
            <p className="mt-3 font-serif text-gray-700">
              Ingredients:{" "}
              <span className="text-sm font-sans text-black">
                {`${pizza.ingredients.join(" | ")}`}
              </span>
            </p>
            <p className="mt-5 text-xl text-gray-700 font-serif">
              Prix : <span className="text-black"> {pizza.prix} €</span>
            </p>
            <button
              onClick={() => dispatch(ajoutPanier(pizza))}
              className="btn bg-[#e7e6e6] mt-10 self-end md:self-auto"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
