import { createSlice } from '@reduxjs/toolkit';
import { getGeneralData } from './settingActions';

interface SettingState {
    loading: boolean;
    setting: null | {};
    success: boolean;
    error: null | string;
}

const initialState: SettingState = {
    loading: false,
    setting: null,
    success: false,
    error: null
}

const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        //
    },
    extraReducers: (builder) => {
        // General
        builder.addCase(getGeneralData.pending, (state, action) => {
            state.loading = true;
            state.setting = null;
            state.error = null;
        }),
            builder.addCase(getGeneralData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.setting = (payload as any).data;
            }),
            builder.addCase(getGeneralData.rejected, (state, { payload }) => {
                state.loading = false;
                state.setting = null;
                state.error = (payload as any)?.message;
            })
    },
})

//export const { logout, setUser } = settingSlice.actions;

export default settingSlice.reducer;
