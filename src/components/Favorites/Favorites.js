import React from "react";
import style from "./Favorites.module.css"
import CardItem from "../CardItem/CardItem";

const Favorites = ({favorites, basketItem, addBasketItem, clickToFavorites}) => {

    return(
        <div className={style.favorites}>
            <div className={style.favoritesTop}>
                <h1 className={style.favoritesTitle}>favorites</h1>
            </div>
            <div className={style.selectionItems}>
                <CardItem items={favorites} favorites={favorites} clickToFavorites={clickToFavorites} basketItem={basketItem} addBasketItem={addBasketItem}/>
            </div>
        </div>
    )
}

export default Favorites