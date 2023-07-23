import React, {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import style from './Header.module.css';
import {useSelector, useDispatch} from "react-redux";
import {setGender} from "../../redux/slices/filterSlice";
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

    useEffect(() =>{
        setBurgerOpen(false)
    }, [categoryId])

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

        <CategoryMenu category={category} gender={gender} url={location.pathname} categoryId={categoryId} setBurgerOpen={setBurgerOpen}/>

        <div className={style.iconContainer}>
            {login ? <button onClick={() => setLoginPopupOpen(true)} className={`${style.iconItem} ${style.profile}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M19.1668 16.2917C19.1668 13.7425 14.0589 12.4584 11.5002 12.4584C8.94141 12.4584 3.8335 13.7425 3.8335 16.2917V19.1667H19.1668V16.2917Z" stroke="black"/>
                        <path d="M14.2107 4.95613C13.4918 4.23724 12.5168 3.83337 11.5002 3.83337C10.4835 3.83337 9.50848 4.23724 8.78959 4.95613C8.0707 5.67502 7.66683 6.65004 7.66683 7.66671C7.66683 8.68337 8.0707 9.65839 8.78959 10.3773C9.50848 11.0962 10.4835 11.5 11.5002 11.5C12.5168 11.5 13.4918 11.0962 14.2107 10.3773C14.9296 9.65839 15.3335 8.68337 15.3335 7.66671C15.3335 6.65004 14.9296 5.67502 14.2107 4.95613Z" stroke="black"/>
                    </svg>
                </button>
                : <NavLink to='/Profile/PersonalData' className={`${style.iconItem} ${style.profile}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M19.1668 16.2917C19.1668 13.7425 14.0589 12.4584 11.5002 12.4584C8.94141 12.4584 3.8335 13.7425 3.8335 16.2917V19.1667H19.1668V16.2917Z" stroke="black"/>
                        <path d="M14.2107 4.95613C13.4918 4.23724 12.5168 3.83337 11.5002 3.83337C10.4835 3.83337 9.50848 4.23724 8.78959 4.95613C8.0707 5.67502 7.66683 6.65004 7.66683 7.66671C7.66683 8.68337 8.0707 9.65839 8.78959 10.3773C9.50848 11.0962 10.4835 11.5 11.5002 11.5C12.5168 11.5 13.4918 11.0962 14.2107 10.3773C14.9296 9.65839 15.3335 8.68337 15.3335 7.66671C15.3335 6.65004 14.9296 5.67502 14.2107 4.95613Z" stroke="black"/>
                    </svg>
                </NavLink>}
            <NavLink to='/Favorites' className={`${style.iconItem} ${style.like}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M11.1634 19.1322L11.5 19.4387L11.8366 19.1322L12.9234 18.1429L12.9241 18.1422L12.9291 18.1377C14.8481 16.3976 16.4813 14.9166 17.6293 13.5121C18.784 12.0994 19.5 10.7031 19.5 9.125C19.5 6.53076 17.4605 4.5 14.875 4.5C13.6088 4.5 12.3932 5.01055 11.5 5.84005C10.6068 5.01055 9.39116 4.5 8.125 4.5C5.53945 4.5 3.5 6.53076 3.5 9.125C3.5 10.7031 4.21602 12.0994 5.37068 13.5121C6.51869 14.9166 8.15193 16.3976 10.0708 18.1376L10.0759 18.1422L10.0766 18.1429L11.1634 19.1322Z" stroke="black"/>
                </svg>
            </NavLink>
            {popupOpen  ? <button onClick={() => setBasketPopupOpen(true)} className={`${style.iconItem} ${style.basket}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M13.4166 4.79167C13.4166 4.28334 13.2146 3.79582 12.8552 3.43638C12.4957 3.07693 12.0082 2.875 11.4999 2.875C10.9916 2.875 10.5041 3.07693 10.1446 3.43638C9.78516 3.79582 9.58323 4.28334 9.58323 4.79167M18.4574 9.292L19.7847 17.917C19.8267 18.19 19.8092 18.4688 19.7334 18.7344C19.6575 19 19.5252 19.246 19.3455 19.4557C19.1657 19.6654 18.9428 19.8338 18.6919 19.9493C18.441 20.0648 18.1682 20.1248 17.892 20.125H5.10781C4.83146 20.125 4.55837 20.0653 4.30726 19.9499C4.05616 19.8345 3.83297 19.6662 3.65301 19.4565C3.47305 19.2467 3.34057 19.0006 3.26466 18.7349C3.18874 18.4691 3.17118 18.1901 3.21319 17.917L4.54048 9.292C4.6101 8.83927 4.83956 8.42645 5.18728 8.1283C5.53501 7.83015 5.97802 7.66638 6.43606 7.66667H16.5637C17.0216 7.66661 17.4644 7.83048 17.8119 8.12861C18.1594 8.42674 18.3878 8.83944 18.4574 9.292Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </button>
                : <NavLink to='/Checkout' className={`${style.iconItem} ${style.basket}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M13.4166 4.79167C13.4166 4.28334 13.2146 3.79582 12.8552 3.43638C12.4957 3.07693 12.0082 2.875 11.4999 2.875C10.9916 2.875 10.5041 3.07693 10.1446 3.43638C9.78516 3.79582 9.58323 4.28334 9.58323 4.79167M18.4574 9.292L19.7847 17.917C19.8267 18.19 19.8092 18.4688 19.7334 18.7344C19.6575 19 19.5252 19.246 19.3455 19.4557C19.1657 19.6654 18.9428 19.8338 18.6919 19.9493C18.441 20.0648 18.1682 20.1248 17.892 20.125H5.10781C4.83146 20.125 4.55837 20.0653 4.30726 19.9499C4.05616 19.8345 3.83297 19.6662 3.65301 19.4565C3.47305 19.2467 3.34057 19.0006 3.26466 18.7349C3.18874 18.4691 3.17118 18.1901 3.21319 17.917L4.54048 9.292C4.6101 8.83927 4.83956 8.42645 5.18728 8.1283C5.53501 7.83015 5.97802 7.66638 6.43606 7.66667H16.5637C17.0216 7.66661 17.4644 7.83048 17.8119 8.12861C18.1594 8.42674 18.3878 8.83944 18.4574 9.292Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </NavLink>}
        </div>
    </header>

    <div className={burgerOpen ? `${style.burgerMenu} ${style.active}` : style.burgerMenu}>
        <div className={style.loginBlock}>
            {login ? <button onClick={() => setLoginPopupOpen(true)} className={`${style.iconItem} ${style.profile}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M19.1668 16.2917C19.1668 13.7425 14.0589 12.4584 11.5002 12.4584C8.94141 12.4584 3.8335 13.7425 3.8335 16.2917V19.1667H19.1668V16.2917Z" stroke="black"/>
                        <path d="M14.2107 4.95613C13.4918 4.23724 12.5168 3.83337 11.5002 3.83337C10.4835 3.83337 9.50848 4.23724 8.78959 4.95613C8.0707 5.67502 7.66683 6.65004 7.66683 7.66671C7.66683 8.68337 8.0707 9.65839 8.78959 10.3773C9.50848 11.0962 10.4835 11.5 11.5002 11.5C12.5168 11.5 13.4918 11.0962 14.2107 10.3773C14.9296 9.65839 15.3335 8.68337 15.3335 7.66671C15.3335 6.65004 14.9296 5.67502 14.2107 4.95613Z" stroke="black"/>
                    </svg>
                </button>
                : <NavLink to='/Profile/PersonalData' className={`${style.iconItem} ${style.profile}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M19.1668 16.2917C19.1668 13.7425 14.0589 12.4584 11.5002 12.4584C8.94141 12.4584 3.8335 13.7425 3.8335 16.2917V19.1667H19.1668V16.2917Z" stroke="black"/>
                        <path d="M14.2107 4.95613C13.4918 4.23724 12.5168 3.83337 11.5002 3.83337C10.4835 3.83337 9.50848 4.23724 8.78959 4.95613C8.0707 5.67502 7.66683 6.65004 7.66683 7.66671C7.66683 8.68337 8.0707 9.65839 8.78959 10.3773C9.50848 11.0962 10.4835 11.5 11.5002 11.5C12.5168 11.5 13.4918 11.0962 14.2107 10.3773C14.9296 9.65839 15.3335 8.68337 15.3335 7.66671C15.3335 6.65004 14.9296 5.67502 14.2107 4.95613Z" stroke="black"/>
                    </svg>
                </NavLink>}
                <div className={style.login}>Login</div>
        </div>
        <CategoryMenu category={category} gender={gender} url={location.pathname} categoryId={categoryId}/>
        <SocialLink/>
    </div>
</>
}

export default Header