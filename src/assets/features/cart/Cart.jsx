import React from "react";
import LOGO from "./../../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
  const produits = useSelector((state) => state.cart.produits);
  return (
    <>
      <section className=" my-20 relative">
        <Link to="/Pizzas-redux/">
          <span className="absolute left-5 -top-16 size-14 text-[12px] font-serif rounded-full flex items-center justify-center text-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            Retour
          </span>
        </Link>
        <div className="flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[80%] ">
          <div className="w-[60%] h-[500px] rounded-tl-xl rounded-bl-xl py-2 px-5 border-e-2 border-black">
            <article>
              {produits.map((element, index) => {
                return (
                  <div key={index}>
                    <p>{element.nom} </p>
                    <p>{element.prix} € </p>
                  </div>
                );
              })}
            </article>
          </div>
          <div className="w-[40%] h-[500px] flex flex-col  rounded-tr-xl rounded-br-xl py-2 px-5">
            <img src={LOGO} alt="" className="w-[80%] self-end " />
            <p className="m-auto text-3xl text-gray-700 font-serif ">
              Prix: <span></span>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}