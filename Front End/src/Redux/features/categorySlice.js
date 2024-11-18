import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../baseURL/baseURL";


export const addCategory = createAsyncThunk("category/addCategory", async (formData, { rejectWithValue, fulfillWithValue }) => {
    try {
        const { data } = await baseURL.post('admin/addCategory', formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return fulfillWithValue(data);

    } catch (error) {
        const errorMessage = error.response ? error.response.data?.message || error.response.data || 'An error occurred on the server.'
            : error.message || 'Something went wrong. Please try again later.';

        console.error('get user info Error:', errorMessage);
        return rejectWithValue(errorMessage);
    }
})

export const getCategories = createAsyncThunk("category/getCategories", async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {

    try {

        const { data } = await baseURL.get(`admin/getCategory?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`,
            {
                withCredentials: true,
            })

        return fulfillWithValue(data);

    } catch (error) {
        const errorMessage = error.response ? error.response.data?.message || error.response.data || 'An error occurred on the server.'
            : error.message || 'Something went wrong. Please try again later.';

        console.error('get user info Error:', errorMessage);
        return rejectWithValue(errorMessage);
    }
})

const categorySlice = createSlice({
    name: "category",

    initialState: {
        categories: [],
        totalCategory: 0,
        loading: false,
        successMsg: null,
        errorMsg: null,
    },

    reducers: {
        msgClear: (state) => {
            state.successMsg = null;
            state.errorMsg = null;
        }
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
                state.successMsg = payload.message;
                state.errorMsg = null;
            })
            .addCase(addCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.errorMsg = payload.message;
                state.successMsg = null;
            })

            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.errorMsg = null;
                state.successMsg = null;
            })
            .addCase(getCategories.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.categories = payload.categories;
                state.totalCategory = payload.totalCategory;
                state.successMsg = null;
                state.errorMsg = null;
            })
            .addCase(getCategories.rejected, (state, { payload }) => {
                state.loading = false;
                state.errorMsg = payload.message;
                state.successMsg = null;
            })

    }
})

export const { msgClear } = categorySlice.actions;
export default categorySlice.reducer;