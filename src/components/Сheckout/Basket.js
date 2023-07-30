import React, {useEffect} from "react";
import basketImg from "../../assecs/images/basket.svg";
import style from './Сheckout.module.css'
import {
    fetchAugmentCheckoutItem,
    fetchCheckoutItems, fetchReduceCheckoutItem,
    fetchRemoveCheckoutItem
} from "../../redux/slices/checkoutSlice";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useLocation} from 'react-router-dom';
import {useResize} from "../../useResize";


const Basket = ({setBasketPopupOpen}) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const size = useResize()
    const popupOpen = location.pathname === '/Category' || location.pathname.includes('/Product/')
        || location.pathname === '/Favorites' || size.width <= 768 && true
    const {checkoutItems} = useSelector(state => state.checkoutReducer)
    const totalPrice = checkoutItems.reduce((sum, obj) => Number(obj.price * obj.quantity) + sum, 0)
    let delivery = checkoutItems.length > 0 ? 30 : 0

    useEffect(() => {
        dispatch(fetchCheckoutItems())
    }, [])

    const basket = checkoutItems.map(item=> <div key={item.id} className={style.basketItem}>
        <button className={style.deliteItem} onClick={() => dispatch(fetchRemoveCheckoutItem(item.number))}>X</button>
        <img className={style.imgItem} src={`/${item.imageUrl[0]}`} alt="item"/>
        <div className={style.infoItem}>
            <h4 className={style.nameItem}>{item.title}</h4>
            <p className={style.labelInfo}>Size:</p>
            <div className={style.sizeMark}>{item.size}</div>
            <p className={style.labelInfo}>Quantity:</p>
            <div className={style.quantityBlock}>
                <div className={style.quantity}>{item.quantity}</div>
                <span className={style.quantitySet} onClick={() => dispatch(fetchAugmentCheckoutItem(item))}>+</span>
                <span className={style.quantitySet} onClick={() => dispatch(fetchReduceCheckoutItem(item))}>-</span>
            </div>
            <div className={style.priceItem}>{Number(item.price * item.quantity)}<p>$</p></div>
        </div>
    </div>)

    return  <div className={popupOpen ? `${style.checkoutBasketPopup} ${style.checkoutBasket}` : style.checkoutBasket}>
        <button className={style.closeBtn} onClick={() => setBasketPopupOpen(false)}>
            <svg className={style.closeBtnImg} viewBox="0 0 35 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L8 20L24 36" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className={style.closeBtnText}>continue shopping</p>
        </button>
        <div className={style.info}><h2>My purchases</h2><span>-</span></div>
        <div className={style.basketInner}>
            {checkoutItems.length > 0 ? basket : <div className={style.emptyBasket}>
                <img className={style.emptyBasketImage} src={basketImg} alt="basket"/>
                <p className={style.emptyBasketText}>you haven't added any items to cart yet</p>
            </div>}
        </div>
        <div className={style.priceInfo}><p>Cost of the items:</p>{totalPrice}<p>$</p></div>
        <div className={`${style.priceInfo} ${style.delivery}`}><p>Delivery cost:</p>{delivery}<p>$</p></div>
        <div className={style.priceTotal}><p>Total due:</p>{totalPrice + delivery}<p>$</p></div>
        <button form="checkout" type="submit" className={`${style.btn} ${style.submitBtn}`}>proceed</button>
        <NavLink to='/Checkout' onClick={() => setBasketPopupOpen(false)} className={`${style.btn} ${style.checkoutLink}`}>Checkout</NavLink>
    </div>
}

export default Basket