"use client";
import desserts from "@/data";
import Image from "next/image";
import React, { useState } from "react";

import Price from "./Price";
import Cart from "./Cart";

const Homes = () => {
  return (
    <>
    <h1 className="text-2xl my-4 font-medium uppercase text-black ">dessert</h1>
    <div className="flex items-center flex-col-reverse md:flex-row gap-4 md:gap- ">
     
      <div className=" w-full  md:w-[65%] lg:w-[70%] flex flex-wrap  gap-6 md:gap-8 lg:gap-6 ">
        {desserts?.map((item) => (
          <div
            key={item.id}
            className={` w-full sm:w-[45%] lg:w-[30%] h-[320px]   md:h-[290px] flex flex-col justify-between shadow-lg  shadow-orange-100 rounded-b-lg group`}
          >
            <Price item={item} />
          </div>
        ))}
      </div>
      <div className="w-full md:w-[35%] lg:w-[30%] self-start  ">
        <Cart />
      </div>
    </div>
    </>
  );
};

export default Homes;
