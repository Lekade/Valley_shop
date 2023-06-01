import React, {useEffect} from "react";
import style from "./Favorites.module.css"
import CardItem from "../CardItem/CardItem";
import {useSelector} from "react-redux";

const Favorites = ({addBasketItem}) => {
    const {favorites} = useSelector(state => state.favoritesReducer)

    const errorBlock = () => {
        return <div className={style.errorBlock}>
            <p className={style.errorTitle}>Nothing was found for your query</p>
            <p className={style.errorSubtitle}>try again</p>
        </div>
    }

    return(
        <div className={style.favorites}>
            <div className={style.favoritesTop}>
                <h1 className={style.favoritesTitle}>favorites</h1>
            </div>
            <div className={style.selectionItems}>
                <CardItem items={favorites} addBasketItem={addBasketItem}  errorBlock={errorBlock}/>
            </div>
        </div>
    )
}

export default Favorites