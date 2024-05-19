import { createSlice } from '@reduxjs/toolkit';
import { getGeneralData } from './settingActions';
import { GeneralData } from '../types/SettingData';

interface SettingState {
    loading: boolean;
    generalData: null | GeneralData;
    success: boolean;
    error: null | string;
}

const initialState: SettingState = {
    loading: false,
    generalData: null,
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
            state.generalData = null;
            state.error = null;
        }),
            builder.addCase(getGeneralData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.generalData = (payload as any).data;
            }),
            builder.addCase(getGeneralData.rejected, (state, { payload }) => {
                state.loading = false;
                state.generalData = null;
                state.error = (payload as any)?.message;
            })
    },
})

//export const { logout, setUser } = settingSlice.actions;

export default settingSlice.reducer;
