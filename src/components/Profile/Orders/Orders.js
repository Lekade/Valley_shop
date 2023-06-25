import React, {useEffect} from "react";
import style from "./Orders.module.css"
import {useSelector, useDispatch} from 'react-redux'
import {fetchOrders} from "../../../redux/slices/ordersSlice";

const Orders = () => {
    const {orders} = useSelector(state => state.ordersReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOrders())
    },[])

    debugger
    const orderItems = orders.map((item, index) => <div className={style.order}>
        <img className={style.itemImage} src={`/${item.imageUrl}`} alt="item"/>
        <div className={style.info}>
            <div className={style.title}>{item.title}</div>
            <div className={style.date}>12.01.2023</div>
            <div className={style.infoInner}>
                <div className={style.point}>
                    <span className={style.pointName}>Size:</span><div className={style.pointContent}>{item.size[0]}</div>
                </div>
                <div className={style.point}>
                    <span className={style.pointName}>Name:</span><div className={style.pointContent}>{item.formData.name}</div>
                </div>
                <div className={style.point}>
                    <span className={style.pointName}>Email:</span><div className={style.pointContent}>{item.formData.email}</div>
                </div>
                <div className={style.point}>
                    <span className={style.pointName}>Quantity:</span><div className={style.pointContent}>{item.quantity}</div>
                </div>
                <div className={style.point}>
                    <span className={style.pointName}>Surname::</span><div className={style.pointContent}>{item.formData.surname}</div>
                </div>
                <div className={style.point}>
                    <span className={style.pointName}>Region/country/state:</span><div className={style.pointContent}>{item.formData.country}</div>
                </div>
                <div className={style.point}>
                    <span className={style.pointName}>Price:</span><div className={style.pointContent}>$ {item.price}</div>
                </div>
                <div className={style.point}>
                    <span className={style.pointName}>Phone:</span><div className={style.pointContent}>{item.formData.phone}</div>
                </div>
                <div className={style.point}>
                    <span className={style.pointName}>Street/house/apartment:</span><div className={style.pointContent}>{item.formData.address}</div>
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
                    {item.rating}
                </div>
            </div>
            <div className={style.mark}>completed</div>
        </div>
    </div>)

    return <div className={style.orders}>
        {orderItems}
    </div>
}

export default Orders