import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    gender: 0,
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


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setGender(state, action){
            state.gender = action.payload;
        },
        setCategoryId(state, action){
            if(state.categoryId !== action.payload){
                state.categoryId = action.payload;
            }
        },
        setSortSelectItem(state, action){
            state.sortSelectItem = action.payload;
        },
        setSortSeasonNum(state, action){
            if(state.sortSeasonNum.every(el => el !== action.payload)){
                state.sortSeasonNum = [...state.sortSeasonNum, action.payload]
            }else{
                state.sortSeasonNum = state.sortSeasonNum.filter(item => item !== action.payload)
            }
        },
        setSortSizeNum(state, action){
            if(state.sortSizeNum.every(el => el !== action.payload)){
                state.sortSizeNum = [...state.sortSizeNum, action.payload]
            }else{
                state.sortSizeNum = state.sortSizeNum.filter(item => item !== action.payload)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const {setGender, setCategoryId, setSortSelectItem, setSortSeasonNum, setSortSizeNum} = filterSlice.actions


export const selectorSortSelect = (state) => [state.filterReducer.sortSelect, state.filterReducer.sortSelectItem,
    state.filterReducer.sortSeason, state.filterReducer.sortSeasonNum,
    state.filterReducer.sortSize, state.filterReducer.sortSizeNum, state.filterReducer.category, state.filterReducer.categoryId]

export default filterSlice.reducer
