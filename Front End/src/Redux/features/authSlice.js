import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../baseURL/baseURL";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

// Async action for admin login
export const adminLogin = createAsyncThunk(
    'auth/adminLogin',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {

            const { data } = await baseURL.post('admin/adminLogin', info, { withCredentials: true });
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data);

        } catch (error) {

            const message = error.response?.data?.message || error.message || "An error occurred";
            return rejectWithValue(message);
        }
    }
);

export const sellerRegister = createAsyncThunk(
    'auth/sellerRegister',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await baseURL.post('/auth/sellerRegister', info, {
                withCredentials: true
            });
            if (data.success) {
                toast.success(data.message);
            }
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data);

        } catch (error) {
            const errorMessage = error.response
                ? error.response.data?.message || error.response.data || 'An error occurred on the server.'
                : error.message || 'Something went wrong. Please try again later.';

            console.error('Registration Error:', errorMessage);
            toast.error(errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);

export const sellerLogin = createAsyncThunk("auth/sellerLogin", async (info, { rejectWithValue, fulfillWithValue }) => {

    try {
        const { data } = await baseURL.post('/auth/sellerLogin', info, {
            withCredentials: true
        })

        if (data.success) {
            toast.success(data.message);
        }

        localStorage.setItem('accessToken', data.token)
        return fulfillWithValue(data);
    } catch (error) {
        const errorMessage = error.response
            ? error.response.data?.message || error.response.data || 'An error occurred on the server.'
            : error.message || 'Something went wrong. Please try again later.';

        console.error('Login Error:', errorMessage);
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
    }

})


export const getUserInfo = createAsyncThunk("auth/getUserInfo", async (_, { rejectWithValue, fulfillWithValue }) => {
    try {

        const token = localStorage.getItem("accessToken");
        const { data } = await baseURL.get('/auth/getUser', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return fulfillWithValue(data);

    } catch (error) {
        const errorMessage = error.response ? error.response.data?.message || error.response.data || 'An error occurred on the server.'
            : error.message || 'Something went wrong. Please try again later.';

        console.error('get user info Error:', errorMessage);
        return rejectWithValue(errorMessage);
    }
})


const returnRole = (token) => {
    if (token) {

        const decodeToken = jwtDecode(token);
        const expireTime = new Date(decodeToken.exp * 1000)

        if (new Date() > expireTime) {
            localStorage.removeItem("accessToken");
            return null;
        } else {
            return decodeToken.role;
        }
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userInfo: null,
        role: returnRole(localStorage.getItem("accessToken")),
        token: localStorage.getItem("accessToken"),
        isLoading: false,
        errorMessage: null,
        successMessage: null
    },
    reducers: {
        messageClear: (state) => {
            state.errorMessage = null;
            state.successMessage = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = null;
                state.successMessage = null;
            })
            .addCase(adminLogin.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
            })
            .addCase(adminLogin.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = payload;
                state.successMessage = null;
            })

            .addCase(sellerRegister.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = null;
                state.successMessage = null;

            })
            .addCase(sellerRegister.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
            })
            .addCase(sellerRegister.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = payload;
                state.successMessage = null;
            })

            .addCase(sellerLogin.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = null;
                state.successMessage = null;
            })

            .addCase(sellerLogin.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.successMessage = payload.message;
            })
            .addCase(sellerLogin.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = payload;
                state.successMessage = null;
            })

            .addCase(getUserInfo.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.userInfo = payload.userInfo;
            })

    }
});

export const { messageClear } = authSlice.actions;
export default authSlice.reducer;
