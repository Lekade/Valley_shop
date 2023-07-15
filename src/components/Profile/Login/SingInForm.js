import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import style from "../../Сheckout/CheckoutForm/Form.module.css";
import {setSingIn} from "../../../redux/slices/profileSlice";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const SingInForm = ({setLoginPopupOpen}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{ email: '', password: ''}}
            validate={values => {
                const errors = {};

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
                dispatch(setSingIn(values))
                navigate("/Profile/PersonalData")
                setLoginPopupOpen(false)
            }}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form id="singIn">
                    <div className={style.infoBlock}>
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
                            <button form="singIn" className={style.submitBtn}>continue</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default SingInForm