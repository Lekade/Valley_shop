import React from "react";
import style from './Сheckout.module.css'
import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = () => {
    return (
        <div className={style.checkout}>
            <h1 className={style.pageName}>checkout</h1>
            <CheckoutForm/>
            <Basket/>
        </div>
    )
}



export default Checkout