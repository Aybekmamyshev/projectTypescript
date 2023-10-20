import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {baseApi} from "../shared/api";
import number from "../entities/cardTrend/model/slice"
import cart from "../entities/AboutProduct/model/slice";
import user from "../entities/UserForm/model/UserSlice"
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from  "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['number'],
    whitelist: ['cart','user']
}

const reducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
     number,
     cart,
     user

})

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type  RootState = ReturnType<typeof store.getState>


// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type  AppDispatch = typeof store.dispatch


