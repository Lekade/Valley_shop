import React from "react";
import style from './Сheckout.module.css'
import visaImg from '../../assecs/images/visa.svg'
import masterCardImg from '../../assecs/images/masterCard.svg'
import GPayImg from '../../assecs/images/GPay.svg'
import APayImg from '../../assecs/images/APay.svg'


const Checkout = ({basketItem = [], removeBasketItem}) => {
    const totalPrice = basketItem.reduce((sum, obj) => Number(obj.item.price) + sum, 0)
    let delivery = 30

    let checkoutItems = basketItem.map(item => <div key={item.item.id} className={style.basketItem}>
        <button className={style.deliteItem} onClick={() => removeBasketItem(item.item.id, item.label)}>X</button>
        <img className={style.imgItem} src={item.item.imageUrl} alt="item"/>
        <div className={style.infoItem}>
            <h4 className={style.nameItem}>{item.item.title}</h4>
            <p className={style.labelInfo}>Size:</p>
            {item.item.size.map(el => <button className={style.sizeMark}>{el}</button>)}
            <p className={style.labelInfo}>Quantity:</p>
            <div className={style.quantityBlock}>
                <div className={style.quantity}>123</div>
                <span className={style.quantitySet}>+</span>
                <span className={style.quantitySet}>-</span>
            </div>
            <div className={style.priceItem}>{item.item.price}<p>$</p></div>
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
                    {checkoutItems}
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