import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@larabiz/features/auth/authSlice';
import settingReducer from '@larabiz/features/setting/settingSlice';
import mediaReducer from '@larabiz/features/media/mediaSlice';
import pageReducer from '@larabiz/features/page/pageSlice';
import { authApi } from '@larabiz/features/auth/authService';
import { settingApi } from '@larabiz/features/setting/settingService';
import { mediaApi } from '@larabiz/features/media/mediaService';
import { pageApi } from '@larabiz/features/page/pageService';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        setting: settingReducer,
        media: mediaReducer,
        page: pageReducer,
        [authApi.reducerPath]: authApi.reducer,
        [settingApi.reducerPath]: settingApi.reducer,
        [pageApi.reducerPath]: pageApi.reducer,
        [mediaApi.reducerPath]: mediaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(settingApi.middleware)
            .concat(pageApi.middleware)
            .concat(mediaApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
