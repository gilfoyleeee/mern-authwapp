import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js"

export const store = configureStore({
    reducer:{user: userReducer},
    middleware: (getdefaultMiddleware) => getdefaultMiddleware({
        serializableCheck: false,
    })
})