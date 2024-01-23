import { configureStore } from "@reduxjs/toolkit";
import {WishlistSlice} from "../features/WishlistSlice";
import {CartSlice} from "../features/CartSlice";
import { AddressSlice } from "../features/AddressSlice";

export default configureStore({
    reducer:{
        wishlist:WishlistSlice.reducer,
        cart:CartSlice.reducer,
        addresses:AddressSlice.reducer
    }
})