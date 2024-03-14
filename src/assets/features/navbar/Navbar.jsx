import React from "react";
import LOGO from "./../../images/logo.png";
import CART from "./../../images/cart.svg";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        <div className="drawer drawer-end w-full bg-[#e7e6e6] rounded-br-xl rounded-bl-xl">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center  py-2 px-5 ">
            <img src={LOGO} alt="" className="w-[30%] md:w-[7%] h-[100%] " />
            <ul className="ms-auto">
              <li>Home</li>
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
            </ul>
          </div>
        </div>
        <Outlet />
    </>
  );
}
