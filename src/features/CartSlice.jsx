import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import ItemActionStyle from "../components/ItemActionStyle";

const initialState = []

export const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action) => {
            toast.success('Added in Cart',ItemActionStyle())
          return  [...state,{...action.payload,quantity:1}]
        },
        removeFromCart:(state,action) =>{
            toast.error('Added in Cart',ItemActionStyle())
            return state.filter((product) => product.id !== action.payload)
        },
        addQty:(state,action) => {
            return state.map(product => product.id === action.payload ? {...product,quantity:product.quantity + 1} : product)
        },
        removeQty:(state,action) => {
            return state.map(product => product.id === action.payload ? {...product,quantity:product.quantity - 1} : product)
        },
        clearCart:(state) => {
           return state = []
        }
    }
})

export const {addToCart,removeFromCart,addQty,removeQty,clearCart} = CartSlice.actions
export default CartSlice.reducer