import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filterSlice";
import itemReducer from "./slices/itemsSlice";

export const store = configureStore({
    reducer: {
        filterReducer,
        itemReducer,
    },
})

