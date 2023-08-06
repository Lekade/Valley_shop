import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import MaskedInput from "react-text-mask";

import style from "./ProductPage.module.css"

const phoneNumberMask = [
    '+', /\d/, /\d/, " ", "(", /[1-9]/, /\d/, /\d/, ")",
    " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/
];


const OrderOneClick = ({orderPopupOpen, setOrderPopupOpen}) => {
    const [ formSent, setformSent] = useState(false)

    return <div className={orderPopupOpen ? `${style.overlay} ${style.overlayOpen}` : style.overlay}>
        <button onClick={() => setOrderPopupOpen(false)} className={style.clouse}>+</button>
        <div className={style.popup}>
            <h3 className={style.popupTitle}>Order in 1 click</h3>
            {formSent  ?
                <div className={style.message}>
                    You have successfully left your phone number, and we will call you back to confirm the order details
                </div>
                : <>
                <p className={style.popupText}>Leave your phone number and we will call you back to confirm the order details</p>
                <Formik
                    initialValues={{phone: ''}}
                    validate={values => {
                        const errors = {};

                        if(!values.phone){
                            errors.phone = 'Required'

                        }else if(values.phone.includes('_')){
                            errors.phone = 'Enter the full number'
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm}) => {
                        setSubmitting(false);
                        resetForm({  phone: ''})
                        setformSent(true)
                    }}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form id="orderOneClick">
                            <label className={style.inputLabel}>
                                <Field name="phone"
                                       render={({ field }) => (
                                           <MaskedInput
                                               {...field}
                                               mask={phoneNumberMask}
                                               className={(errors.phone && touched.phone) ? `${style.error} ${style.inputEl}` : style.inputEl}
                                               type="tel" placeholder='Phone'
                                           />
                                       )}
                                />
                                <div className={style.errorBlock}>
                                    <ErrorMessage className={style.errorMessage} name="phone" component="div" />
                                </div>
                            </label>
                            <button type="submit" form="orderOneClick" className={style.submitBtn}>save</button>
                        </Form>
                    )}
                </Formik>
            </>}

        </div>

    </div>
}

export default OrderOneClick