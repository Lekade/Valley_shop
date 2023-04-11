import React from "react";
import style from './Header.module.css'
import profileImg from '../../assecs/images/user.svg'
import likedImg from '../../assecs/images/like.svg'
import basketImg from '../../assecs/images/basket.svg'

const Header = () => {
    return <header className={style.header}>
        <a className={style.logo} href="#">VALLEY</a>
        <nav className={style.nav}>
            <a href="#">t-shirts</a>
            <a href="#">sweaters</a>
            <a href="#">HOODIES</a>
            <a href="#">SHIRTS</a>
            <a href="#">PANTS/SHORTS</a>
            <a href="#">POLO</a>
            <a href="#">popular</a>
        </nav>
        <a href="#" className={`${style.iconItom} ${style.profile}`}><img src={profileImg} alt="profile"/></a>
        <a href="#" className={`${style.iconItom} ${style.like}`}><img src={likedImg} alt="like"/></a>
        <a href="#" className={`${style.iconItom} ${style.basket}`}><img src={basketImg} alt="basket"/></a>

    </header>

}

export default Header