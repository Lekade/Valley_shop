import React, {useState} from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, EffectFade} from 'swiper';
import  'swiper/swiper-bundle.min.css'
import style from './CardItem.module.css'



const CardImagesSlides = ({images}) => {

    const [swiper, setSwiper] = useState()

    return (
        <Swiper
            modules={[Pagination, EffectFade]}
            slidesPerView={'1'}
            effect={'fade'}
            onSwiper={(swiper) => setSwiper(swiper)}

        >{images.map((image) => (
           <SwiperSlide  key={image} >
               <img className={style.itemImg} src={`/${image}`} alt="slide" onMouseEnter={()=> console.log(1)}/>
           </SwiperSlide>
            ))}
            <div className={style.customHoverPagination}  onMouseOut={()=> swiper.slideTo(0)}>
                {images.map((image, index) => (
                    <div className={style.hoverPoint} onMouseEnter={() => swiper.slideTo(index)}>{index}</div>
                ))}
            </div>
        </Swiper>
    );
}
export default CardImagesSlides