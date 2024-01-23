import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import ItemActionStyle from "../components/ItemActionStyle";

const initialState = [];
export const WishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addToWishlist:(state,action) => {
            toast.success('Added in Wishlist', ItemActionStyle())
           return [...state,action.payload]
        },
        removeFromWishlist:(state,action) => {
            toast.error('Removed from Wishlist', ItemActionStyle())
           return state.filter(product => product.id !== action.payload)
        },
        clearWishlist : (state) => {
            state =[]
        }
    }
})

export const {addToWishlist}= WishlistSlice.actions
export const {removeFromWishlist} = WishlistSlice.actions
export default WishlistSlice.reducer