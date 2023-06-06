import React, {useEffect, useState} from "react";
import style from "./ProductPage.module.css"
import checkImg from '../../assecs/images/check.svg'
import {useParams} from "react-router-dom";
import {fetchProduct} from "../../redux/slices/productSlice";
import {useDispatch, useSelector} from "react-redux";

const ProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productReducer.product)
    const [accordionOpen, setaccordionOpen] = useState([])

    useEffect(()=>{
        accordionOpen.length === 0 && product &&  product.info && product.info.forEach(() => accordionOpen.push(false))
        dispatch(fetchProduct(id))
    }, [])

    function accordionItemOpen(index) {
        setaccordionOpen(prevState => {
            const newState = [...prevState]
            newState[index] = !prevState[index]
            return newState
        })}

    const accordion = product && product.info && product.info.map((item, index )=> <div key={index} className={style.accordionItem}>
        <div className={accordionOpen[index] ? `${style.accordionTitle} ${style.accordionTitleOpen}` : style.accordionTitle} onClick={() => accordionItemOpen(index)}>
            <h2 className={style.accordionH2}>{Object.keys(item)[0]}</h2>
            <img className={style.checkImg} src={checkImg} alt="check"/>
        </div>
    {accordionOpen[index] && <ul className={style.accordionInfo}>
            {item[Object.keys(item)[0]].map((text, i)=>
                <li key={i} className={style.infoItem}>{text}</li>
            )}
        </ul>}
    </div>)

    const gradient = product && `${(product.rating * 100)/ 5}%`

    if(!product){
        return  'Loading...'
    }

    return <div className={style.wrapper}>
        <section className={style.imagesSection}>
            <img className={style.image} src={`/${product.imageUrl}`} alt="IMG"/>
        </section>
        <section className={style.paramsSection}>
            <div className={style.paramsSectionInner}>
                <div className={style.nameBlock}>
                    <h1 className={style.name}>{product.title}</h1>
                    <p className={style.article}>arteccle: {product.id}</p>
                </div>
                <button className={style.btnFavorite} >
                     <svg className={style.likeImg} viewBox="0 0 24 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.67427C10.7746 1.63248 9.17033 1 7.5 1C3.86891 1 1 3.85652 1 7.5C1 9.71376 2.00704 11.6488 3.56949 13.5604C5.11594 15.4523 7.30874 17.4408 9.85357 19.7484L9.87682 19.7695L9.87826 19.7708L11.3268 21.0895L12 21.7023L12.6732 21.0895L14.1217 19.7708L14.1232 19.7695L14.1464 19.7484C16.6913 17.4408 18.8841 15.4523 20.4305 13.5604C21.993 11.6488 23 9.71376 23 7.5C23 3.85652 20.1311 1 16.5 1C14.8297 1 13.2254 1.63248 12 2.67427Z" stroke="#3C3C3C" stroke-width="2"/>
                    </svg>
                </button>
                <div className={style.sortBlock}>
                    <h2 className={style.title}>Color:</h2>
                    <div className={style.sortInner}>
                        <div className={style.colorItem}>

                        </div>
                        <div className={style.colorItem}>

                        </div>
                    </div>
                </div>
                <div className={style.sortBlock}>
                    <h2 className={style.title}>Size:</h2>
                    <div className={style.sortInner}>
                        {product.size.map(item => <div className={style.sizeItem}>{item}</div>)}
                    </div>
                </div>
                <div className={style.priceBlock}>
                    Price: {product.price} $
                </div>
                <div className={style.ratingBlock}>
                    <div className={style.asterisk}>
                        <svg  width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="linear-gradient">
                                <stop offset="0%" stop-color="#e3be60"/>
                                <stop offset={gradient} stop-color="#e3be60"/>
                                <stop offset={gradient} stop-color="#d9d9d9"/>
                                <stop offset="100%" stop-color="#d9d9d9"/>
                            </linearGradient>
                            <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765 30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill="url(#linear-gradient)"/>
                        </svg>
                    </div>
                    <div className={style.ratingNumber}>
                        {product.rating}
                    </div>
                </div>
                <button className={style.btnBuy}>add to bag</button>
                <button className={style.btnBuy1Click}>buy in 1 click</button>

                <div className={style.accordionBlock}>
                    {accordion}
                </div>
            </div>


        </section>
    </div>
}

export default ProductPage