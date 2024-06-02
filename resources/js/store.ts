import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '@larabiz/features/auth/authSlice';
import settingReducer from '@larabiz/features/setting/settingSlice';
import mediaReducer from '@larabiz/features/media/mediaSlice';
import pageReducer from '@larabiz/features/page/pageSlice';
import { authApi } from '@larabiz/features/auth/authService';
import { settingApi } from '@larabiz/features/setting/settingService';
import { mediaApi } from '@larabiz/features/media/mediaService';
import { pageApi } from '@larabiz/features/page/pageService';

const dynamicReducer = (state = {}, action: any) => {
    if (action.type === 'SET_DYNAMIC_REDUCER') {
        return {
            ...state,
            [action.reducerPath]: action.reducer,
        };
    }
    return state;
};

const rootReducer = combineReducers({
    auth: authReducer,
    setting: settingReducer,
    media: mediaReducer,
    page: pageReducer,
    authApi: authApi.reducer,
    settingApi: settingApi.reducer,
    pageApi: pageApi.reducer,
    mediaApi: mediaApi.reducer,
    dynamic: dynamicReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            settingApi.middleware,
            pageApi.middleware,
            mediaApi.middleware
        ),
});

// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         setting: settingReducer,
//         media: mediaReducer,
//         page: pageReducer,
//         [authApi.reducerPath]: authApi.reducer,
//         [settingApi.reducerPath]: settingApi.reducer,
//         [pageApi.reducerPath]: pageApi.reducer,
//         [mediaApi.reducerPath]: mediaApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware()
//             .concat(authApi.middleware)
//             .concat(settingApi.middleware)
//             .concat(pageApi.middleware)
//             .concat(mediaApi.middleware),
// });

// Enable Webpack hot module replacement for reducers
// if (import.meta.hot) {
//     import.meta.hot.accept('@larabiz/features/page/pageService', () => {
//         const newPageApi = require('@larabiz/features/page/pageService').apiSlice;
//         store.replaceReducer(
//             {
//                 [newPageApi.reducerPath]: newPageApi.reducer,
//             }
//         );
//     });
// }

if (import.meta.hot) {
    import.meta.hot.accept('@larabiz/features/page/pageSlice', () => {
        const newPageApi = require('@larabiz/features/page/pageSlice').apiSlice;
        store.dispatch({
            type: 'SET_DYNAMIC_REDUCER',
            reducerPath: newPageApi.reducerPath,
            reducer: newPageApi.reducer,
        });
    });

    import.meta.hot.accept('@larabiz/features/auth/authSlice', () => {
        const newAuthApi = require('@larabiz/features/auth/authSlice').apiSlice;
        store.dispatch({
            type: 'SET_DYNAMIC_REDUCER',
            reducerPath: newAuthApi.reducerPath,
            reducer: newAuthApi.reducer,
        });
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
