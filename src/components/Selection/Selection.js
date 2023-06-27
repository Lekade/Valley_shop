import React, {useEffect, useState} from "react";
import style from './Selection.module.css'
import checkImg from '../../assecs/images/check.svg'
import checkboxImg from '../../assecs/images/checkbox.svg'
import SliderRenge from "./sliderRenge/SliderRenge";
import CardItem from "../CardItem/CardItem";
import { useSelector, useDispatch } from 'react-redux'
import {
    selectorSortSelect,
    setSortSelectItem,
    setSortSeasonNum,
    setSortSizeNum,
    fetchProducts,
    setFilter
} from "../../redux/slices/filterSlice"


const Selection = () => {
    const [sortOpen, setSortOpen] = useState(false)
    const [sortPriceOpen, setSortPriceOpen] = useState(true)
    const [sortSeasonOpen, setSortSeasonOpen] = useState(true)
    const [sortSizeOpen, setSortSizeOpen] = useState(true)

    const dispatch = useDispatch()
    const [sortSelect, sortSelectItem,  sortSeason,  sortSeasonNum, sortSize, sortSizeNum, category, categoryId, products, status, productsNoFilter] = useSelector(state => selectorSortSelect(state))

    const getProducts = () =>  {
        const order = sortSelectItem.sortProperty.includes('-') ? 'asc' : 'desc'
        const category = categoryId >= 0 ? `category=${categoryId}`: ''
        const sortBy = sortSelectItem.sortProperty.replace('-', '')
        dispatch(fetchProducts({category, sortBy,order}))
    }

    useEffect(()=>{
        getProducts()
    },[categoryId, sortSelectItem])

    useEffect(()=>{
        dispatch(setFilter())
    }, [productsNoFilter])

    const errorBlock = () => {
           return <div className={style.errorBlock}>
                <p className={style.errorTitle}>Nothing was found for your query</p>
                <p className={style.errorSubtitle}>try again</p>
            </div>
    }

    const changeFilter = (index , filter) =>{
        if(filter === 'season'){
            dispatch(setSortSeasonNum(index))
            dispatch(setFilter())
        } else if(filter === 'size'){
            dispatch(setSortSizeNum(index))
            dispatch(setFilter())
        }

    }

    return (
        <div className={style.selection}>
            <div className={style.sidebar}>
                <div className={style.sortEl}>
                    <div onClick={() => setSortPriceOpen(!sortPriceOpen)} className={sortPriceOpen ? `${style.sidebarTitle} ${style.sidebarTitleOpen}` :  style.sidebarTitle}>
                        <h2 className={style.sidebarH2}>Price</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>

                    {sortPriceOpen && <div className={style.sortElInner}>
                        <SliderRenge/>
                    </div>}
                </div>

                <div className={style.sortEl}>
                    <div onClick={() => setSortSeasonOpen(!sortSeasonOpen)}  className={sortSeasonOpen ? `${style.sidebarTitle} ${style.sidebarTitleOpen}` :  style.sidebarTitle}>
                        <h2 className={style.sidebarH2}>Season</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>

                    {sortSeasonOpen && <div className={style.sortElInner}>
                        {sortSeason.map((el, index) =>
                            <div key={index} className={style.checkboxItem} onClick={ () => changeFilter(index, 'season') }>
                                <div className={style.checkbox}>
                                    {sortSeasonNum.some(num => num === index) && <img src={checkboxImg} alt="check"/>}
                                </div>
                                <p className={style.checkboxText}>{el}</p>
                            </div>
                        )}
                    </div>}
                </div>
                <div className={style.sortEl}>
                    <div onClick={() => setSortSizeOpen(!sortSizeOpen)}  className={sortSizeOpen ? `${style.sidebarTitle} ${style.sidebarTitleOpen}` :  style.sidebarTitle}>
                        <h2 className={style.sidebarH2}>Size</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>
                    {sortSizeOpen && <div className={style.sortElInner}>
                        {sortSize.map((el, index)=>
                            <div key={index} className={style.checkboxItem} onClick={ () => changeFilter(index, 'size')} >
                                <div className={style.checkbox}>
                                    {sortSizeNum.some(num => num === index) && <img src={checkboxImg} alt="check"/>}
                                </div>
                                <p className={style.checkboxText}>{el}</p>
                            </div>
                        )}
                    </div>}
                </div>
            </div>

            <div className={style.content}>
                <h1>{category[categoryId]}</h1>
                <div className={style.sortingBlock}>
                    <span className={style.soringLable}>Sorting:</span>
                    <div  className={sortOpen ? `${style.sortingBody} ${style.activ}` : style.sortingBody}>
                        <div onClick={() => setSortOpen(!sortOpen)} className={style.sortingHeader}>
                            <span className={style.sortingCurrent}>{sortSelectItem.name}</span>
                            <img className={style.checkImg} src={checkImg} alt="check"/>
                        </div>
                        <div className={style.sortingItems}>
                            {sortSelect.map((obj, index ) =>
                                <div onClick={ () => (dispatch(setSortSelectItem(obj)), setSortOpen(false))} key={index}
                                     className={obj.name === sortSelectItem.name ? `${style.soringActiv} ${style.sortingItem}`: style.sortingItem}>{obj.name}</div>)}
                        </div>
                    </div>
                </div>
                <div className={products.length === 0 & status !== 'loading' ? `${style.selectionItems} ${style.error}` : style.selectionItems }>
                    <CardItem items={products}  status={status} errorBlock={errorBlock}/>
                </div>
            </div>
        </div>
    )}

export default Selection