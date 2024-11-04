import { createSlice } from "@reduxjs/toolkit";

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

    extraReducers: (builder) => { }

})

export default authSlice.reducer;