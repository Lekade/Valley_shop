import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import style from './Header.module.css';
import profileImg from '../../assecs/images/user.svg'
import likedImg from '../../assecs/images/like.svg'
import basketImg from '../../assecs/images/basket.svg'
import {useSelector, useDispatch} from "react-redux";
import {setGender, setCategoryId} from "../../redux/slices/filterSlice";
import CategoryMenu from "./CategoryMenu";
import SocialLink from "../Footer/SocialLink/SocialLink";

const Header = ({setBasketPopupOpen, setLoginPopupOpen}) => {
    const [gender, category, categoryId] = useSelector(state => [state.filterReducer.gender, state.filterReducer.category, state.filterReducer.categoryId])
    const [singIn, register] = useSelector(state => [state.profileReducer.singIn, state.profileReducer.register])
    const dispatch = useDispatch()
    const location = useLocation()
    const popupOpen = location.pathname === '/Category' || location.pathname.includes('/Product/')  || location.pathname === '/Favorites' && true
    const login = Object.entries(singIn).length === 0 ?  Object.entries(register).length === 0 : false;
    const [burgerOpen, setBurgerOpen] = useState(false)

    return <>
    <header className={style.header}>
        <button className={style.burger} onClick={() => setBurgerOpen(!burgerOpen)}>
            <svg className={style.burgerImg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" fill="none">
                <line x1="14" y1="16" x2="37" y2="16" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="24" x2="37" y2="24" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="32" x2="37" y2="32" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </button>

        <NavLink onClick={() => dispatch(setGender(0))} to='/' className={gender > 0 ? style.logo : `${style.logo} ${style.logoCenter}`}>VALLEY</NavLink>

        <CategoryMenu category={category} gender={gender} url={location.pathname} categoryId={categoryId}/>

        <div className={style.iconContainer}>
            {login ? <button onClick={() => setLoginPopupOpen(true)} className={`${style.iconItom} ${style.profile}`}>
                    <img src={profileImg} alt="profile"/>
            </button>
                : <NavLink to='/Profile/PersonalData' className={`${style.iconItom} ${style.profile}`}>
                    <img src={profileImg} alt="profile"/>
                </NavLink>}
            <NavLink to='/Favorites' className={`${style.iconItom} ${style.like}`}>
                <img src={likedImg} alt="basket"/>
            </NavLink>
            {popupOpen  ? <button onClick={() => setBasketPopupOpen(true)} className={`${style.iconItom} ${style.basket}`}>
                    <img src={basketImg} alt="basket"/>
            </button>
                : <NavLink to='/Checkout' className={`${style.iconItom} ${style.basket}`}>
                    <img src={basketImg} alt="basket"/>
                </NavLink>}
        </div>
    </header>
    <div className={burgerOpen ? `${style.burgerMenu} ${style.active}` : style.burgerMenu}>
        <div className={style.loginBlock}>
            {login ? <button onClick={() => setLoginPopupOpen(true)} className={`${style.iconItom} ${style.profile}`}>
                    <img src={profileImg} alt="profile"/>
                </button>
                : <NavLink to='/Profile/PersonalData' className={`${style.iconItom} ${style.profile}`}>
                    <img src={profileImg} alt="profile"/>
                </NavLink>}
                <div className={style.login}>Login</div>
        </div>
        <CategoryMenu category={category} gender={gender} url={location.pathname} categoryId={categoryId}/>
        <SocialLink/>
    </div>
</>
}

export default Header