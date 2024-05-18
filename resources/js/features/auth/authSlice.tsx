import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './authActions'

const initialState = {
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
                console.log(action);
                state.errors = action.payload as null;
            })
    },
})

export default authSlice.reducer
