import React from "react";
import style from './Selection.module.css'
import item from  '../../assecs/images/itom1.jpg'

const Selection = () => {
    return <div className={style.selection}>
        <div className={style.sidebar}>
            <div className={style.sidebarPrice}>
                <h2 className={style.sidebarH2}>Price</h2>
                <div className={style.priceInner}>
                    <span></span>
                </div>
            </div>
            <div className={style.sidebarSeason}>
                <h2 className={style.sidebarH2}>Season</h2>

            </div>
            <div className={style.sidebarPrice}>
                <h2 className={style.sidebarH2}>Size</h2>

            </div>
        </div>
        <div className={style.content}>
            <h1>hoodies</h1>
            <div className={style.sorting}>
                <span>Sorting:</span>
                <div>Default</div>
            </div>
            <div className={style.selectionItoms}>

                <div className={style.item}>
                    <img className={style.itemImg} src={item} alt="item"/>
                    <div className={style.itemInfo}>
                        <a className={style.itemName}>“SOLO-03” gray biju coat</a>
                        <span className={style.itemPrice}>1 345$</span>
                    </div>
                </div>

                <div className={style.item}>
                    <img className={style.itemImg} src={item} alt="item"/>
                    <div className={style.itemInfo}>
                        <a className={style.itemName}>“SOLO-03” gray biju coat</a>
                        <span className={style.itemPrice}>1 345$</span>
                    </div>
                </div>

                <div className={style.item}>
                    <img className={style.itemImg} src={item} alt="item"/>
                    <div className={style.itemInfo}>
                        <a className={style.itemName}>“SOLO-03” gray biju coat</a>
                        <span className={style.itemPrice}>1 345$</span>
                    </div>
                </div>

                <div className={style.item}>
                    <img className={style.itemImg} src={item} alt="item"/>
                    <div className={style.itemInfo}>
                        <a className={style.itemName}>“SOLO-03” gray biju coat</a>
                        <span className={style.itemPrice}>1 345$</span>
                    </div>
                </div>

                <div className={style.item}>
                    <img className={style.itemImg} src={item} alt="item"/>
                    <div className={style.itemInfo}>
                        <a className={style.itemName}>“SOLO-03” gray biju coat</a>
                        <span className={style.itemPrice}>1 345$</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Selection;