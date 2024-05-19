import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './authActions';
import { UserData } from '~/services/types/AuthData';

export interface AuthState {
    loading: boolean;
    user: null | UserData;
    userToken: null | string;
    payload: null | {} | unknown;
    success: boolean; // for monitoring the registration process.
}

const userToken = localStorage.getItem('lb_auth_token')
    ? JSON.parse(localStorage.getItem('lb_auth_token') as string)
    : null;

const initialState: AuthState = {
    loading: false,
    user: null,
    userToken: userToken,
    payload: null,
    success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('lb_auth_token');
            state.loading = false;
            state.user = null;
            state.userToken = null;
            state.payload = null;
        },
        setUser: (state, { payload }) => {
            state.user = payload.data.data;
        },
    },
    extraReducers: (builder) => {
        // Register
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
            state.payload = null;
        }),
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload.user;
            }),
            builder.addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.payload = action.payload;
            }),
            // Login
            builder.addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.payload = null;
            }),
            builder.addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = true;
                state.success = true;

                state.user = payload.data.user;
                state.userToken = payload.data.token;
            }),
            builder.addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.payload = action.payload;
            })
    },
})

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
