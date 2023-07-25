import React, {useEffect, useRef, useState} from "react";
import style from './Selection.module.css'
import checkImg from '../../assecs/images/check.svg'
import checkboxImg from '../../assecs/images/checkbox.svg'
import SliderRenge from "./sliderRenge/SliderRenge";
import CardItem from "../CardItem/CardItem";
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
    selectorSortSelect,
    setSortSelectItem,
    setSortSeasonNum,
    setSortSizeNum,
    fetchProducts,
    setFilter,
    setSelectSearch, setGender
} from "../../redux/slices/filterSlice"
import qs from "qs";


const Selection = () => {
    const navigate = useNavigate()
    const [sortOpen, setSortOpen] = useState(false)
    const [sortPriceOpen, setSortPriceOpen] = useState(true)
    const [sortSeasonOpen, setSortSeasonOpen] = useState(true)
    const [sortSizeOpen, setSortSizeOpen] = useState(true)
    const isSearch = useRef(false)
    const isMounted = useRef(false)
    const [mobaileFilterOpen, setMobaileFilterOpen] = useState(false)

    const dispatch = useDispatch()
    const [sortSelect, sortSelectItem,  sortSeason,  sortSeasonNum, sortSize,
        sortSizeNum, category, categoryId, products, status, productsNoFilter, gender] = useSelector(state => selectorSortSelect(state))

    useEffect(()=>{
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortSelect.find(obj => obj.sortProperty === params.sortProperty)
            dispatch(setSelectSearch({
                    ...params,
                    sort,
                })
            )
            dispatch(setGender(params.gender))
            isSearch.current = true
        }
    }, [])

    useEffect(()=>{
        if(!isSearch.current){
            getProducts()
        }
        isSearch.current = false
    },[categoryId, sortSelectItem])

    const getProducts = () =>  {
        const order = sortSelectItem.sortProperty.includes('-') ? 'asc' : 'desc'
        const category = categoryId >= 0 ? `category=${categoryId}`: ''
        const sortBy = sortSelectItem.sortProperty.replace('-', '')
        dispatch(fetchProducts({category, sortBy,order}))
    }

    useEffect(()=>{
        dispatch(setFilter())
    }, [productsNoFilter])

    useEffect(()=>{
        if(isMounted.current){
            const queryString = qs.stringify({
                gender,
                sortProperty: sortSelectItem.sortProperty,
                categoryId,

            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, sortSelectItem, gender])

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

    const sortRef = useRef()
    useEffect(() => {
        if(!sortOpen) return;
        const handleClickOutside = e =>{
            if(!sortRef.current) return
            if(!sortRef.current.contains(e.target)){
                setSortOpen(false)
            }
        };
        document.addEventListener('click' , handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside)
    }, [sortOpen])

    return (
        <div className={style.selection}>
            <div className={mobaileFilterOpen ? `${style.active} ${style.sidebar}` : style.sidebar}>
                <div className={style.sortEl}>
                    <button className={style.filtersClouse} onClick={() => setMobaileFilterOpen(false)}>
                        <div className={style.btnName}>Filters</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <path d="M11.0572 3.05737C11.3072 2.80741 11.6463 2.66699 11.9998 2.66699C12.3534 2.66699 12.6925 2.80741 12.9425 3.05737L18.9425 9.05737C19.1925 9.30741 19.3329 9.64649 19.3329 10C19.3329 10.3536 19.1925 10.6927 18.9425 10.9427L12.9425 16.9427C12.691 17.1856 12.3542 17.32 12.0046 17.3169C11.655 17.3139 11.3206 17.1737 11.0734 16.9265C10.8262 16.6793 10.686 16.3448 10.6829 15.9952C10.6799 15.6456 10.8143 15.3088 11.0572 15.0574L14.6665 11.3334H1.99984C1.64622 11.3334 1.30708 11.1929 1.05703 10.9429C0.80698 10.6928 0.666504 10.3537 0.666504 10C0.666504 9.64642 0.80698 9.30728 1.05703 9.05723C1.30708 8.80718 1.64622 8.66671 1.99984 8.66671H14.6665L11.0572 4.94271C10.8072 4.69267 10.6668 4.35359 10.6668 4.00004C10.6668 3.64649 10.8072 3.30741 11.0572 3.05737Z" fill="#3B3B3B"/>
                        </svg>
                    </button>
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
                    <div ref={sortRef}  className={sortOpen ? `${style.sortingBody} ${style.activ}` : style.sortingBody}>
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
                    <button className={style.filtersShow} onClick={() => setMobaileFilterOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.49967 3.33333L8.33301 3.33333" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.6667 3.33333L17.5 3.33333" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.5 10L10 10" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.3333 10L17.5 10" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.50033 16.6667L6.66699 16.6667" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 16.6667L17.5 16.6667" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.33301 0.833328L8.33301 5.83333" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.333 7.5L13.333 12.5" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.66699 14.1667L6.66699 19.1667" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className={products.length === 0 && status !== 'loading' ? `${style.selectionItems} ${style.error}` : style.selectionItems }>
                    <CardItem items={products}  status={status} errorBlock={errorBlock}/>
                </div>
            </div>
        </div>
    )}

export default Selection