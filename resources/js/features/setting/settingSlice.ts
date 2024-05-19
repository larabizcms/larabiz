import { createSlice } from '@reduxjs/toolkit';
import { generalData } from './settingActions';
import { GeneralData } from '../types/SettingData';

interface SettingState {
    loading: boolean;
    generalData: null | GeneralData;
    success: boolean;
}

const initialState: SettingState = {
    loading: false,
    generalData: null,
    success: false,
}

const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        //
    },
    extraReducers: (builder) => {
        // General
        builder.addCase(generalData.pending, (state, action) => {
            state.loading = true;
            state.generalData = null;
        }),
            builder.addCase(generalData.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
            }),
            builder.addCase(generalData.rejected, (state, { payload }) => {
                state.loading = false;
                state.generalData = (payload as any).data;
            })
    },
})

//export const { logout, setUser } = settingSlice.actions;

export default settingSlice.reducer;
