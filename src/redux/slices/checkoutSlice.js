import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchCheckoutItems = createAsyncThunk(
    'checkout/fetchCheckoutItems',async () => {
        const {data} = await   axios.get('https://64523a52a2860c9ed4057faf.mockapi.io/checkout')
        return data
    }
)

export const fetchAddCheckoutItem = createAsyncThunk(
    'checkout/fetchAddCheckoutItem',async ({product, selectedSize}, thunkAPI) => {
        const item = {...product}
        item.size = selectedSize
        item.quantity = 1
        const {checkoutItems} = thunkAPI.getState().checkoutReducer
        const {dispatch} = thunkAPI
        if(checkoutItems.every(i => i.id !== item.id ? true : i.size[0] !== item.size[0])){
            dispatch(setAddCheckoutItem(item))
            const {data} = await   axios.post('https://64523a52a2860c9ed4057faf.mockapi.io/checkout', item)
            return data
        }
    }
)

export const fetchRemoveCheckoutItem = createAsyncThunk(
    'checkout/fetchRemoveCheckoutItem',async ( number, thunkAPI) => {
        const {dispatch} = thunkAPI
        dispatch(setRemoveCheckoutItem(number))
        const {data} = await axios.delete(`https://64523a52a2860c9ed4057faf.mockapi.io/checkout/${number}`)
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
            state.checkoutItems = state.checkoutItems.filter(item => item.number !== action.payload);
        },
        setAugmentCheckoutItem(state, action){
            return {
                ...state,
                checkoutItems: state.checkoutItems.map(item => {
                    if(item.number === action.payload){
                        return  {...item, quantity : item.quantity + 1}
                    }
                    return item
                })
            }
        },
        setReduceCheckoutItem(state, action){
            return {
                ...state,
                checkoutItems: state.checkoutItems.map(item => {
                    if(item.number === action.payload){
                        return  {...item, quantity : item.quantity > 0 ? item.quantity - 1 : item.quantity}
                    }
                    return item
                })
            }
        },
    },
    extraReducers:{
        [fetchCheckoutItems.pending]:(state) => {
        },
        [fetchCheckoutItems.fulfilled]:(state, action) => {
            state.checkoutItems = action.payload
        },
        [fetchAddCheckoutItem.rejected]:(state, action) => {
            alert('Server error ')
        },
        [fetchRemoveCheckoutItem.rejected]:(state, action) => {
            alert('Server error ')
        },
        [fetchCheckoutItems.rejected]:(state, action) => {
            alert('Server error ')
        },
    },
})

export const {setAddCheckoutItem, setRemoveCheckoutItem, setAugmentCheckoutItem, setReduceCheckoutItem} = checkoutSlice.actions


export default checkoutSlice.reducer