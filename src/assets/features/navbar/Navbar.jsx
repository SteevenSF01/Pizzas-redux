import React from "react";
import LOGO from "./../../images/logo.png";
import CART from "./../../images/cart.svg";
import BaniereHome from "./../../images/baniereHome.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="drawer drawer-end w-full bg-[#e7e6e6] z-20 rounded-br-xl rounded-bl-xl border-b-2 border-black fixed mt-7 ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex items-center  py-2 px-5 ">
          <img src={LOGO} alt="" className="w-[30%] md:w-[7%] h-[100%] " />
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
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
            <Link to="/Pizzas-redux/Cart">
              <button className="btn mt-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
                Payer Maintenant
              </button>
            </Link>
          </ul>
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
