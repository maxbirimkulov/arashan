import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './team.css'
import tezza from './tezza.png'
import evg from './evg.png'
import dmit from './dmit.png'

import { Navigation } from "swiper";
import Swipe from "./Swipe";
const Team = () => {
    return (
        <section className='team'>
            <div className="container">
                <h2 className='team__title'>Про нашу супер крутую <br/>
                    команду Dreamkam Tour</h2>
                <p className='team__subtitle'>
                    Наша команда - это люди влюбленные в свою работу. Каждый из <br/>
                    них обладает проффесиональными знаниями, хорошей физической <br/>
                    подготовкой. Следят за вашей безпасностью в туре, и тем чтобы <br/>
                    каждый из вас получил максимальное колличество эмоций.
                </p>

                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={96}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Swipe img={tezza} name='Алина Гончарова' link='@alin_och'/>
                    </SwiperSlide>
                    <SwiperSlide>
                           <Swipe img={evg} name='Евгений Барсуков' link='@eugen_eugen'/>
                    </SwiperSlide>
                        <SwiperSlide>
                            <Swipe img={dmit} name='Дмитрий Осипов' link='@dim_os'/>
                        </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Team;