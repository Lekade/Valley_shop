import React, {useState} from "react";
import style from "./SliderRenge.module.css"
import ReactSlider from 'react-slider'
import { useSelector, useDispatch } from 'react-redux'
import {setPriceFilter} from "../../../redux/slices/productSlice";


const SliderRenge = () => {
    const dispatch = useDispatch()

    const [sliderValue, setSliderValue] = useState([15, 50])

    const PriceChange = (sliderValue, index) =>{
        setSliderValue(sliderValue)
        dispatch(setPriceFilter({min: sliderValue[0], max: sliderValue[1]}))
    }

    return(
        <>
            <div className={style.priceLabel}>
                <div className={style.priceStart}><span className={style.priceStartValue} >{sliderValue[0]}</span> USD.</div>
                <span className={style.priceDecoration}></span>
                <div className={style.priceEnd}><span className={style.priceEndValue}>{sliderValue[1]}</span> USD.</div>
            </div>
            <div>
                <ReactSlider
                    className={style.sliderPrice}
                    thumbClassName={style.thumb}
                    trackClassName="trackPrice"
                    defaultValue={[sliderValue[0], sliderValue[1]]}
                    max={300}
                    min={0}
                    renderThumb={(props, state) => <div {...props}></div>}
                    pearling
                    minDistance={0}
                    onChange={(sliderValue, index) => PriceChange(sliderValue, index)}
                />
            </div>
        </>
    )
}

export default SliderRenge