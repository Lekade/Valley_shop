import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    'filter/fetchProducts',async ({category, sortBy,order}) => {
        const {data} = await  axios.get(`https://644146b5792fe886a8a31f8c.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
        return data
    }
)

export const fetchProduct = createAsyncThunk(
    'filter/fetchProduct',async (id) => {
        const {data} = await  axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/items/' + id)
        return data
    }
)

const initialState = {
    gender: 0,
    products: [],
    productsNoFilter: [],
    minPrice: 15,
    maxPrice: 200,
    product: {},
    status: 'loading', // loading | success | error
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
        setSelectSearch(state, action){
            state.sortSelectItem = action.payload.sort
            state.categoryId = Number(action.payload.categoryId)
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
        },
        setPrice(state, action){
            state.minPrice = action.payload.min
            state.maxPrice = action.payload.max
        },
        setFilter(state){
            const productFilterPrice = state.productsNoFilter.filter(item => item.price > state.minPrice && item.price < state.maxPrice)

            const productFilterSeason = state.sortSeasonNum.length > 0  ?  productFilterPrice.filter(item => item.season.some(
                season => {
                    let num = 0
                    for(let i = 0; i < state.sortSeason.length; i++ ){
                        num++
                        if(parseInt(season, 10) === state.sortSeasonNum[i]){
                            return true
                        }
                    }
                    return num !== state.sortSeason.length;

                }
            )) : productFilterPrice
            state.products = state.sortSizeNum.length > 0  ? productFilterSeason.filter(item => item.size.some(
                size => {
                    let num = 0
                    for(let i = 0; i < state.sortSize.length; i++ ){
                        num++
                        if(size.toLowerCase() === state.sortSize[state.sortSizeNum[i]]){
                            return true
                        }
                    }
                    return num !== state.sortSize.length;

                }
            )) : productFilterSeason
        }
    },
    extraReducers:{
        [fetchProducts.pending]:(state) => {
            state.status = 'loading'
            state.products = []
            state.productsNoFilter = []
        },
        [fetchProducts.fulfilled]:(state, action) => {
            state.products = action.payload
            state.productsNoFilter = action.payload
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
export const {setGender, setCategoryId, setSortSelectItem, setSortSeasonNum, setSortSizeNum, setFilter, setPrice, setSelectSearch} = filterSlice.actions


export const selectorSortSelect = (state) => [state.filterReducer.sortSelect, state.filterReducer.sortSelectItem,
    state.filterReducer.sortSeason, state.filterReducer.sortSeasonNum,
    state.filterReducer.sortSize, state.filterReducer.sortSizeNum, state.filterReducer.category, state.filterReducer.categoryId,
    state.filterReducer.products, state.filterReducer.status, state.filterReducer.productsNoFilter, state.filterReducer.gender]

export default filterSlice.reducer
