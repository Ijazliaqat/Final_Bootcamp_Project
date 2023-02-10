import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios/axios';

export const getAllProductsThunk = createAsyncThunk('products',
    async (token) => {
        console.log(token);
        try {
            const response = await axios.get('/all-products')
            console.log(response);
            return response.data
        } catch (error) {
            console.log(error.response.data.message);
            // alert(error.response.data.message)
            return error.response.data.message
        }

    }
)

const initialState = {
    productsArr: [],
}

const allProductsSlice = createSlice({
    name: "allproducts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
            state.productsArr = action.payload;
        })
    }
})


export default allProductsSlice.reducer;