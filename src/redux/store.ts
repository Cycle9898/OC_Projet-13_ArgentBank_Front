import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Auth/authenticationSlice";
import userInfosReducer from "./UserInfos/userInfosSlice";

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        userInfos: userInfosReducer
    }
});

export default store;

// Infer the `RootState`, `AppDispatch` and `AppGetState` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;