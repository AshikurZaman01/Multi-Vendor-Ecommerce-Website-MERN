import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../baseURL/baseURL";

export const adminLogin = createAsyncThunk('auth/adminLogin', async (info, { rejectWithValue }) => {
    try {

        const { data } = await baseURL.post('admin/adminLogin', info, { withCredentials: true });

        console.log("slice :", data);
        return data;

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred");
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userInfo: null,
        isLoding: false,
        errorMessage: null,
        successMessage: null
    },
    reducers: {

    },

    extraReducers: (builder) => {

    }

})

export default authSlice.reducer;