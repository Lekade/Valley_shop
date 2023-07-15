import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import style from "../../Сheckout/CheckoutForm/Form.module.css";
import {useDispatch} from "react-redux";
import {setRegister} from "../../../redux/slices/profileSlice";
import { useNavigate } from "react-router-dom"

const RegisterForm = ({setLoginPopupOpen}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
      return (
        <Formik
            initialValues={{ name: '', phone: '', email: '', password: ''}}
            validate={values => {
                const errors = {};
                if(!values.name){
                    errors.name = 'Required';
                }
                if(!values.phone){
                    errors.phone = 'Required';
                }

                if(!values.password){
                    errors.password = 'Required';
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
            onSubmit={(values, { setSubmitting,  resetForm }) => {
                setSubmitting(false);
                dispatch(setRegister(values))
                navigate("/Profile/PersonalData")
                setLoginPopupOpen(false)
            }}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form id="register">
                    <div className={style.infoBlock}>
                        <label className={style.contactLabel}>
                            <h3 className={style.title}>Name</h3>
                            <Field name="name" className={(errors.name && touched.name) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='your name'/>
                            <div className={style.errorBlock}>
                                <ErrorMessage className={style.errorMessage} name="name" component="div" />
                            </div>
                        </label>
                        <label className={style.contactLabel}>
                            <h3 className={style.title}>Phone</h3>
                            <Field name="phone" className={(errors.phone && touched.phone) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='phone'/>
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
                            <h3 className={style.title}>Password</h3>
                            <Field name="password" className={(errors.password && touched.password) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='password'/>
                            <div className={style.errorBlock}>
                                <ErrorMessage className={style.errorMessage} name="password" component="div" />
                            </div>
                        </label>
                        <div className={style.submitBlock}>
                            <button form="register" className={style.submitBtn}>continue</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default RegisterForm