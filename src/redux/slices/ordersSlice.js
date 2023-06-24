import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import {checkoutSlice} from "./checkoutSlice";

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrdersItems',async () => {
        const {data} = await   axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/checkout')
        return data
    }
)

export const fetchAddOrders = createAsyncThunk(
    'orders/fetchAddOrdersItem',async (myOrder, thunkAPI) => {
        const {orders} = thunkAPI.getState().ordersReducer
        const {dispatch} = thunkAPI
        if(orders.every(i => i.order !== myOrder.order)){
            dispatch(setAddOrder(myOrder))
            const {data} = await   axios.post('https://644146b5792fe886a8a31f8c.mockapi.io/checkout', myOrder)
            return data
        }
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
        setInputData(state, action){
            console.log(action)
            let point = action.name
            return{
                ...state,
                inputData: {... state.inputData,
                    point: action.payload
                }

            }
        },
    },
    extraReducers: {
        [fetchOrders.pending]: (state) => {
        },
        [fetchOrders.fulfilled]: (state, action) => {
            state.orders = action.payload
        },
        [fetchOrders.rejected]: (state, action) => {
        }
    }
})


export const {setAddOrder, setInputData} = checkoutSlice.actions
export default ordersSlice.reducer