import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './authActions';

export interface AuthState {
    loading: boolean;
    user: {};
    payload: null | {} | unknown;
    success: boolean; // for monitoring the registration process.
}

const initialState: AuthState = {
    loading: false,
    user: {},
    payload: null,
    success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
            builder.addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.payload = null;
            }),
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload.user;
            }),
            builder.addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.payload = action.payload;
            })
    },
})

export default authSlice.reducer
