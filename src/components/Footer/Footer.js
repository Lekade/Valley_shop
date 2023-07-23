import React from "react";
import style from './Footer.module.css';
import visaImg from '../../assecs/images/visa.svg'
import masterCardImg from '../../assecs/images/masterCard.svg'
import GPayImg from '../../assecs/images/GPay.svg'
import APayImg from '../../assecs/images/APay.svg'
import SocialLink from "./SocialLink/SocialLink";

const Footer = () => {
    return <footer className={style.footer}>
        <div className={style.footerContainer}>
            <div>
                <h3 className={style.footerH3}>Contact</h3>
                <a href="tel:+380995554444">+38 099 555 4444</a>
                <a href="tel:+380995554444">+38 099 555 4444</a>
                <a href="mailto:valleycontact@gmail.com">valleycontact@gmail.com</a>
            </div>
            <div>
                <h3 className={style.footerH3}>about us</h3>
                <a href="#">About the brand</a>
                <a href="#">Write to us</a>
                <a href="#">Blog</a>
            </div>
            <div className={style.footerBottom}>
                <h3 className={`${style.footerH3} ${style.footerH3Social}`}>subscribe</h3>
                <SocialLink/>
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