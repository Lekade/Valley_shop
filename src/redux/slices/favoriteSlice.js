import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


export const fetchFavorites = createAsyncThunk(
    'favorite/fetchFavorites',async () => {
        const {data} = await   axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/favorites')
        return data
    }
)
export const fetchClickToFavorite = createAsyncThunk(
    'favorite/fetchClickToFavorite',async (el, thunkAPI) => {
        const {favorites} = thunkAPI.getState().favoritesReducer
        const {dispatch} = thunkAPI
        if(favorites.every(i => i.id !== el.id)){
            dispatch(setAddFavorite(el))
            const {data} = await axios.post('https://644146b5792fe886a8a31f8c.mockapi.io/favorites', el)
            dispatch(fetchFavorites())
            return data
        }else {
            const number = favorites.find(item => item.id === el.id).number
            dispatch(setRemoveFavorite(el.id))
            const {data} = await axios.delete(`https://644146b5792fe886a8a31f8c.mockapi.io/favorites/${number}`)
            return data
        }
    })

const initialState = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setAddFavorite(state, action){
            state.favorites = [...state.favorites, action.payload];
        },
        setRemoveFavorite(state, action){
            state.favorites = state.favorites.filter(item => item.id !== action.payload);
        },
    },
    extraReducers:{
        [fetchFavorites.pending]:(state) => {
        },
        [fetchFavorites.fulfilled]:(state, action) => {
        state.favorites = action.payload
        },
        [fetchFavorites.rejected]:(state, action) => {
            alert('Server error')
        },
        [fetchClickToFavorite.pending]:(state) => {
        },
        [fetchClickToFavorite.fulfilled]:(state, action) => {
        },
        [fetchClickToFavorite.rejected]:(state, action) => {
            alert('Server error ')
        },
    },
})

export const {setAddFavorite, setRemoveFavorite} = favoriteSlice.actions


export default favoriteSlice.reducer