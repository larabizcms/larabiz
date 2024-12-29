import { Middleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducers, { rootMiddleware } from '@admin/features/reducers';

// Combine all reducers
const customReducers = {
    // Add your custom reducers here
};

const customMiddleware: Middleware[] = [
    // Add your middleware functions here
];

const combinedReducer = combineReducers({...rootReducers, ...customReducers});

export const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            ...rootMiddleware,
            ...customMiddleware
        ),
});

// Hot Module Replacement
if (import.meta.hot) {
    import.meta.hot.accept(['../../vendor/larabizcms/premium/react/features/reducers'], async () =>  {
        const newRootReducers = (await import('@admin/features/reducers')).default;
        store.replaceReducer(combineReducers({...newRootReducers, ...customReducers}));
    });

    import.meta.hot.accept(['../../vendor/larabizcms/premium/react/features/reducers'], async () =>  {
        const newRootReducers = (await import('@admin/features/reducers')).default;
        store.replaceReducer(combineReducers({...newRootReducers, ...customReducers}));
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
