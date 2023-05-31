import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css';
import profileImg from '../../assecs/images/user.svg'
import likedImg from '../../assecs/images/like.svg'
import basketImg from '../../assecs/images/basket.svg'
import {useSelector, useDispatch} from "react-redux";
import {setGender, setCategoryId} from "../../redux/slices/filterSlice";

const Header = () => {
    const [gender, category, categoryId] = useSelector(state => [state.filterReducer.gender, state.filterReducer.category, state.filterReducer.categoryId])
    const dispatch = useDispatch()

    return <header className={style.header}>
        <NavLink onClick={() => dispatch(setGender(0))} to='/' className={gender > 0 ? style.logo : `${style.logo} ${style.logoCenter}`} href="#">VALLEY</NavLink>
        {gender > 0 && <NavLink to='/Category' className={style.category} href="#">
            {category.map((name, i) =>
                <div key={i} onClick={() => dispatch(setCategoryId(i))} className={categoryId === i ? `${style.item} ${style.active}` : style.item}>{name}</div>
            )}

        </NavLink>}
        <div className={style.iconContainer}>
            <a href="#" className={`${style.iconItom} ${style.profile}`}><img src={profileImg} alt="profile"/></a>
            <NavLink to='/Favorites' className={`${style.iconItom} ${style.like}`}><img src={likedImg} alt="basket"/></NavLink>
            <NavLink to='/Checkout' className={`${style.iconItom} ${style.basket}`}><img src={basketImg} alt="basket"/></NavLink>
        </div>
    </header>

}

export default Header