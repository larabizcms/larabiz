import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './authActions';

interface AuthState {
    loading: boolean;
    user: {};
    payload: null|{}|unknown;
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
        // register user
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
            state.payload = null;
        }),
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload;
            }),
            builder.addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.payload = action.payload;
            })
    },
})

export default authSlice.reducer
