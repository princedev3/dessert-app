"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useBearStore } from "./store";

const Price = ({ item }) => {
  const { addToCart  } = useBearStore();

  const [quantity, setQuantity] = useState(0);
 

  const handleAdd = () => {

    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity >= 9 ? prevQuantity : prevQuantity + 1;

      return newQuantity;
    });

  
  };

  useEffect(()=>{
    useBearStore.persist.rehydrate()
  },[])

  const handleAddToCart = ()=>{
    addToCart({
      id:item.id,
      name:item.name,
      price:Number(item.price)*Number(quantity),
      quantity:Number(quantity)
    })
  }

  

 
  return (
    <>
      <div
        className={`${
          quantity >= 1 ? "border-2 border-orange-600" : ""
        } w-full  h-[170px] relative rounded-lg`}
      >
        <Image
          src={item.image}
          className="object-cover rounded-md"
          alt=""
          fill
        />

        <div
          className={`${
            quantity >= 1 ? "hidden" : ""
          }   w-[70%] rounded-[40px]  flex items-center justify-center absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white h-9 gap-2 border border-orange-300`}
        >
          <MdOutlineAddShoppingCart className="text-xl font-medium" />{" "}
          <span className="text-base font-medium ">Add to Cart</span>
        </div>

        <div
          className={`${
            quantity >= 1 ? "flex" : "hidden"
          } group-hover:flex  w-[70%] rounded-[40px]   items-center justify-around z-30 absolute -bottom-4 left-1/2 -translate-x-1/2 bg-orange-700 h-9 gap-2 border border-orange-300  text-white`}
        >
          <span
            className="text-base font-medium  border p-1 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setQuantity(quantity <= 0 ? quantity : quantity - 1)}
          >
            -
          </span>
          <span className="text-base font-medium ">{quantity} </span>
          <span
            className="text-base font-medium  border p-1 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleAdd}
          >
            +
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 p-2">
                        <h1 className="text-md text-gray-600  font-light capitalize">{item.description.slice(0,16)}</h1>
                        <p className="capitalize text-gray-900 font-semibold">{item.name} </p>
                        <div className="flex items-center justify-between">
                        <p className="text-orange-700 text-[12px] font-light cursor-pointer">${item.price} </p>
                          {quantity>0 && <p className="capitalize text-orange-700  cursor-pointer  text-[12px]" onClick={handleAddToCart}>add to cart </p>}
                        </div>
                      </div>

    </>
  );
};

export default Price;
