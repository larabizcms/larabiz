import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducers from '@larabiz/features/reducers';
import { rootMiddleware } from '@larabiz/features/middleware';

const combinedReducer = combineReducers(rootReducers);

export const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            ...rootMiddleware
        ),
});

if (import.meta.hot) {
    //import.meta.hot.dispose(() => store.dispatch({ type: 'RESET' }));
    import.meta.hot.accept('../../packages/core/resources/js/features/reducers', async () =>  {
        const newRootReducers = (await import('@larabiz/features/reducers')).default;
        store.replaceReducer(combineReducers(newRootReducers));
    })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
