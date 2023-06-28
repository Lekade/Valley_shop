import React from "react";
import {useDispatch} from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import {fetchAddOrders} from "../../redux/slices/ordersSlice";

import style from './Сheckout.module.css'
import visaImg from '../../assecs/images/visa.svg'
import masterCardImg from '../../assecs/images/masterCard.svg'
import GPayImg from '../../assecs/images/GPay.svg'
import APayImg from '../../assecs/images/APay.svg'
import Basket from "./Basket";

const Checkout = () => {
    const dispatch = useDispatch()
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
                        dispatch(fetchAddOrders(values))
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form id="checkout">
                            <div className={style.infoBlock}>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>name</h3>
                                    <Field name="name" className={(errors.name && touched.name) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your name'/>
                                    <div className={style.errorBlock}>
                                        <ErrorMessage className={style.errorMessage} name="name" component="div" />
                                    </div>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>surname</h3>
                                    <Field name="surname"   className={(errors.surname && touched.surname) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your surname'/>
                                    <div className={style.errorBlock}>
                                        <ErrorMessage className={style.errorMessage} name="surname" component="div" />
                                    </div>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>phone</h3>
                                    <Field name="phone" className={(errors.phone && touched.phone) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='phone number'/>
                                    <div className={style.errorBlock}>
                                        <ErrorMessage className={style.errorMessage} name="phone" component="div" />
                                    </div>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>email</h3>
                                    <Field name="email" className={(errors.email && touched.email) ? `${style.error} ${style.inputEl}` : style.inputEl} type="email" placeholder='your email'/>
                                    <div className={style.errorBlock}>
                                        <ErrorMessage className={style.errorMessage} name="email" component="div" />
                                    </div>
                                </label>
                            </div>
                            <h2 className={style.header}>delivery details</h2>
                            <div className={style.infoBlock}>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>REGION/COUNTRY/STATE</h3>
                                    <Field name="country" className={(errors.country && touched.country) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your location'/>
                                    <div className={style.errorBlock}>
                                        <ErrorMessage className={style.errorMessage} name="country" component="div" />
                                    </div>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>STREET, HOUSE, APARTMENT</h3>
                                    <Field name="address" className={(errors.address && touched.address) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your location'/>
                                    <div className={style.errorBlock}>
                                        <ErrorMessage className={style.errorMessage} name="address" component="div" />
                                    </div>
                                </label>
                                <label className={style.contactLabel}>
                                    <h3 className={style.title}>POSTCODE</h3>
                                    <Field name="postcode" className={(errors.postcode && touched.postcode) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your postcode'/>
                                    <div className={style.errorBlock}>
                                        <ErrorMessage className={style.errorMessage} name="postcode" component="div" />
                                    </div>
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
            <Basket/>
        </div>
    )
}



export default Checkout