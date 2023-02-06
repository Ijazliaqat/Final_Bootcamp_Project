import { configureStore } from "@reduxjs/toolkit";
import addproductReducer from './addCartSlice/addCartSlice';
import signinReducer from './siginSlice/signinSlice';

export const store = configureStore({
    reducer:{
        addproduct: addproductReducer,
        sigin: signinReducer
    }
})