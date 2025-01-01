import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState, AppDispatch } from '@local/store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
}>();
