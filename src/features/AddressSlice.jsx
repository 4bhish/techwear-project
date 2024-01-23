import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const AddressSlice = createSlice({
    name:'addresses',
    initialState,
    reducers:{
        addAddress:(state,action) => {
            return [...state,action.payload]
        },
        editAddressAction:(state,action) => {
            return state.map(address =>  address.id === action.payload.id ? action.payload : address)
        },
        removeAddress:(state,action) => {
            return state.filter(address => address.id !== action.payload)
        },
    }
})

export const {addAddress,removeAddress,editAddressAction} = AddressSlice.actions

export default AddressSlice.reducer