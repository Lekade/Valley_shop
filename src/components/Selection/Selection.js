import React from "react";
import style from './Selection.module.css'
import checkImg from '../../assecs/images/check.svg'
import checkboxImg from '../../assecs/images/checkbox.svg'
import CardItem from "../CardItem/CardItem";


const Selection = ({items,basketItem,  favorites, addBasketItem, clickToFavorites}) => {
    const [sortingItems, setSortingItems] = React.useState(false)

    const onClickSorting  = () => {
        if(!sortingItems){
            setSortingItems(true)
        }else{
            setSortingItems(false)
        }
    }


    let sliderOne = React.useRef(30);
    let sliderTwo = React.useRef(70);
    let displayValOne = React.useRef(sliderOne);
    let displayValTwo = React.useRef(sliderTwo);
    let minGap = 0;
    let sliderTrack = React.useRef(null);
    let sliderMaxValue = sliderOne.max;

    function slideOne(){
        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.textContent = sliderOne.value;
        fillColor();
    }
    function slideTwo(){
        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.textContent = sliderTwo.value;
        fillColor();
    }
    function fillColor(){
        let percent1 = (sliderOne.value / sliderMaxValue) * 100;
        let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }




    return (
        <div className={style.selection}>
            <div className={style.sidebar}>
                <div className={style.sidebarPrice}>
                    <div className={style.sidebarHeader}>
                        <h2 className={style.sidebarH2}>Price</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>

                    <div className={style.priceInner}>
                        <div className={style.priceLabel}>
                            <div className={style.priceStart}><span className={style.priceStartValue} ref={displayValOne}>175</span> USD.</div>
                            <span className={style.priceDecoration}></span>
                            <div className={style.priceEnd}><span className={style.priceEndValue} ref={displayValTwo}>1070</span> USD.</div>
                        </div>
                        <div className={style.range}>
                            <div className={style.sliderTrack} ></div>
                            <input className={style.sliderOne} ref={sliderOne} type="range" min="0" max="100" value='30' />
                            <input className={style.sliderTwo} ref={sliderTwo} type="range" min="0" max="100" value='70' />
                        </div>
                    </div>
                </div>
                <div className={style.sidebarSeason}>
                    <div className={style.sidebarHeader}>
                        <h2 className={style.sidebarH2}>Season</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>

                    <div className={style.checboxBody}>
                        <label  className={style.labelCheckbox}>
                            <input className={style.checkboxhidden} type="checkbox" value='spring'/>
                            <div className={style.checkboxDecoration}>
                                <img src={checkboxImg} alt="check"/>
                            </div>
                            <p className={style.checkboxText}>spring</p>
                        </label>

                        <label  className={style.labelCheckbox}>
                            <input className={style.checkboxhidden} type="checkbox" value='Demi-season'/>
                            <div className={style.checkboxDecoration}>
                                <img src={checkboxImg} alt="check"/>
                            </div>
                            <p className={style.checkboxText}>Demi-season</p>
                        </label>
                    </div>
                </div>
                <div className={style.sidebarSize}>
                    <div className={style.sidebarHeader}>
                        <h2 className={style.sidebarH2}>Size</h2>
                        <img className={style.checkImg} src={checkImg} alt="check"/>
                    </div>
                    <div className={style.checboxBody}>
                        <label  className={style.labelCheckbox}>
                            <input className={style.checkboxhidden} type="checkbox" value='spring'/>
                            <div className={style.checkboxDecoration}>
                                <img src={checkboxImg} alt="check"/>
                            </div>
                            <p className={style.checkboxText}>spring</p>
                        </label>

                        <label  className={style.labelCheckbox}>
                            <input className={style.checkboxhidden} type="checkbox" value='Demi-season'/>
                            <div className={style.checkboxDecoration}>
                                <img src={checkboxImg} alt="check"/>
                            </div>
                            <p className={style.checkboxText}>Demi-season</p>
                        </label>
                    </div>
                </div>
            </div>

            <div className={style.content}>
                <h1>hoodies</h1>
                <div className={style.sortingBlock}>
                    <span className={style.soringLable}>Sorting:</span>
                    <div className={sortingItems ? `${style.sortingBody} ${style.activ}` : style.sortingBody}>
                        <div className={style.sortingHeader} onClick={onClickSorting}>
                            <span className={style.sortingCurrent}>Default</span>
                            <img className={style.checkImg} src={checkImg} alt="check"/>
                        </div>
                        <div className={style.sortingItems}>
                            <div className={style.sortingItem} value={'Default'}>Default</div>
                            <div className={style.sortingItem}>popular</div>
                            <div className={style.sortingItem}>price (low - hight)</div>
                            <div className={style.sortingItem}>price (hight - low)</div>
                        </div>
                    </div>
                </div>
                <div className={style.selectionItems}>
                    <CardItem items={items} basketItem={basketItem} favorites={favorites} addBasketItem={addBasketItem} clickToFavorites={clickToFavorites}/>
                </div>
            </div>
        </div>
    )}

export default Selection;