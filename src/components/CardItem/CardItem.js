import React, {useEffect} from "react";
import style from "./CardItem.module.css";
import Skeleton from "../Selection/Skeleton";
import {useDispatch, useSelector} from 'react-redux'
import {fetchClickToFavorite, fetchFavorites} from "../../redux/slices/favoriteSlice";
import {Link, useLocation} from "react-router-dom";

const CardItem = ({items = [],  status, errorBlock}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(state => state.favoritesReducer)
    const location = useLocation()

    useEffect(() => {
        dispatch(fetchFavorites())
    }, [])

    let btnFavoriteАdded = (id) => {
        return favorites.some( i => i.id === id)
    }

    let slectionItem = items.map(item => <div className={location.pathname === '/Favorites' ? `${style.favoriteItem} ${style.selectionItem}` : style.selectionItem} key={item.id}>
            <div className={style.imgBlock}>
                <Link to={`/Product/${item.id}`}>
                    <img className={style.itemImg} src={item.imageUrl} alt="IMG"/>
                </Link>
                <button className={btnFavoriteАdded(item.id) ? `${style.btnFavoriteAdded} ${style.btnFavorite}` : style.btnFavorite} onClick={() => dispatch(fetchClickToFavorite(item))} >
                    <svg className={style.likeImg} viewBox="0 0 24 23" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.67427C10.7746 1.63248 9.17033 1 7.5 1C3.86891 1 1 3.85652 1 7.5C1 9.71376 2.00704 11.6488 3.56949 13.5604C5.11594 15.4523 7.30874 17.4408 9.85357 19.7484L9.87682 19.7695L9.87826 19.7708L11.3268 21.0895L12 21.7023L12.6732 21.0895L14.1217 19.7708L14.1232 19.7695L14.1464 19.7484C16.6913 17.4408 18.8841 15.4523 20.4305 13.5604C21.993 11.6488 23 9.71376 23 7.5C23 3.85652 20.1311 1 16.5 1C14.8297 1 13.2254 1.63248 12 2.67427Z" stroke="#3C3C3C" stroke-width="2"/>
                    </svg>
                </button>
            </div>
            <div className={style.infoBlock}>
                <Link to={`/Product/${item.id}`} className={style.itemName}>{item.title}</Link>
                <span className={style.itemPrice}>{item.price}$</span>
                <div className={style.ratingBlock}>
                    <div className={style.asterisk}>
                        <svg viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id={'linear-gradient' + item.rating}>
                                <stop offset="0%" stopColor="#e3be60"/>
                                <stop offset={((item.rating * 100)/ 5) + '%'} stopColor="#e3be60"/>
                                <stop offset={((item.rating * 100)/ 5) + '%'} stopColor="#d9d9d9"/>
                                <stop offset="100%" stopColor="#d9d9d9"/>
                            </linearGradient>
                            <path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765 30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill={`url(#linear-gradient${item.rating})`} />
                        </svg>
                    </div>
                    <div className={style.ratingNumber}>
                        {item.rating}
                    </div>
                </div>
            </div>

        </div>
    )

    return (
        <>
            {status === 'loading' ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>) : (items.length === 0 ? errorBlock() : slectionItem)}
        </>
    )
}
export default CardItem