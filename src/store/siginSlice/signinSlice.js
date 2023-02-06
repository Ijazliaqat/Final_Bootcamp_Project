const { createSlice } = require("@reduxjs/toolkit");
const { siginFullfilledReducer } = require("./signinReducer");
const { signInThunk } = require("./signinThunk");

const initialState = {}

const siginSlice = createSlice({
    name: 'sigin',
    initialState,
    reducers:{

    },

    extraReducers (builder){
        siginFullfilledReducer(builder, signInThunk)
    }
})

export default siginSlice.reducer