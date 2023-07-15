import React, {useState} from "react";
import style from  "./LoginPopup.module.css"
import SingInForm from "./SingInForm";
import RegisterForm from "./RegisterForm";

const LoginPopup = ({loginPopupOpen, setLoginPopupOpen}) => {
    const [singInOpen, setSingInOpen] = useState(true)

    return <div className={loginPopupOpen ? `${style.overlay} ${style.overlayOpen}` : style.overlay}>
        <button onClick={() => setLoginPopupOpen(false)} className={style.clouse}>+</button>
        <div className={style.popup}>
            {<h1 className={style.popupTitle}>{singInOpen ? "SING IN" : "REGISTER"}</h1>}
            <div className={style.choice}>
                <button onClick={() => setSingInOpen(true)} className={singInOpen ? `${style.active} ${style.choiceBtn}` : style.choiceBtn}>SING IN</button>
                <button onClick={() => setSingInOpen(false)} className={!singInOpen ? `${style.active} ${style.choiceBtn}` : style.choiceBtn}>REGISTER</button>
            </div>
            <div className="loginFormWrapper">
                {singInOpen ? <SingInForm setLoginPopupOpen={setLoginPopupOpen}/> : <RegisterForm setLoginPopupOpen={setLoginPopupOpen}/>}
            </div>
        </div>
    </div>
}
export default LoginPopup