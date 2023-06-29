import React from "react";
import style from "../../Сheckout/CheckoutForm/Form.module.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {fetchAddOrders} from "../../../redux/slices/ordersSlice";
import {useDispatch} from "react-redux";


const PersonalData = () => {
    const dispatch = useDispatch()
    return <div className={style.personalDataForm}>
        <h1 className={style.header}>personal data</h1>
        <Formik
            initialValues={{ name: '', surname: '', phone: '', email: '', country: '', address: '', postcode: ''}}
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
                    </div>
                    <h1 className={style.header}>change password</h1>

                </Form>
            )}
        </Formik>
    </div>
}

export default PersonalData