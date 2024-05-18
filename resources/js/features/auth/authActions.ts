import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import http from "../../http-common";

export interface RegisterFormType {
    name: string;
    email: string;
    password: string;
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }: RegisterFormType, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await http.post(
                `/auth/register`,
                { name, email, password },
                config
            )
        } catch (error: any) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
