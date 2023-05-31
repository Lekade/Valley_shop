import React from "react";
import {NavLink} from "react-router-dom";
import style from "./StartPage.module.css"
import {setGender} from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from 'react-redux'

const StartPage = () => {
    const dispatch = useDispatch()

    return <NavLink to='/Category' className={style.srartPage}>
        <div onClick={() => dispatch(setGender(1))} className={style.gender}>
            <p className={style.text}>Woman</p>
        </div>
        <div onClick={() => dispatch(setGender(2))} className={style.gender}>
            <p className={style.text}>Men</p>
        </div>
    </NavLink>
}
export default StartPage