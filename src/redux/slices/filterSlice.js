import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    category: ["t-shirts", "sweaters", "hoodies", "shirts", "pants/shorts", "polo", "popular"],
    categoryId: 0,
    sortSelect: [
        {name:"default", sortProperty: "default"},
        {name:"popular", sortProperty: "rating"},
        {name:"price (low - hight)", sortProperty: "-price"},
        {name:"price (hight - low)", sortProperty: "price"}
    ],
    sortSelectItem: {name:"default", sortProperty: "default"},
    sortSeason: ["spring", "Demi-season", "winter", "summer", "autumn"],
    sortSeasonNum: [],
    sortSize: ["xs", "s", "m", "l", "xl"],
    sortSizeNum:[]
}

const onchangeSort = (sortItems, sortFun, i) => {

    if(sortItems.every(el => el !== i)){
        return sortFun((prev) => [...prev, i])
    }else{
        return sortFun((prev) => prev.filter(item => item !== i))
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload;
        },
        setSortSelectItem(state, action){
            state.sortSelectItem = action.payload;
        },
        setSortSeasonNum(state, action){
            if(state.sortSeasonNum.every(el => el !== action.payload)){
                state.sortSeasonNum = [...state.sortSeasonNum, action.payload]
            }else {
                state.sortSeasonNum = state.sortSeasonNum.filter(item => item !== action.payload)
            }

        },
        setSortSizeNum(state, action){
            if(state.sortSizeNum.every(el => el !== action.payload)){
                state.sortSizeNum = [...state.sortSizeNum, action.payload]
            }else {
                state.sortSizeNum = state.sortSizeNum.filter(item => item !== action.payload)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {setCategoryId, setSortSelectItem, setSortSeasonNum, setSortSizeNum} = filterSlice.actions


export const selectorSortSelect = (state) => [state.filterReducer.sortSelect, state.filterReducer.sortSelectItem,
    state.filterReducer.sortSeason, state.filterReducer.sortSeasonNum,
    state.filterReducer.sortSize, state.filterReducer.sortSizeNum]

export default filterSlice.reducer
