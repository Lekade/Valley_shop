import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import style from './Header.module.css';
import profileImg from '../../assecs/images/user.svg'
import likedImg from '../../assecs/images/like.svg'
import basketImg from '../../assecs/images/basket.svg'
import {useSelector, useDispatch} from "react-redux";
import {setGender, setCategoryId} from "../../redux/slices/filterSlice";

const Header = ({setBasketPopupOpen, setLoginPopupOpen}) => {
    const [gender, category, categoryId] = useSelector(state => [state.filterReducer.gender, state.filterReducer.category, state.filterReducer.categoryId])
    const [singIn, register] = useSelector(state => [state.profileReducer.singIn, state.profileReducer.register])
    const dispatch = useDispatch()
    const location = useLocation()
    const popupOpen = location.pathname === '/Category' || location.pathname.includes('/Product/')  || location.pathname === '/Favorites' && true
    const login = Object.entries(singIn).length === 0 ?  Object.entries(register).length === 0 : false;

    return <>
    <header className={style.header}>
        <NavLink onClick={() => dispatch(setGender(0))} to='/' className={gender > 0 ? style.logo : `${style.logo} ${style.logoCenter}`}>VALLEY</NavLink>
        {gender > 0 && <NavLink to='/Category' className={(location.pathname !== '/Category') ? `${style.category} ${style.removeActive}` : style.category} href="#">
            {category.map((name, i) =>
                <div key={i} onClick={() => dispatch(setCategoryId(i))} className={categoryId === i ? `${style.item} ${style.active}` : style.item}>{name}</div>
            )}
        </NavLink>}
        <div className={style.iconContainer}>
            {login ? <button onClick={() => setLoginPopupOpen(true)} className={`${style.iconItom} ${style.basket}`}><img src={profileImg} alt="profile"/></button>
                : <NavLink to='/Profile/PersonalData' className={`${style.iconItom} ${style.profile}`}><img src={profileImg} alt="profile"/></NavLink>}
            <NavLink to='/Favorites' className={`${style.iconItom} ${style.like}`}><img src={likedImg} alt="basket"/></NavLink>
            {popupOpen  ? <button onClick={() => setBasketPopupOpen(true)} className={`${style.iconItom} ${style.basket}`}><img src={basketImg} alt="basket"/></button>
                : <NavLink to='/Checkout' className={`${style.iconItom} ${style.basket}`}><img src={basketImg} alt="basket"/></NavLink>}
        </div>
    </header>
</>
}

export default Header