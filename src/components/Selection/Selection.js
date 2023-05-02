import React from "react";
import style from './Selection.module.css'
import checkImg from '../../assecs/images/check.svg'
import checkboxImg from '../../assecs/images/checkbox.svg'


const Selection = ({items, addBasketItem, basketItem}) => {
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

    let btnBuyOff = (id) => {
        return basketItem.some( i => i.item.id === id)
    }

       let slectionItem = items.map(item => <div className={style.selectionItem} key={item.id}>
                <div className={style.imgBlock}>
                    <img className={style.itemImg} src={item.imageUrl} alt="IMG"/>
                    <button className={style.btnFavorite}>
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
                    {slectionItem}
                </div>
            </div>
        </div>
    )}

export default Selection;