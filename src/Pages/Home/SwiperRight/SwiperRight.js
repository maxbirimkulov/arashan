import React from 'react';
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import img from "../FirstScreen/whiteblock.png";
import './swiperRight.css'


const SwiperRight = ({card1, card2}) => {
    return (
        <Swiper
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper swiper-right"
        >
            <SwiperSlide>
                <img className='swiper__img' src={card1} alt="card1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className='swiper__img' src={card2} alt="card2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className='swiper__img' src={card1} alt="card1"/>
            </SwiperSlide>

        </Swiper>
    );
};

export default SwiperRight;