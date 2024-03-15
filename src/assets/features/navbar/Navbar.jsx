import React from "react";

// images
import LOGO from "./../../images/logo.png";
import CART from "./../../images/cart.svg";
import BaniereHome from "./../../images/baniereHome.jpg";
import BIN from "./../../images/bin.svg";

//Router
import { Link } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { ajoutQuantite, suppQuantite, removeQuantite } from "../cart/cartSlice";

export default function Navbar() {
  const produits = useSelector((state) => state.cart.produits);
  const dispatch = useDispatch();


  return (
    <>
      <div className="drawer drawer-end w-full bg-[#e7e6e6] z-20 rounded-br-xl rounded-bl-xl border-b-2 border-black fixed mt-7 ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex items-center  py-2 px-5 ">
          <Link to="/Pizzas-redux/" className="w-full">
            <img src={LOGO} alt="" className="w-[50%] md:w-[7%] h-[100%] " />
          </Link>
          <ul className="ms-auto">
            <Link to="/Pizzas-redux/">
              <li className="cursor-pointer">Home</li>
            </Link>
          </ul>
          <label
            htmlFor="my-drawer"
            className="btn bg-transparent border-none drawer-button shadow-xl  w-[50px] ms-5 "
          >
            <img src={CART} alt="" className="w-[100%] " />
          </label>
        </div>
        <div className="drawer-side over ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay w-[98%] "
          ></label>
          <section className="menu p-4 w-80 md:w-96 min-h-full bg-base-200 text-base-content">
            <div>
              {produits.map((produit, index) => {
                return (
                  <div
                    key={index}
                    className="w-[100%] h-fit border-2 flex my-3 rounded-lg overflow-hidden"
                  >
                    <div className="w-[45%] h-full">
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
                    <article className="w-[55%] p-3 ">
                      <p className="capitalize text-[15px] font-serif">
                        {produit.nom}
                      </p>
                      <p className="capitalize text-[15px] font-serif">
                        Prix: <span className="font-sans">{produit.prix}</span>€
                      </p>
                      <div className="flex flex-wrap justify-center gap-x-2 items-center  mt-4 mb-2">
                        <button 
                        onClick={()=> dispatch(ajoutQuantite(produit))}
                        className="w-[30px] h-[30px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                          +
                        </button>
                        <p className="mx-1">{produit.total}</p>
                        <button 
                        onClick={()=> dispatch(suppQuantite(produit))}
                        className="w-[30px] h-[30px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                          -
                        </button>
                      </div>
                        <button 
                        onClick={() => dispatch(removeQuantite(produit))}
                        className="w-full h-[30px] mt-1 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                          <img
                            src={BIN}
                            alt="bin"
                            className="w-full h-full object-fill p-2"
                          />
                        </button>
                    </article>
                  </div>
                );
              })}
            </div>
            <Link to="/Pizzas-redux/Cart">
              <button className="btn mt-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
                Payer Maintenant
              </button>
            </Link>
          </section>
        </div>
      </div>
      <div className="h-[600px] bg-no-repeat bg-cover mt-[-2rem] flex justify-center items-center relative">
        <img
          src={BaniereHome}
          alt="Banière"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />
        <div className="text-center text-white absolute ">
          <h1 className="text-7xl shadow-lg font-serif ">Al volo Pizza</h1>
          <p className="text-lg">En un clin d'œil, un régal !</p>
        </div>
      </div>
    </>
  );
}
