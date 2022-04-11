import React from 'react';
import './day2.css'
import clouds from "./clouds.png";

const Day2 = () => {
    return (
        <section className='day2'>
            <img src={clouds} alt="clouds" className='day2__clouds'/>
            <div className="container">
                <h2 className='day2__title'>
                    <span className='day2__title-span'>День 2.</span>
                    Вилючинский водопад, вулкан и <br/>
                    Верхне-Паратунские термальные <br/> источники
                </h2>

                <p className='day2__text day2__text_first'>
                    Инструктаж перед поездкой (передвижение и поведение группы в лесу, <br/>
                    общение с медведями, форма одежды, ), снаряжение, (взять тару для <br/>
                    воды при заезде на Зайкин ключ, купальные принадлежности).
                </p>
                <p className='day2__text day2__text_sec'>Сбор участников на Роуп Джамп для прыжков с высоты над водопадом. <br/>
                    Заранее решаем кто прыгает.</p>

                <div className='day2__content'>
                    <div className='day2__carousel'></div>
                    <ul className='day2__list'>
                        <li className='day2__item'>
                            Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к <br/>
                            подножию вулкана Вилючинский. Обзорная пешеходная <br/>
                            экскурсия к водопаду Вилючинский. Термос с чаем, шоколад. <br/>
                            Возвращение назад.
                          </li>
                        <li className='day2__item'>Обед. Купание в Верхне-Паратунских термальных источниках, <br/> расположенных на склоне сопки Горячая.</li>
                        <li className='day2__item'>  Продолжительность – 6-8 часов. Трансфер в гостиницу.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Day2;