import React from 'react';
import './day5.css'
import bg from './bg.png'

const Day5 = () => {
    return (
        <section className='day5'>
            <div className="container">
                <div className='day5__content'>
                    <div className='day5__carousel'></div>
                    <div className='day5__info day5__info_1'>
                        <h2 className='day5__title'> <span className='day3__title-span'>День 5.</span>Морская прогулка к <br/>острову Старичков</h2>

                        <ul className='day5__list'>
                            <li className='day5__item'>
                                Инструктаж по поведению группы при передвижении на <br/> плавсредствах, приему таблеток от морской болезни.
                               </li>
                            <li className='day5__item'>
                                Выезд на причал.  Морская прогулка по Авачинской бухте. <br/>
                                Осмотр панорамы города Петропавловска-Камчатского, <br/>
                                Авачинской губы и Авачинского залива. Маршрут пролегает <br/>
                                мимо бухты Тихая, острова Бабушкин камень, мыса <br/>
                                Станицкого, камней «Три брата». Увлекательная возможность <br/>
                                донной рыбалки на терпуга, ленка, камбалу у «Трех братьев», <br/>
                                мыса Безымянный, у острова Старичков.

                            </li>
                            <li className='day5__item'>
                                Осмотр птичьих базаров - смешанных колонии кайр, моевок <br/> и бакланов. Трансфер в гостиницу.

                            </li>
                            <li className='day5__item'>
                                Продолжительность 6 часов.
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
            <div className="container">
                <div className='day5__content'>
                    <div className='day5__info'>
                        <h2 className='day5__title'> <span className='day3__title-span'>День 6.</span>
                             Берег Тихого <br/> океана, экскурсия по <br/> городу</h2>

                        <ul className='day5__list'>
                            <li className='day5__item'>
                                ИПоездка на берег Тихого океана, в район Халактырского пляжа. <br/>
                                Прогулка. Обед в городе. Обзорная экскурсия по г. <br/>
                                Петропавловску-Камчатскому с посещением смотровых <br/> площадок. Рыбный рынок.
                            </li>
                            <li className='day5__item'>
                                Продолжительность -5 часов.  Трансфер в гостиницу.
                            </li>

                        </ul>

                        <h3 className='day5__dop'>Дополнительные услуги</h3>
                        <div className='day5__dop-item'>
                            <h4 className='day5__dop-title'>Серфинг</h4>
                            <p className='day5__dop-text'>Прыжки с высоты над водопадом. <br/> Записываться заранее. </p>
                        </div>
                        <div className='day5__dop-item'>
                            <h4 className='day5__dop-title'>SUP борды</h4>
                            <p className='day5__dop-text'>Прыжки с высоты над водопадом. <br/> Записываться заранее. </p>
                        </div>

                    </div>
                    <div className='day5__carousel'></div>
                </div>
            </div>
        </section>
    );
};

export default Day5;