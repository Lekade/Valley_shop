import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import {fetchRemoveCheckoutItem, setRemoveCheckoutItem} from "./checkoutSlice";

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrdersItems',async () => {
        const {data} = await   axios.get('https://64523a52a2860c9ed4057faf.mockapi.io/orders')
        return data
    }
)

export const fetchAddOrders = createAsyncThunk(
    'orders/fetchAddOrdersItem', (formData, thunkAPI) => {
        const {checkoutItems} = thunkAPI.getState().checkoutReducer
        const {dispatch} = thunkAPI

        checkoutItems.forEach(async (item) => {
            if(item.quantity > 0){
                const order = {...item, formData}
                const number = item.number
                dispatch(setRemoveCheckoutItem(number))
                dispatch(fetchRemoveCheckoutItem(number))
                const {data} = await axios.post('https://64523a52a2860c9ed4057faf.mockapi.io/orders', order)
                return data

            }
        })
    }
)

const initialState = {
    orders: [],
}
export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setAddOrder(state, action){
            state.orders = [...state.orders, action.payload];
        },
    },
    extraReducers: {
        [fetchOrders.pending]: (state) => {
        },
        [fetchOrders.fulfilled]: (state, action) => {
            state.orders = action.payload
        },
        [fetchOrders.rejected]: () => {
            alert('Server error ')
        },
        [fetchAddOrders.rejected]: () => {
            alert('Server error ')
        }

    }
})


export const {setAddOrder, setInputData} = ordersSlice.actions
export default ordersSlice.reducer