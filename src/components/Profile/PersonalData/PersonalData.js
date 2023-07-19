import React, {useState} from "react";
import style from "../../Сheckout/CheckoutForm/Form.module.css"
import PersonalDataForm from "./PersonalDataForm";
import {useSelector} from "react-redux";


const PersonalData = () => {
    const [openForm, setOpenForm] = useState(false)
    const profileData = useSelector(state => state.profileReducer.profileData)
    console.log(profileData)

    const content = <div className={style.infoBlock}>
            <div className={style.contactLabel}>
                <h3 className={style.title}>name</h3>
                <div className={style.inputEl}>{profileData.name}</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>surname</h3>
                <div className={style.inputEl}>{profileData.surname}</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>phone</h3>
                <div className={style.inputEl}>{profileData.phone}</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>email</h3>
                <div className={style.inputEl}>{profileData.email}</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>REGION/COUNTRY/STATE</h3>
                <div className={style.inputEl}>{profileData.country}</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>STREET, HOUSE, APARTMENT</h3>
                <div className={style.inputEl}>{profileData.address}</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>POSTCODE</h3>
                <div className={style.inputEl}>{profileData.postcode}</div>
            </div>
            <div className={style.submitBlock}>
                <button onClick={() => setOpenForm(true)} className={style.submitBtn}>Change</button>
            </div>

        </div>


    return <div className={style.personalDataForm}>
        <h1 className={style.header}>personal data</h1>
        {!openForm && content}
        {openForm && <PersonalDataForm setOpenForm={setOpenForm}/>}
    </div>
}

export default PersonalData




