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

    const orderItems = orders.map((item, index) => {
        let num =  item.rating.split('.')
        let asteriskQuantity = 5
        let asterisk = []
        for(let i = 0; i < num[0]; i++){
            asterisk.push(100)
        }
        for(let q = 0; q < (asteriskQuantity - num[0]); q++){
            if(q === 0 && num[1]){
                asterisk.push(num[1] * 10)
            }else{
                asterisk.push(0)
            }
        }

        return <div className={style.order}>
        <img className={style.itemImage} src={`/${item.imageUrl}`} alt="item"/>
        <div className={style.info}>
            <div className={style.title}>{item.title}</div>
            <div className={style.date}>{item.orderDate}</div>
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
                        <linearGradient id={'linear-gradient1' + item.rating}>
                            <stop offset="0%" stopColor="#e3be60"/>
                            <stop offset={`${asterisk[0]}%`} stopColor="#e3be60"/>
                            <stop offset="0%" stopColor="#d9d9d9"/>
                            <stop offset="100%" stopColor="#d9d9d9"/>
                        </linearGradient>
                        <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765
                             30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill={`url(#linear-gradient1${item.rating})`}/>
                    </svg>
                    <svg viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <linearGradient id={'linear-gradient2' + item.rating}>
                            <stop offset="0%" stopColor="#e3be60"/>
                            <stop offset={`${asterisk[1]}%`} stopColor="#e3be60"/>
                            <stop offset="0%" stopColor="#d9d9d9"/>
                            <stop offset="100%" stopColor="#d9d9d9"/>
                        </linearGradient>
                        <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765
                             30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill={`url(#linear-gradient2${item.rating})`}/>
                    </svg>
                    <svg viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <linearGradient id={'linear-gradient3' + item.rating}>
                            <stop offset="0%" stopColor="#e3be60"/>
                            <stop offset={`${asterisk[2]}%`} stopColor="#e3be60"/>
                            <stop offset="0%" stopColor="#d9d9d9"/>
                            <stop offset="100%" stopColor="#d9d9d9"/>
                        </linearGradient>
                        <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765
                             30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill={`url(#linear-gradient3${item.rating})`}/>
                    </svg>
                    <svg viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <linearGradient id={'linear-gradient4' + item.rating}>
                            <stop offset="0%" stopColor="#e3be60"/>
                            <stop offset={`${asterisk[3]}%`} stopColor="#e3be60"/>
                            <stop offset="0%" stopColor="#d9d9d9"/>
                            <stop offset="100%" stopColor="#d9d9d9"/>
                        </linearGradient>
                        <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765
                             30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill={`url(#linear-gradient4${item.rating})`}/>
                    </svg>
                    <svg viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <linearGradient id={'linear-gradient5' + item.rating}>
                            <stop offset="0%" stopColor="#e3be60"/>
                            <stop offset={`${asterisk[4]}%`} stopColor="#e3be60"/>
                            <stop offset="0%" stopColor="#d9d9d9"/>
                            <stop offset="100%" stopColor="#d9d9d9"/>
                        </linearGradient>
                        <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765
                             30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill={`url(#linear-gradient5${item.rating})`}/>
                    </svg>
                </div>
                <div className={style.ratingNumber}>
                    {item.rating}
                </div>
            </div>
            <div className={style.mark}>completed</div>
        </div>
    </div>})

    return <div className={style.orders}>
        {orderItems}
    </div>
}

export default Orders