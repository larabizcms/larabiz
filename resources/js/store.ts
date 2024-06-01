import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../packages/core/resources/js/features/auth/authSlice';
import settingReducer from '../../packages/core/resources/js/features/setting/settingSlice';
import { authApi } from '../../packages/core/resources/js/features/auth/authService';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        setting: settingReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
