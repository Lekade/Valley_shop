import React, {useState} from "react";
import style from './Selection.module.css'
import checkImg from '../../assecs/images/check.svg'
import checkboxImg from '../../assecs/images/checkbox.svg'
import SliderRenge from "./sliderRenge/SliderRenge";
import CardItem from "../CardItem/CardItem";


const Selection = ({category, categoryId, items,basketItem, favorites, isLoading, addBasketItem, clickToFavorites}) => {
    const [sortOpen, setSortOpen] = useState(false)
    const [sortPriceOpen, setSortPriceOpen] = useState(true)
    const [sortSeasonOpen, setSortSeasonOpen] = useState(true)
    const [sortSizeOpen, setSortSizeOpen] = useState(true)
    const sortItems = ["default", "popular", "price (low - hight)", "price (hight - low)"]
    const sortSeason = ["spring", "Demi-season", "winter", "summer", "autumn"]
    const sortSize = ["xs", "s", "m", "l", "xl"]
    const [sortNum, setSortNum] = useState(0)
    const [sortSeasonNum, setSortSeasonNum] = useState([])
    const [sortSizeNum, setSortSizeNum] = useState([])
    let sortSelected = sortItems[sortNum]

    const onchangeSort = (sortItems, sortFun, i) => {
        if(sortItems.every(el => el !== i)){
            return sortFun((prev) => [...prev, i])
        }else{
            return sortFun((prev) => prev.filter(item => item !== i))
        }
    }

    console.log(sortSeasonNum)

    return (
        <div className={style.selection}>
            <div className={style.sidebar}>
                <div className={style.sortEl}>
                    <div onClick={() => setSortPriceOpen(!sortPriceOpen)} className={sortPriceOpen ? `${style.sidebarTitle} ${style.sidebarTitleOpen}` :  style.sidebarTitle}>
                        <h2 className={style.sidebarH2}>Price</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>

                    {sortPriceOpen && <div className={style.sortElInner}>
                        <SliderRenge/>
                    </div>}
                </div>

                <div className={style.sortEl}>
                    <div onClick={() => setSortSeasonOpen(!sortSeasonOpen)}  className={sortSeasonOpen ? `${style.sidebarTitle} ${style.sidebarTitleOpen}` :  style.sidebarTitle}>
                        <h2 className={style.sidebarH2}>Season</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>

                    {sortSeasonOpen && <div className={style.sortElInner}>
                        {sortSeason.map((el, index) =>
                            <div key={index} className={style.checkboxItem} onClick={ () => onchangeSort(sortSeasonNum, setSortSeasonNum, index)}>
                                <div className={style.checkbox}>
                                    {sortSeasonNum.some(num => num === index) && <img src={checkboxImg} alt="check"/>}
                                </div>
                                <p className={style.checkboxText}>{el}</p>
                            </div>
                        )}
                    </div>}
                </div>
                <div className={style.sortEl}>
                    <div onClick={() => setSortSizeOpen(!sortSizeOpen)}  className={sortSizeOpen ? `${style.sidebarTitle} ${style.sidebarTitleOpen}` :  style.sidebarTitle}>
                        <h2 className={style.sidebarH2}>Size</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>
                    {sortSizeOpen && <div className={style.sortElInner}>
                        {sortSize.map((el, index)=>
                            <div key={index} className={style.checkboxItem} onClick={ () => onchangeSort(sortSizeNum, setSortSizeNum, index)} >
                                <div className={style.checkbox}>
                                    {sortSizeNum.some(num => num === index) && <img src={checkboxImg} alt="check"/>}
                                </div>
                                <p className={style.checkboxText}>{el}</p>
                            </div>
                        )}
                    </div>}
                </div>
            </div>

            <div className={style.content}>
                <h1>{category[categoryId]}</h1>
                <div className={style.sortingBlock}>
                    <span className={style.soringLable}>Sorting:</span>
                    <div  className={sortOpen ? `${style.sortingBody} ${style.activ}` : style.sortingBody}>
                        <div onClick={() => setSortOpen(!sortOpen)} className={style.sortingHeader}>
                            <span className={style.sortingCurrent}>{sortSelected}</span>
                            <img className={style.checkImg} src={checkImg} alt="check"/>
                        </div>
                        <div className={style.sortingItems}>
                            {sortItems.map((el, index ) =>
                                <div onClick={ () => (setSortNum(index), setSortOpen(false))} key={index}
                                     className={index === sortNum ? `${style.soringActiv} ${style.sortingItem}` : style.sortingItem}>{el}</div>)}
                        </div>
                    </div>
                </div>
                <div className={style.selectionItems}>
                    <CardItem items={items} basketItem={basketItem} favorites={favorites} isLoading={isLoading} addBasketItem={addBasketItem} clickToFavorites={clickToFavorites}/>
                </div>
            </div>
        </div>
    )}

export default Selection