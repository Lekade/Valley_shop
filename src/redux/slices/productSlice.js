import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',async ({category, sortBy,order}) => {
        const {data} = await  axios.get(`https://644146b5792fe886a8a31f8c.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
        return data
    }
)

const initialState = {
    products: [],
    status: 'loading', // loading | success | error
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers:{
        [fetchProducts.pending]:(state) => {
            state.status = 'loading'
            state.products = []
        },
        [fetchProducts.fulfilled]:(state, action) => {
            state.products = action.payload
            state.status = 'success'
        },
        [fetchProducts.rejected]:(state, action) => {
            state.status = 'error'
            state.products = []
        },
    },
})

// Action creators are generated for each case reducer function
export const {setProducts} = productSlice.actions


export default productSlice.reducer