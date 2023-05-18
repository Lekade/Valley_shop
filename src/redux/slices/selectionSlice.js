import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
}

export const selectionSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setCategoryId} = selectionSlice.actions

export default selectionSlice.reducer
