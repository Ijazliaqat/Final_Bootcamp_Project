import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios/axios';

export const signInThunk = createAsyncThunk('auth/signin',
    async (values, rejectWithValue) => {
        try {
            console.log(values);
            const res = axios.put('authentication/log-in', values)
            return res.data
        } catch (err) {
            console.log(err);

            return err.response.data.message
        }
    }
)