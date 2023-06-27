import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filterSlice";
import favoritesReducer from "./slices/favoriteSlice";
import checkoutReducer from "./slices/checkoutSlice";
import ordersReducer from "./slices/ordersSlice";

export const store = configureStore({
    reducer: {
        filterReducer,
        favoritesReducer,
        checkoutReducer,
        ordersReducer
    },
})

