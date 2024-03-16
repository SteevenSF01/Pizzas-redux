import React from "react";
import LOGO from "./../../images/logo.png";
import BIN from "./../../images/bin.svg";
import { Link } from "react-router-dom";
import { ajoutQuantite, removeQuantite } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const produits = useSelector((state) => state.cart.produits);
  return (
    <>
      <section className=" my-20 relative">
        <Link to="/Pizzas-redux/">
          <span className="absolute left-5 -top-16 size-14 text-[12px] font-serif rounded-full flex items-center justify-center text-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            Retour
          </span>
        </Link>
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full md:w-[65%] rounded-tr-xl rounded-br-xl ">
          <div className="w-full md:w-[80%] h-[500px] rounded-tl-xl rounded-bl-xl py-2 px-5 border-e-2 border-black scrollBar-thumb overflow-y-auto">
            {produits.map((produit, index) => {
              return (
                <div
                  key={index}
                  className="w-[100%] h-[170px]  border-2 flex my-3 rounded-lg overflow-hidden"
                >
                  <div className="w-[35%] h-full">
                    <img
                      src={
                        new URL(
                          `/src/assets/images/${produit.image}`,
                          import.meta.url
                        ).href
                      }
                      alt=""
                      className="h-[100%] w-[100%] "
                    />
                  </div>
                  <article className="w-[70%] p-3 ">
                    <p className="capitalize text-[15px] font-serif">
                      {produit.nom}
                    </p>
                    <div className="flex justify-between">
                      <p className="capitalize text-[15px] font-serif">
                        Prix: <span className="font-sans">{produit.prix}</span>€
                      </p>
                      <p className="capitalize text-[15px] font-serif">
                        Prix total:{" "}
                        <span className="font-sans">{produit.prixActuel} </span>
                        €
                      </p>
                    </div>
                    <div className="flex flex-wrap w-full justify-center gap-x-2 items-center  mt-4 mb-2">
                      <button
                        onClick={() => dispatch(ajoutQuantite(produit))}
                        className="w-[30px] h-[30px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                      >
                        +
                      </button>
                      <p className="mx-1">{produit.total}</p>
                      <button
                        onClick={() => dispatch(suppQuantite(produit))}
                        className="w-[30px] h-[30px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                      >
                        -
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => dispatch(removeQuantite(produit.id))}
                        className="w-[250px] h-[30px] mt-1 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                      >
                        <img
                          src={BIN}
                          alt="bin"
                          className="w-full h-full object-fill p-2"
                        />
                      </button>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
          <div className="w-[40%] my-10 md:my-0 md:h-[500px] flex flex-col  rounded-tr-xl rounded-br-xl py-2 px-5">
            <img src={LOGO} alt="" className="w-[80%] self-center " />
            <p className="m-auto text-xl md:text-3xl py-5 text-gray-700 font-serif ">
              Prix: <span></span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
