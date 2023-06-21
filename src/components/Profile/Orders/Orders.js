import React from "react";
import style from "./Orders.module.css"

const Orders = () => {
    return <div className={style.orders}>
        <div className={style.order}>
            <img className={style.itemImage} src="" alt=""/>
            <div className={style.info}>
                <div className={style.title}>warm hoodie “audere”</div>
                <div className={style.date}>12.01.2023</div>
                <div className={style.infoInner}>
                    <div className={style.point}>
                        <span className={style.pointName}>Size:</span><div className={style.pointContent}>XL</div>
                    </div>
                    <div className={style.point}>
                        <span className={style.pointName}>Name:</span><div className={style.pointContent}>joe</div>
                    </div>
                    <div className={style.point}>
                        <span className={style.pointName}>Email:</span><div className={style.pointContent}>valleybuy@gmail.com</div>
                    </div>
                    <div className={style.point}>
                        <span className={style.pointName}>Quantity:</span><div className={style.pointContent}>1</div>
                    </div>
                    <div className={style.point}>
                        <span className={style.pointName}>Surname::</span><div className={style.pointContent}>metch</div>
                    </div>
                    <div className={style.point}>
                        <span className={style.pointName}>Region/country/state:</span><div className={style.pointContent}>Ukraine/Kyiv</div>
                    </div>
                    <div className={style.point}>
                        <span className={style.pointName}>Price:</span><div className={style.pointContent}>$ 140</div>
                    </div>
                    <div className={style.point}>
                        <span className={style.pointName}>Phone:</span><div className={style.pointContent}>+38 099 222 44 55</div>
                    </div>
                    <div className={style.point}>
                        <span className={style.pointName}>Street/house/apartment:</span><div className={style.pointContent}>Meenske avenue 92</div>
                    </div>
                </div>

                <div className={style.rating}>
                    <div className={style.asterisks}>
                        <svg viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="linear-gradient">
                                <stop offset="0%" stopColor="#e3be60"/>
                                <stop offset="0%" stopColor="#e3be60"/>
                                <stop offset="0%" stopColor="#d9d9d9"/>
                                <stop offset="0%" stopColor="#d9d9d9"/>
                            </linearGradient>
                            <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765
                             30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill="url(#linear-gradient)"/>
                        </svg>
                    </div>
                    <div className={style.ratingNumber}>
                        3.5
                    </div>
                </div>
                <div className={style.mark}>completed</div>
            </div>
        </div>
    </div>
}

export default Orders