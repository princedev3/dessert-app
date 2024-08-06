"use client"
import React, { useEffect } from 'react'
import { LuTreeDeciduous } from "react-icons/lu";
import { useBearStore } from './store';

const Cart = () => {
   const {totalItems,product,totalPrice,removeFromCart} = useBearStore()

   useEffect(()=>{
    useBearStore.persist.rehydrate()
  },[])

  console.log(product)
  return (
    <div>
        <div className=" p-4 bg-white rounded-md">
            <div className="flex flex-col gap-7">
            <h1 className=" font-bold text-orange-700">Your Cart ({totalItems}) </h1>
            {
                product.map(each=>(

            <div className="flex justify-between items-center border-b pb-2">
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-bold tracking-wide">{each.name} </h2>
                    <div className="text-orange-700 text-sm flex gap-2">
                        <span className="" ><b className='text-sm text-orange-700' >{each.quantity} </b>x</span>
                        
                        <div className='flex'>
                        <span className="text-gray-600 text-[11px] ">@</span>
                        <p className="text-gray-500 ">${Number(each.price)/Number(each.quantity)}</p> 
                        </div>
                        <p className="text-gray-500">${Number(each.price) }</p>
                    </div>
                </div>
            <span onClick={()=>removeFromCart(each)} className="w-4 h-4 cursor-pointer   relative rounded-full flex items-center justify-center text-gray-500  border border-gray-500"><span className='pb-[2px] absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2'>x</span></span>
            </div>
                ))
            }
         

           

            <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center ">
              <span className="">order total </span>
              <span className="text-lg font-semibold">${totalPrice} </span>
            </div>

            <div className="flex md:justify-between gap-1 lg:justify-around  justify-around items-center rounded-lg w-[90%] md:w-full mx-auto bg-orange-50 p-4">
            <LuTreeDeciduous className='text-green-600' />
            <span className="text-[13px] "> the <b className="">carbon-neutral</b> delivery </span>
            </div>
             <button className='bg-orange-700 text-white capitalize font-medium w-[90%] md:w-full mx-auto py-2 rounded-3xl '>confirm order</button>

            </div>
         
            </div>
        </div>
    </div>
  )
}

export default Cart