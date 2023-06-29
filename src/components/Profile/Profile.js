import React from "react";
import style from "./Profile.module.css"
import {Routes, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";

import PersonalData from "./PersonalData/PersonalData";
import Orders from "./Orders/Orders";


const Profile = () => {
    return <div className={style.profile}>
        <div className={style.profileInner}>
            <ul className={style.profileMenu}>
                <li><NavLink to='/Profile/PersonalData'  className={style.link}>Personal data</NavLink></li>
                <li><NavLink to='/Profile/Orders' className={style.link}>My orders</NavLink></li>
                <li><button className={style.link}>Sign out</button></li>
            </ul>
            <div className={style.profileContent}>
                <Routes>
                    <Route path='/PersonalData/*'  element={
                        <PersonalData/> }/>
                    <Route path='/Orders/*'  element={
                        <Orders/> }/>
                </Routes>
            </div>
        </div>
    </div>
}

export default Profile