import React, {useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination} from 'swiper';

import style from "./ProductPage.module.css";
import  'swiper/swiper-bundle.min.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {useResize} from "../../useResize";

const ProductSlider = ({productImages}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const size = useResize()

    return <section className={style.imagesSection}>
        {size.width > 768 && <div className={style.verticalSlides}>
            <Swiper
                direction={'vertical'}
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={false}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {(productImages.length > 0) && productImages.map((image) => (
                    <SwiperSlide key={image}>
                        <img src={`/${image}`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>}
        <div className={style.productMainSlider}>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={size.width > 768}
                pagination={{
                    dynamicBullets: true
                }}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="mySwiper2"
            >
                {(productImages.length > 0) && productImages.map((image) => (
                    <SwiperSlide key={image}>
                        <img src={`/${image}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
}
export default ProductSlider