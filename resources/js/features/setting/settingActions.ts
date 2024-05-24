import { createAsyncThunk } from '@reduxjs/toolkit'
import http from "http-common";

export const getGeneralData = createAsyncThunk(
    'admin/general',
    async (undefined, { rejectWithValue }) => {
        try {
            const res = await http.get(`/admin/general`);

            return res.data;
        } catch (error: any) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)
