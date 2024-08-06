import { persist } from "zustand/middleware"
import { create } from 'zustand'


const INITIAL_STATE ={
    totalItems:0,
    totalPrice:0,
    product:[]
}


export const useBearStore = create(persist((set,get) => ({
    product:INITIAL_STATE.product,
    totalItems:INITIAL_STATE.totalItems,
    totalPrice:INITIAL_STATE.totalPrice,

    addToCart(item){
        const productInstate = get().product

        const findProductInstate = productInstate.find(each=>each.id ===item.id)

        if(findProductInstate){
            const updatedProduct = productInstate.map(each=>each.id ===findProductInstate.id?{...findProductInstate,price:findProductInstate.price+item.price,quantity:findProductInstate.quantity+item.quantity}:each)
             set(state=>({
                product:updatedProduct,
                totalItems:state.totalItems+item.quantity,
                totalPrice:state.totalPrice+item.price
             }))
        }else{
            set(state=>({
                product:[...state.product,item],
                totalItems:state.totalItems+item.quantity,
                totalPrice:state.totalPrice+item.price
            }))
        }
    },
    removeFromCart(item){
        set(state=>({
            product:state.product.filter(each=>each.id !==item.id),
            totalItems:state.totalItems-item.quantity,
            totalPrice:state.totalPrice-item.price
        }))
    }
  }),{name:"cart",skipHydration:true}))