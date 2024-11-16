import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../baseURL/baseURL";


export const addCategory = createAsyncThunk("category/addCategory", async (formData, { rejectWithValue, fulfillWithValue }) => {
    try {


        console.log("formData : ", formData)
    
        const { data } = await baseURL.post('admin/addCategory', formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log("data : ", data)

    } catch (error) {
        console.log("error : ", error.message)
        return rejectWithValue(error.response.data.message)
    }
})

const categorySlice = createSlice({
    name: "category",

    initialState: {
        categories: [],
        loading: false,
        successMsg: null,
        errorMsg: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(addCategory.pending, (state) => {
                state.loading = true;
                state.errorMsg = null;
                state.successMsg = null;
            })
            .addCase(addCategory.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.categories = payload;
                state.successMsg = payload;
                state.errorMsg = null;
            })
            .addCase(addCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.errorMsg = payload;
                state.successMsg = null;
            })

    }
})
export default categorySlice.reducer;