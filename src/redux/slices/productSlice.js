import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import {setAddCheckoutItem} from "./checkoutSlice";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',async ({category, sortBy,order}) => {
        const {data} = await  axios.get(`https://644146b5792fe886a8a31f8c.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
        return data
    }
)

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',async (id) => {
        const {data} = await  axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/items/' + id)
        return data
    }
)

const initialState = {
    products: [],
    productsAll: [],
    product: {},
    status: 'loading', // loading | success | error
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setPriceFilter(state, action){
            state.products = state.productsAll.filter(item => item.price > action.payload.min && item.price < action.payload.max)
        }
    },
    extraReducers:{
        [fetchProducts.pending]:(state) => {
            state.status = 'loading'
            state.products = []
            state.productsAll = []
        },
        [fetchProducts.fulfilled]:(state, action) => {
            state.products = action.payload
            state.productsAll = action.payload
            state.status = 'success'
        },
        [fetchProduct.fulfilled]:(state, action) => {
            state.product = action.payload
        },
        [fetchProducts.rejected]:(state, action) => {
            state.status = 'error'
            state.products = []
        },
    },
})

// Action creators are generated for each case reducer function
export const {setPriceFilter} = productSlice.actions


export default productSlice.reducer