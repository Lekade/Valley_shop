import React, {useState} from "react";
import style from "../../Сheckout/CheckoutForm/Form.module.css"
import PersonalDataForm from "./PersonalDataForm";


const PersonalData = () => {
    const [openForm, setOpenForm] = useState(false)

    const content = <div className={style.infoBlock}>
            <div className={style.contactLabel}>
                <h3 className={style.title}>name</h3>
                <div className={style.inputEl}>Denis</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>surname</h3>
                <div className={style.inputEl}>Kasperovich</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>phone</h3>
                <div className={style.inputEl}>+375256629020</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>email</h3>
                <div className={style.inputEl}>dfsfsdf@mail.ru</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>REGION/COUNTRY/STATE</h3>
                <div className={style.inputEl}>Belarus</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>STREET, HOUSE, APARTMENT</h3>
                <div className={style.inputEl}>sdfsdfsdf</div>
            </div>
            <div className={style.contactLabel}>
                <h3 className={style.title}>POSTCODE</h3>
                <div className={style.inputEl}>654654645</div>
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




