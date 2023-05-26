import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    cardItems: [],
    favorites: []
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setProducts} = itemsSlice.actions


export default itemsSlice.reducer