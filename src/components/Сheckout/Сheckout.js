import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
    const {inputData} = useSelector(state => state.ordersReducer)
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
                <Formik
                    initialValues={{ name: '', surname: '', phone: '', email: '', country: '', address: '', postcode: '', note: '', payment: 'visa'}}
                    validate={values => {
                        const errors = {};

                        if (!values.name) {
                            errors.name = 'Required';
                            console.log(errors.name)
                        }
                        if (!values.surname){
                            errors.surname = 'Required';
                        }
                        if (!values.phone){
                            errors.phone = 'Required';
                        }
                        if (!values.country){
                            errors.country = 'Required';
                        }
                        if (!values.address){
                            errors.address = 'Required';
                        }
                        if (!values.postcode){
                            errors.postcode = 'Required';
                        }
                        if (!values.email){
                            errors.email = 'Required';
                        }
                        else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(values)
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form id="checkout">
                            {/*<Field type="email" name="email" />*/}
                            {/*<ErrorMessage name="email" component="div" />*/}
                            {/*<Field type="password" name="password" />*/}
                            {/*<ErrorMessage name="password" component="div" />*/}
                            {/*<button type="submit" >*/}
                            {/*    Submit*/}
                            {/*</button>*/}
                            <div className={style.infoBlock}>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>name</h3>
                                    <Field name="name" className={(errors.name && touched.name) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your name'/>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>surname</h3>
                                    <Field name="surname"   className={(errors.surname && touched.surname) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your surname'/>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>phone</h3>
                                    <Field name="phone" className={(errors.phone && touched.phone) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='phone number'/>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>email</h3>
                                    <Field name="email" className={(errors.email && touched.email) ? `${style.error} ${style.inputEl}` : style.inputEl} type="email" placeholder='your email'/>
                                </label>
                            </div>
                            <h2 className={style.header}>delivery details</h2>
                            <div className={style.infoBlock}>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>REGION/COUNTRY/STATE</h3>
                                    <Field name="country" className={(errors.country && touched.country) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your location'/>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>STREET, HOUSE, APARTMENT</h3>
                                    <Field name="address" className={(errors.address && touched.address) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your location'/>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>POSTCODE</h3>
                                    <Field name="postcode" className={(errors.postcode && touched.postcode) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your postcode'/>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>NOTE</h3>
                                    <Field name="note"  className={style.inputEl} type="text" placeholder='optional'/>
                                </label>
                            </div>
                            <h2 className={style.header}>payment method</h2>
                            <div className={style.paymentBlock}>
                                <label className={style.paymentEl}>
                                    <Field  type="radio" name='payment' value="visa"/>
                                    <img src={visaImg} alt="visa"/>
                                </label>
                                <label className={style.paymentEl}>
                                    <Field type="radio" name='payment' value="masterCard"/>
                                    <img src={masterCardImg} alt="masterCard"/>
                                </label>
                                <label className={style.paymentEl}>
                                    <Field type="radio" name='payment' value="GPay"/>
                                    <img src={GPayImg} alt="GPay"/>
                                </label>
                                <label className={style.paymentEl}>
                                    <Field type="radio" name='payment' value="APay"/>
                                    <img src={APayImg} alt="APay"/>
                                </label>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className={style.checkoutBasket}>
                <div className={style.basketInner}>
                    {basket}
                </div>
                <div className={style.priceInfo}><p>Cost of the items:</p>{totalPrice}<p>$</p></div>
                <div className={style.priceInfo}><p>Delivery cost:</p>{delivery}<p>$</p></div>
                <div className={style.priceTotal}><p>Total due:</p>{totalPrice + delivery}<p>$</p></div>
                <button form="checkout" type="submit" className={style.submiteBtn}>proceed</button>
            </div>
        </div>
    )
}



export default Checkout