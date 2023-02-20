import { createSlice } from "@reduxjs/toolkit";

const appAlertSlice = createSlice({
    name: 'appalert',
    initialState:{
        openAlert: false,
        message: ''
    },
    reducers:{
        showAppAlert: (state,action)=>{
            console.log(action.payload);
            state.openAlert = true;
            state.message = action.payload;
        },
        closeAppAlert: (state, action)=>{
            state.openAlert = false;
            state.message = '';
        }
    }
})

export const {showAppAlert, closeAppAlert} = appAlertSlice.actions;
export default appAlertSlice.reducer;