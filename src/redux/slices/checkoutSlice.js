import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchCheckoutItems = createAsyncThunk(
    'checkout/fetchCheckoutItems',async () => {
        const {data} = await   axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/checkout')
        return data
    }
)

export const fetchAddCheckoutItem = createAsyncThunk(
    'checkout/fetchAddCheckoutItem',async (item, thunkAPI) => {
        const {checkoutItems} = thunkAPI.getState().checkoutReducer
        const {dispatch} = thunkAPI
        if(checkoutItems.every(i => i.id !== item.id)){
            dispatch(setAddCheckoutItem(item))
            const {data} = await   axios.post('https://644146b5792fe886a8a31f8c.mockapi.io/checkout', item)
            return data
        }
    }
)

export const fetchRemoveCheckoutItem = createAsyncThunk(
    'checkout/fetchRemoveCheckoutItem',async ({id, number}, thunkAPI) => {
        const {dispatch} = thunkAPI
        dispatch(setRemoveCheckoutItem(id))
        debugger
        const {data} = await   axios.delete(`https://644146b5792fe886a8a31f8c.mockapi.io/checkout/${number}`)
        return data
    }
)

const initialState = {
    checkoutItems: [],
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setAddCheckoutItem(state, action){
            state.checkoutItems = [...state.checkoutItems, action.payload];
        },
        setRemoveCheckoutItem(state, action){
            state.checkoutItems = state.checkoutItems.filter(item => item.id !== action.payload);
        },
    },
    extraReducers:{
        [fetchCheckoutItems.pending]:(state) => {
        },
        [fetchCheckoutItems.fulfilled]:(state, action) => {
            state.checkoutItems = action.payload
        },
        [fetchAddCheckoutItem.fulfilled]:(state, action) => {

        },
        [fetchRemoveCheckoutItem.fulfilled]:(state, action) => {

        },
        [fetchCheckoutItems.rejected]:(state, action) => {
        },
    },
})

export const {setAddCheckoutItem, setRemoveCheckoutItem} = checkoutSlice.actions


export default checkoutSlice.reducer