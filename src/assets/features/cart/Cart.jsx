import React from "react";
import LOGO from './../../images/logo.png'

export default function Cart() {
  return (
    <>
      <section className=" my-10">
        <div className="flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[80%] ">

        <div className="w-[60%] h-[500px] rounded-tl-xl rounded-bl-xl py-2 px-5 border-e-2 border-black">
          <article>

          </article>
        </div>
        <div className="w-[40%] h-[500px] flex flex-col  rounded-tr-xl rounded-br-xl py-2 px-5">
          <img src={LOGO} alt="" className="w-[80%] self-end " />
          <p className="m-auto text-3xl text-gray-700 font-serif ">Prix: <span></span> </p>
        </div>
        </div>
      </section>
    </>
  );
}
