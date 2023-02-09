import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const singleProuctSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    singleProductItem: (state,action)=>{
        console.log(action.payload);
    }
  },
});

export const {singleProductItem} = singleProuctSlice.actions;
export default singleProuctSlice.reducer;