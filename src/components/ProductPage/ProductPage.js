import React, {useEffect, useState} from "react";
import style from "./ProductPage.module.css"
import {useParams} from "react-router-dom";
import {fetchProduct} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {fetchClickToFavorite, fetchFavorites} from "../../redux/slices/favoriteSlice";
import {fetchAddCheckoutItem, fetchCheckoutItems} from "../../redux/slices/checkoutSlice";
import ProductSlider from "./ProductSlider";
import OrderOneClick from "./OrderOneClick";
import {CheckIMG} from "../Selection/CheckIMG";

const ProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.filterReducer.product)
    const {favorites} = useSelector(state => state.favoritesReducer)
    const {checkoutItems} = useSelector(state => state.checkoutReducer)
    const [accordionOpen, setaccordionOpen] = useState([])
    const [selectedSize, setSelectedSize] = useState([])
    const [productColorActive, setProductColorActive] = useState(0)
    const productColor = ['#808080', '#FFFFFF', '#E2D0EF', '#B199E3', '#F29595']
    const [orderPopupOpen, setOrderPopupOpen] = useState(false)

    useEffect(()=>{
        favorites.length === 0 && dispatch(fetchFavorites())
        checkoutItems.length === 0 && dispatch(fetchCheckoutItems())
        accordionOpen.length === 0 && product.hasOwnProperty('info') && product.info.forEach(() => accordionOpen.push(false))
        dispatch(fetchProduct(id))
    }, [])


    useEffect(() => {
        setSelectedSize(product.hasOwnProperty('size') ? [product.size[0]] : [])
    }, [product])

    useEffect(() => {
        btnBuyOff(product.id)
    }, [selectedSize])

    function accordionItemOpen(index) {
        setaccordionOpen(prevState => {
            const newState = [...prevState]
            newState[index] = !prevState[index]
            return newState
        })}

    const accordion = product.hasOwnProperty('info') && product.info.map((item, index )=> <div key={index} className={style.accordionItem}>
        <div className={accordionOpen[index] ? `${style.accordionTitle} ${style.accordionTitleOpen}`
            : style.accordionTitle} onClick={() => accordionItemOpen(index)}>
            <h2 className={style.accordionH2}>{Object.keys(item)[0]}</h2>
            {CheckIMG(style.checkImg)}
        </div>
    {accordionOpen[index] && <ul className={style.accordionInfo}>
            {item[Object.keys(item)[0]].map((text, i)=>
                <li key={i} className={style.infoItem}>{text}</li>
            )}
        </ul>}
    </div>)

    let btnFavoriteАdded = (id) => {
        return favorites.some( i => i.id === id)
    }

    let btnBuyOff = (id) => {
        return checkoutItems.some( i => i.id === id && i.size[0] === selectedSize[0])
    }

    if(!product.id){
        return  'Loading...'
    }

    return <div className={style.wrapper}>
        <ProductSlider productImages={product.imageUrl}/>
        <section className={style.paramsSection}>
            <div className={style.paramsSectionInner}>
                <div className={style.nameBlock}>
                    <h1 className={style.name}>{product.title}</h1>
                    <p className={style.article}>arteccle: {product.id}</p>
                </div>
                <button className={btnFavoriteАdded(product.id) ? `${style.btnFavoriteAdded} ${style.btnFavorite}`
                    : style.btnFavorite} onClick={() => dispatch(fetchClickToFavorite(product))}>
                     <svg className={style.likeImg} viewBox="0 0 24 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.67427C10.7746 1.63248 9.17033 1 7.5 1C3.86891 1 1 3.85652 1 7.5C1 9.71376 2.00704
                         11.6488 3.56949 13.5604C5.11594 15.4523 7.30874 17.4408 9.85357 19.7484L9.87682 19.7695L9.87826
                          19.7708L11.3268 21.0895L12 21.7023L12.6732 21.0895L14.1217 19.7708L14.1232 19.7695L14.1464 19.7484C16.6913
                           17.4408 18.8841 15.4523 20.4305 13.5604C21.993 11.6488 23 9.71376 23 7.5C23 3.85652 20.1311 1 16.5 1C14.8297
                            1 13.2254 1.63248 12 2.67427Z" stroke="#3C3C3C" strokeWidth="2"/>
                    </svg>
                </button>
                <div className={style.sortBlock}>
                    <h2 className={style.title}>Color:</h2>
                    <div className={style.sortInner}>
                        {productColor.map((color, index) => (
                            <div key={index} onClick={() => setProductColorActive(index)}  className={(productColorActive === index) ? `${style.colorItem} ${style.colorItemActive}` : style.colorItem} style={{backgroundColor: color}}>
                                {index}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.sortBlock}>
                    <h2 className={style.title}>Size:</h2>
                    <div className={style.sortInner}>
                        {product.size && product.size.map((item, index )=> <div key={index} className={item === selectedSize[0] ? `${style.selectedSize} ${style.sizeItem}`
                            : style.sizeItem} onClick={() => setSelectedSize([item])}>{item}</div>)}
                    </div>
                </div>
                <div className={style.priceBlock}>
                    Price: {product.price} $
                </div>
                <div className={style.ratingBlock}>
                    <div className={style.asterisk}>
                        <svg viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="linear-gradient">
                                <stop offset="0%" stopColor="#e3be60"/>
                                <stop offset={`${(product.rating * 100)/ 5}%`} stopColor="#e3be60"/>
                                <stop offset={`${(product.rating * 100)/ 5}%`} stopColor="#d9d9d9"/>
                                <stop offset="100%" stopColor="#d9d9d9"/>
                            </linearGradient>
                            <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765
                             30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill="url(#linear-gradient)"/>
                        </svg>
                    </div>
                    <div className={style.ratingNumber}>
                        {product.rating}
                    </div>
                </div>
                <button className={ btnBuyOff(product.id) ? `${style.btnBuy} ${style.btnBuyOff}` : style.btnBuy }
                        onClick={() => dispatch(fetchAddCheckoutItem({product, selectedSize}))}>{btnBuyOff(product.id) ? 'in a bag' : 'add to bag'}</button>
                <button onClick={() => setOrderPopupOpen(true)}  className={style.btnBuy1Click}>buy in 1 click</button>

                <div className={style.accordionBlock}>
                    {accordion}
                </div>
            </div>
        </section>
        <OrderOneClick orderPopupOpen={orderPopupOpen} setOrderPopupOpen={setOrderPopupOpen}/>
    </div>
}

export default ProductPage