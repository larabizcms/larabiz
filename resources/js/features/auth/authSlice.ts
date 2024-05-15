import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Define your extra reducers here
        // builder.addCase(...)
    },
})

export default authSlice.reducer
