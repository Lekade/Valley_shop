import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filterSlice";
import productReducer from "./slices/productSlice";
import favoritesReducer from "./slices/favoriteSlice";

export const store = configureStore({
    reducer: {
        filterReducer,
        productReducer,
        favoritesReducer
    },
})

