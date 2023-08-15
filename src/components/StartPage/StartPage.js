import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import style from "./StartPage.module.css"
import {setGender} from "../../redux/slices/filterSlice";
import {useDispatch} from 'react-redux'
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination} from "swiper";
import {useResize} from "../../useResize";

const StartPage = () => {
    const dispatch = useDispatch()
    const size = useResize().width

    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(()=>{
        if(size <= 768){
            dispatch(setGender(activeIndex))
        }
    },[activeIndex])

    return <NavLink to='/Category' className={size <= 768 ? `${style.srartPage} ${style.slider}` : style.srartPage}>
        <Swiper
            onRealIndexChange={(el) => setActiveIndex(el.activeIndex + 1)}
            modules={[Pagination]}
            slidesPerView={size <= 768 ? '1' : '2'}
        >
            <SwiperSlide >
                <div onClick={() => dispatch(setGender(1))} className={`${style.gender} ${style.woman}`}>
                    <p className={style.text}>Woman</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="80" viewBox="0 0 57 80" fill="none">
                        <path d="M43.8743 54.8131L55.586 43.1014C56.4869 42.2005 56.9374 41.1494 56.9374 39.9482C56.9374 38.747 56.4869 37.696 55.586 36.7951L43.7617 24.9708C42.9359 24.1449 41.9043 23.75 40.6671 23.7861C39.4268 23.8251 38.3938 24.2575 37.568 25.0834C36.7422 25.9092 36.3292 26.9602 36.3292 28.2365C36.3292 29.5128 36.7422 30.5639 37.568 31.3897L41.622 35.4437H27.095C25.8187 35.4437 24.7677 35.8747 23.9419 36.7365C23.116 37.6014 22.7031 38.672 22.7031 39.9482C22.7031 41.2245 23.1356 42.2936 24.0004 43.1554C24.8623 44.0203 25.9314 44.4527 27.2076 44.4527H41.622L37.4554 48.6194C36.6296 49.4452 36.2347 50.4783 36.2707 51.7185C36.3097 52.9557 36.7422 53.9873 37.568 54.8131C38.3938 55.6389 39.4449 56.0518 40.7211 56.0518C41.9974 56.0518 43.0485 55.6389 43.8743 54.8131Z" fill="#F8F8F8"/>
                    </svg>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div onClick={() => dispatch(setGender(2))} className={`${style.gender} ${style.man}`}>
                    <p className={style.text}>Men</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="80" viewBox="0 0 57 80" fill="none">
                        <g clipPath="url(#clip0_253_2449)">
                            <path d="M13.1257 25.1869L1.414 36.8986C0.513094 37.7995 0.0626427 38.8506 0.0626426 40.0518C0.0626425 41.253 0.513093 42.304 1.41399 43.2049L13.2383 55.0292C14.0641 55.8551 15.0957 56.25 16.3329 56.2139C17.5732 56.1749 18.6062 55.7425 19.432 54.9166C20.2578 54.0908 20.6708 53.0398 20.6708 51.7635C20.6708 50.4872 20.2578 49.4361 19.432 48.6103L15.378 44.5563L29.905 44.5563C31.1813 44.5563 32.2323 44.1253 33.0581 43.2635C33.884 42.3986 34.2969 41.328 34.2969 40.0518C34.2969 38.7755 33.8644 37.7064 32.9996 36.8446C32.1377 35.9797 31.0686 35.5473 29.7924 35.5473L15.378 35.5473L19.5446 31.3806C20.3705 30.5548 20.7653 29.5217 20.7293 28.2815C20.6903 27.0443 20.2578 26.0127 19.432 25.1869C18.6062 24.3611 17.5551 23.9482 16.2789 23.9482C15.0026 23.9482 13.9515 24.3611 13.1257 25.1869Z" fill="#F8F8F8"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_253_2449">
                                <rect width="57" height="80" fill="white" transform="translate(57 80) rotate(-180)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </SwiperSlide>
        </Swiper>
    </NavLink>
}
export default StartPage