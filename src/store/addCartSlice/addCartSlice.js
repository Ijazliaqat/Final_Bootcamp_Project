import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
    cartItems: []
}
export const addCartSlice = createSlice({
    name: 'addproduct',
    initialState,
    reducers: {
        increment: (state, action) => {
            const { id } = action.payload;
            const index = state.cartItems.findIndex(item => item.id === id);
            if (index !== -1) {
                state.cartItems[index].quantity += 1;
            }
        },
        decrement: (state,action) => {
            const { id } = action?.payload;
            console.log(id);
            const index = state?.cartItems.findIndex(item => item?.id === id);
            if (index !== -1) {
                if (state.cartItems[index].quantity === 1) {
                    state.splice(index, 1);
                } else {
                    state.cartItems[index].quantity -= 1;
                }
            }
        },
        addToCartItem: (state, action) => {
            console.log(action.payload);
            const { id , quantity } = action.payload;
            const index = state?.cartItems.findIndex(item => item?.id === id);

            if (index !== -1) {
                state.cartItems[index].quantity += quantity;
            } else {
                state.cartItems.push(action.payload)
            }

        },
        removeItem: (state, action) => {
          const index = state.cartItems.findIndex(item => item.id === action.payload.id);
          if (index !== -1) {
            state.cartItems.splice(index, 1);
          }
        },
        clearCart: state => {
          return state.cartItems=[];
        },
    }
})

export const { increment, decrement, addToCartItem,removeItem,clearCart } = addCartSlice.actions;

export default addCartSlice.reducer