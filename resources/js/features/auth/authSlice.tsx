import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './authActions';

interface AuthState {
    loading: boolean;
    userInfo: {}; // for user object
    userToken: string | null; // for storing the JWT
    errors: string[] | null;
    success: boolean; // for monitoring the registration process.
}

const initialState: AuthState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    errors: null,
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
            state.errors = null;
        }),
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
            }),
            builder.addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.errors = (action.payload as any)?.errors;
            })
    },
})

export default authSlice.reducer
