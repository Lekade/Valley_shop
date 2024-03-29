import React, {useEffect} from "react";
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
                <svg className={style.emptyBasketImage} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4167 2.79167C11.4167 2.28334 11.2148 1.79582 10.8553 1.43638C10.4959 1.07693 10.0084 0.875
                     9.50002 0.875C8.99169 0.875 8.50418 1.07693 8.14473 1.43638C7.78529 1.79582 7.58335 2.28334 7.58335
                      2.79167M16.4575 7.292L17.7848 15.917C17.8268 16.19 17.8093 16.4688 17.7335 16.7344C17.6577 17 17.5254
                       17.246 17.3456 17.4557C17.1659 17.6654 16.9429 17.8338 16.692 17.9493C16.4412 18.0648 16.1683 18.1248
                        15.8921 18.125H3.10794C2.83158 18.125 2.55849 18.0653 2.30739 17.9499C2.05628 17.8345 1.83309 17.6662
                         1.65313 17.4565C1.47317 17.2467 1.34069 17.0006 1.26478 16.7349C1.18886 16.4691 1.17131 16.1901 1.21331
                          15.917L2.5406 7.292C2.61023 6.83927 2.83968 6.42645 3.18741 6.1283C3.53513 5.83015 3.97814 5.66638 4.43619
                           5.66667H14.5639C15.0217 5.66661 15.4645 5.83048 15.812 6.12861C16.1596 6.42674 16.3879 6.83944 16.4575
                            7.292Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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