import { configureStore } from "@reduxjs/toolkit";
import addproductReducer from './addCartSlice/addCartSlice';
import signinReducer from './auth/signinSlice';

export const store = configureStore({
    reducer:{
        addproduct: addproductReducer,
        sigin: signinReducer
    }
})