import { configureStore } from '@reduxjs/toolkit'
import selectionReducer from "./slices/selectionSlice";

export const store = configureStore({
    reducer: {
        selectionReducer,
    },
})

