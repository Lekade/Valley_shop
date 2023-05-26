import React from "react";
import style from "./CardItem.module.css";
import Skeleton from "../Selection/Skeleton";

const CardItem = ({items, basketItem, favorites, isLoading, addBasketItem,  clickToFavorites, setBasketItem}) => {

    let btnBuyOff = (id) => {
        return basketItem.some( i => i.id === id)
    }
    let btnFavoriteАdded = (id) => {
        return favorites.some( i => i.id === id)
    }

    let slectionItem = items.map(item => <div className={style.selectionItem} key={item.id}>
            <div className={style.imgBlock}>
                <img className={style.itemImg} src={item.imageUrl} alt="IMG"/>
                <button className={ btnFavoriteАdded(item.id) ? `${style.btnFavoriteAdded} ${style.btnFavorite}` : style.btnFavorite} onClick={() => {clickToFavorites({item})}} >
                    <svg className={style.likeImg} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6634 19.7197L11 20.0262L11.3366 19.7197L12.7859 18.4004C12.7859 18.4004 12.7859 18.4003 12.786 18.4003C15.3511 16.0743 17.5208 14.1067 19.0434 12.2439C20.5715 10.3744 21.5 8.54938 21.5 6.5C21.5 3.13326 18.8555 0.5 15.5 0.5C13.8012 0.5 12.1705 1.20826 11 2.35013C9.82946 1.20826 8.19877 0.5 6.5 0.5C3.14445 0.5 0.5 3.13326 0.5 6.5C0.5 8.54938 1.42852 10.3744 2.95662 12.2439C4.4792 14.1067 6.6489 16.0743 9.21402 18.4003C9.21406 18.4003 9.21409 18.4004 9.21413 18.4004L10.6634 19.7197Z" stroke="white"/>
                    </svg>
                </button>
            </div>
            <div className={style.infoBlock}>
                <div className={style.itemInfo}>
                    <a className={style.itemName}>{item.title}</a>
                    <span className={style.itemPrice}>{item.price}$</span>
                </div>
                <button className={ btnBuyOff(item.id) ? `${style.btnBuy} ${style.btnBuyOff}` : style.btnBuy } onClick={() => {addBasketItem({item})}}>Buy</button>
            </div>
        </div>
    )

    return (
        <>
            {isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>) : slectionItem}
        </>
    )
}
export default CardItem