import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1
}
export const addCartSlice = createSlice({
    name: 'addproduct',
    initialState,
    reducers: {
        increment: (state) =>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        }
    }
})

export const {increment, decrement} = addCartSlice.actions;

export default addCartSlice.reducer