import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css';
import profileImg from '../../assecs/images/user.svg'
import likedImg from '../../assecs/images/like.svg'
import basketImg from '../../assecs/images/basket.svg'

const Header = ({category, categoryId, changeCategory}) => {

    return <header className={style.header}>
        <NavLink to='/' className={style.logo} href="#">VALLEY</NavLink>
        <NavLink to='/' className={style.category} href="#">

            {category.map((name, i) =>
                <div key={i} onClick={() => changeCategory(i)} className={categoryId === i ? `${style.item} ${style.active}` : style.item}>{name}</div>
            )}

        </NavLink>

        <a href="#" className={`${style.iconItom} ${style.profile}`}><img src={profileImg} alt="profile"/></a>
        <NavLink to='/Favorites' className={`${style.iconItom} ${style.like}`}><img src={likedImg} alt="basket"/></NavLink>
        <NavLink to='/Checkout' className={`${style.iconItom} ${style.basket}`}><img src={basketImg} alt="basket"/></NavLink>

    </header>

}

export default Header