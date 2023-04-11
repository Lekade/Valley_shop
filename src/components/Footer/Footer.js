import React from "react";
import style from './Footer.module.css';

import facebookImg from '../../assecs/images/facebook.svg'
import instaImg from '../../assecs/images/insta.svg'
import tiktokImg from '../../assecs/images/tiktok.svg'
import visaImg from '../../assecs/images/visa.svg'
import masterCardImg from '../../assecs/images/masterCard.svg'
import GPayImg from '../../assecs/images/GPay.svg'
import APayImg from '../../assecs/images/APay.svg'

const Footer = () => {
    return <footer className={style.footer}>
        <div className={style.footerContainer}>
            <div className={style.footerContent}>
                <h3 className={style.footerH3}>Contact</h3>
                <a href="tel:+380995554444">+38 099 555 4444</a>
                <a href="tel:+380995554444">+38 099 555 4444</a>
                <a href="mailto:valleycontact@gmail.com">valleycontact@gmail.com</a>
            </div>
            <div className={style.footerContent}>
                <h3 className={style.footerH3}>about us</h3>
                <a href="#">About the brand</a>
                <a href="#">Write to us</a>
                <a href="#">Blog</a>
            </div>
            <div className={style.footerContent}>
                <h3 className={style.footerH3}>subscribe</h3>
                <div className={style.social}>
                    <a className={style.socialItem} href="#"><img src={facebookImg} alt="facebook"/></a>
                    <a className={style.socialItem} href="#"><img src={instaImg} alt="insta"/></a>
                    <a className={style.socialItem} href="#"><img src={tiktokImg} alt="tiktok"/></a>
                </div>
                <h3 className={style.footerH3}>payment methods</h3>
                <div className={style.payment}>
                    <img className={style.paymentItem} src={visaImg} alt="visa"/>
                    <img className={style.paymentItem} src={masterCardImg} alt="masterCard"/>
                    <img className={style.paymentItem} src={GPayImg} alt="GPay"/>
                    <img className={style.paymentItem} src={APayImg} alt="APay"/>
                </div>
            </div>
        </div>
        <div className={style.footerCopyrite}>© 2023  Valley. All rights reserved</div>
    </footer>
}

export default Footer;