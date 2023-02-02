import { configureStore } from "@reduxjs/toolkit";
import addproductReducer from './addCartSlice/addCartSlice';
export const store = configureStore({
    reducer:{
        addproduct: addproductReducer
    }
})