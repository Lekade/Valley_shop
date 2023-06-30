import React from "react";
import style from "../../Сheckout/CheckoutForm/Form.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {fetchAddOrders} from "../../../redux/slices/ordersSlice";
import {useDispatch} from "react-redux";

const ChangePassword = () => {
    const dispatch = useDispatch()
    return <div className={style.personalDataForm}>
        <h1 className={style.header}>change password</h1>
        <Formik
            initialValues={{  currentPassword: '', newPassword: '', repeatNewPassword: ''}}
            validate={values => {
                const errors = {};
                errors.currentPassword = !values.currentPassword && 'Required';
                errors.newPassword = !values.newPassword && 'Required';
                if(!values.repeatNewPassword){
                    errors.repeatNewPassword = 'Required';
                }else{
                    errors.repeatNewPassword = (values.repeatNewPassword !== values.newPassword) && 'The password doesn\'t match';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(fetchAddOrders(values))
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form id="changePassword">
                    <div className={style.infoBlock}>
                        <label className={`${style.contactLabel} ${style.fullRow}`}>
                            <h3 className={style.title}>Current Password</h3>
                            <Field name="currentPassword" className={(errors.currentPassword && touched.currentPassword) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='Current Password'/>
                            <div className={style.errorBlock}>
                                <ErrorMessage className={style.errorMessage} name="currentPassword" component="div" />
                            </div>
                        </label>
                        <label className={style.contactLabel}>
                            <h3 className={style.title}>new password</h3>
                            <Field name="newPassword" className={(errors.newPassword && touched.newPassword) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='new password'/>
                            <div className={style.errorBlock}>
                                <ErrorMessage className={style.errorMessage} name="newPassword" component="div" />
                            </div>
                        </label>
                        <label className={style.contactLabel}>
                            <h3 className={style.title}>Repeat password</h3>
                            <Field name="repeatNewPassword" className={(errors.repeatNewPassword && touched.repeatNewPassword) ? `${style.error} ${style.inputEl}` : style.inputEl} type="text" placeholder='repeat password'/>
                            <div className={style.errorBlock}>
                                <ErrorMessage className={style.errorMessage} name="repeatNewPassword" component="div" />
                            </div>
                        </label>
                        <div className={style.submitBlock}>
                            <button className={style.submitBtn}>save</button>
                            <button type='reset' className={style.cancelBtn} >cancel</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}

export default ChangePassword