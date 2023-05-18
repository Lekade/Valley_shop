import React, {useState} from "react";
import style from "./SliderRenge.module.css"
import ReactSlider from 'react-slider'

const SliderRenge = () => {

    const [sliderValue, setSliderValue] = useState([15, 800])

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
                    max={2000}
                    min={0}
                    renderThumb={(props, state) => <div {...props}></div>}
                    pearling
                    minDistance={0}
                    onChange={(sliderValue, index) => setSliderValue(sliderValue)}
                />
            </div>
        </>
    )
}

export default SliderRenge