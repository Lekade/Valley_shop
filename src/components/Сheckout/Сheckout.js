import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

import {
    fetchCheckoutItems,
    fetchRemoveCheckoutItem,
    setAugmentCheckoutItem,
    setReduceCheckoutItem
} from "../../redux/slices/checkoutSlice";
import style from './Сheckout.module.css'
import visaImg from '../../assecs/images/visa.svg'
import masterCardImg from '../../assecs/images/masterCard.svg'
import GPayImg from '../../assecs/images/GPay.svg'
import APayImg from '../../assecs/images/APay.svg'


const Checkout = () => {
    const dispatch = useDispatch()
    const {checkoutItems} = useSelector(state => state.checkoutReducer)
    const totalPrice = checkoutItems.reduce((sum, obj) => Number(obj.price * obj.quantity) + sum, 0)
    let delivery = 30

    useEffect(() => {
        checkoutItems.length === 0 && dispatch(fetchCheckoutItems())
    }, [])


    const basket = checkoutItems.map(item=> <div key={item.id} className={style.basketItem}>
        <button className={style.deliteItem} onClick={() => dispatch(fetchRemoveCheckoutItem(item.number))}>X</button>
        <img className={style.imgItem} src={`/${item.imageUrl}`} alt="item"/>
        <div className={style.infoItem}>
            <h4 className={style.nameItem}>{item.title}</h4>
            <p className={style.labelInfo}>Size:</p>
            <div className={style.sizeMark}>{item.size}</div>
            <p className={style.labelInfo}>Quantity:</p>
            <div className={style.quantityBlock}>
                <div className={style.quantity}>{item.quantity}</div>
                <span className={style.quantitySet} onClick={() => dispatch(setAugmentCheckoutItem(item.number))}>+</span>
                <span className={style.quantitySet} onClick={() => dispatch(setReduceCheckoutItem(item.number))}>-</span>
            </div>
            <div className={style.priceItem}>{Number(item.price * item.quantity)}<p>$</p></div>
        </div>
    </div>)

    return (
        <div className={style.checkout}>
            <div className={style.checkoutInfo}>
                <h2 className={style.header}>Contact details</h2>
                <div className={style.infoBlock}>
                    <label className={style.contactLabel}>
                        <h3 className={style.title}>name</h3>
                        <input className={style.inputEl} type="text" placeholder='your name'/>
                    </label>
                    <label className={style.contactLabel}>
                        <h3 className={style.title}>surname</h3>
                        <input className={style.inputEl} type="text" placeholder='your surname'/>
                    </label>
                    <label className={style.contactLabel}>
                        <h3 className={style.title}>phone</h3>
                        <input className={style.inputEl} type="text" placeholder='phone number'/>
                    </label>
                    <label className={style.contactLabel}>
                        <h3 className={style.title}>email</h3>
                        <input className={style.inputEl} type="text" placeholder='your email'/>
                    </label>
                </div>
                <h2 className={style.header}>delivery details</h2>
                <div className={style.infoBlock}>
                    <label className={style.contactLabel}>
                        <h3 className={style.title}>REGION/COUNTY/STATE</h3>
                        <input className={style.inputEl} type="text" placeholder='your location'/>
                    </label>
                    <label className={style.contactLabel}>
                        <h3 className={style.title}>STREET, HOUSE, APARTMENT</h3>
                        <input className={style.inputEl} type="text" placeholder='your location'/>
                    </label>
                    <label className={style.contactLabel}>
                        <h3 className={style.title}>POSTCODE</h3>
                        <input className={style.inputEl} type="text" placeholder='your postcode'/>
                    </label>
                    <label className={style.contactLabel}>
                        <h3 className={style.title}>NOTE</h3>
                        <input className={style.inputEl} type="text" placeholder='optional'/>
                    </label>
                </div>
                <h2 className={style.header}>payment method</h2>
                <div className={style.paymentBlock}>
                    <label className={style.paymentEl}>
                        <input type="radio" name='payment'/>
                        <img src={visaImg} alt="visa"/>
                    </label>
                    <label className={style.paymentEl}>
                        <input type="radio" name='payment'/>
                        <img src={masterCardImg} alt="masterCard"/>
                    </label>
                    <label className={style.paymentEl}>
                        <input type="radio" name='payment'/>
                        <img src={GPayImg} alt="GPay"/>
                    </label>
                    <label className={style.paymentEl}>
                        <input type="radio" name='payment'/>
                        <img src={APayImg} alt="APay"/>
                    </label>
                </div>
            </div>
            <div className={style.checkoutBasket}>
                <div className={style.basketInner}>
                    {basket}
                </div>
                <div className={style.priceInfo}><p>Cost of the items:</p>{totalPrice}<p>$</p></div>
                <div className={style.priceInfo}><p>Delivery cost:</p>{delivery}<p>$</p></div>
                <div className={style.priceTotal}><p>Total due:</p>{totalPrice + delivery}<p>$</p></div>
                <button className={style.submiteBtn}>proceed</button>
            </div>
        </div>
    )
}

export default Checkout