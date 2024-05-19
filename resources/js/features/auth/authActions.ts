import { createAsyncThunk } from '@reduxjs/toolkit'
import http from "~/http-common";
import { RegisterData, LoginData } from '~/service/types/AuthData';

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }: LoginData, { rejectWithValue }) => {
        try {
            const res = await http.post(
                `/auth/login`,
                { email, password }
            )

            return res.data;
        } catch (error: any) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }: RegisterData, { rejectWithValue }) => {
        try {
            const res = await http.post(
                `/auth/register`,
                { name, email, password }
            )

            return res.data;
        } catch (error: any) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
