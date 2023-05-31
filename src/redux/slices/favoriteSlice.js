import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchGetFavorites = createAsyncThunk(
    'product/fetchProducts',async ({category, sortBy,order}) => {
        const {data} = await   axios.get('https://64523a52a2860c9ed4057faf.mockapi.io/favorites')
        return data
    }
)
export const fetchAddFavorite = createAsyncThunk(
    'product/fetchProducts',async ({category, sortBy,order}) => {
        const {data} = await   axios.get('https://64523a52a2860c9ed4057faf.mockapi.io/favorites')
        return data
    }
)

export const fetchRemoveFavorite = createAsyncThunk(
    'product/fetchProducts',async ({category, sortBy,order}) => {
        const {data} = await   axios.get('https://64523a52a2860c9ed4057faf.mockapi.io/favorites')
        return data
    }
)

const initialState = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {

    },
    extraReducers:{
        [fetchGetFavorites.pending]:(state) => {

        },
        [fetchGetFavorites.fulfilled]:(state, action) => {
        state.favorites = action.payload
        },
        [fetchGetFavorites.rejected]:(state, action) => {

        },
    },
})




export default favoriteSlice.reducer