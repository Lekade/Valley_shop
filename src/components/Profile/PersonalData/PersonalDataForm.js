import React from "react";
import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {fetchAddOrders} from "../../../redux/slices/ordersSlice";
import style from "../../Сheckout/CheckoutForm/Form.module.css";

const PersonalDataForm = ({setOpenForm}) => {
    const dispatch = useDispatch()
    return(
        <Formik
            initialValues={{ name: '', surname: '', phone: '', email: '', country: '', address: '', postcode: ''}}
            validate={values => {
                const errors = {};
                errors.name = !values.name && 'Required';
                errors.surname = !values.surname && 'Required';
                errors.phone = !values.phone && 'Required';
                errors.country = !values.country && 'Required';
                errors.address = !values.address && 'Required';
                errors.postcode = !values.postcode && 'Required';
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
                <Form id="changePersonalData">
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
                        <div className={style.submitBlock}>
                            <button form="changePersonalData" className={style.submitBtn}>save</button>
                            <div className={style.cancelBtn} onClick={() =>{
                                setOpenForm(false)
                            }}>cancel</div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default PersonalDataForm