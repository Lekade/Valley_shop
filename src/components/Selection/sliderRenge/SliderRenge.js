import React from "react";
import style from "./SliderRenge.module.css"
import ReactSlider from 'react-slider'
import { useSelector, useDispatch } from 'react-redux'
import {setPrice, setFilter} from "../../../redux/slices/filterSlice";


const SliderRenge = () => {
    const dispatch = useDispatch()
    const {minPrice, maxPrice} = useSelector(state => state.filterReducer)


    const PriceChange = (minPrice, maxPrice) =>{
        dispatch(setPrice({min: minPrice, max: maxPrice}))
        dispatch(setFilter())
    }

    return(
        <>
            <div className={style.priceLabel}>
                <div className={style.priceStart}><span className={style.priceStartValue} >{minPrice}</span> USD.</div>
                <span className={style.priceDecoration}></span>
                <div className={style.priceEnd}><span className={style.priceEndValue}>{maxPrice}</span> USD.</div>
            </div>
            <div className={style.wrapperSliderPrice}>
                <ReactSlider
                    className={style.sliderPrice}
                    thumbClassName={style.thumb}
                    trackClassName="trackPrice"
                    defaultValue={[minPrice, maxPrice]}
                    max={300}
                    min={0}
                    renderThumb={(props, state) => <div {...props}></div>}
                    pearling
                    minDistance={0}
                    onChange={([minPrice, maxPrice], index) => PriceChange(minPrice, maxPrice)}
                />
            </div>
        </>
    )
}

export default SliderRenge