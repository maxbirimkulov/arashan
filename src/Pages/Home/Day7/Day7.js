import React from 'react';
import clouds from "./clouds.png";
import './day7.css'

const Day7 = () => {
    return (
        <section className='day7'>
            <img src={clouds} alt="clouds" className='day7__clouds'/>
            <div className="container">
                <h2 className='day7__title'>
                    <span className='day7__title-span'>День 7.</span>
                     Вертолетная экскурсия <br/>
                    в Долину Гейзеров и кальдеру <br/>
                    вулкана Узон / свободный день
                </h2>

                <p className='day7__text day7__text_first'>
                    Экскурсия проводится в содружестве с «ВИТЯЗЬ-ТРЕВЕЛ», крупнейшим <br/>
                    оператором вертолётных туров на Камчатке. Выезд в аэропорт «Витязь <br/>
                    –Аэро». К вашим услугам –современный аэропортовый комплекс, <br/>
                    включающий в себя удобный зал ожидания, кафетерий, сувенирный <br/> магазин.


                </p>
                <p className='day7__text day7__text_first'>
                    Перелёт до Долины гейзеров занимает 1 час 10 минут. По пути, при <br/>
                    благоприятных условиях, вы осмотрите два действующих вулкана – <br/> Карымский и Малый Семячик из окон вертолёта.
                </p>
                <p className='day7__text day7__text_sec'>
                    Перелёт и посадка в кальдере Узон. Кальдера образовалась в результате <br/>
                    обрушения стенок древнего вулкана около 40 тысяч лет назад, на её дне <br/>
                    очень ярко проявляется гидротермальная деятельность.Сотни столбов <br/>
                    пара вырываются здесь из жёлтых фумарольных полей. Осмотр <br/> термальных полей.
                </p>

                <div className='day7__content'>
                    <div className='day7__carousel'></div>

                    <div className='day7__content-right'>
                        <p className='day7__content-title'>Перелёт и посадка в Налычевской долине. Купание в горячих <br/>
                            источниках. Здесь же вам предложат обед - горячее, чай и  <br/>
                            камчатский морс. Трансфер в гостиницу. </p>
                        <h3 className='day7__dop'>Дополнительные услуги</h3>
                        <div className='day7__dop-item'>
                            <h4 className='day7__dop-title'>Роуп Джамп</h4>
                            <p className='day7__dop-text'>Прыжки с высоты над водопадом. <br/> Записываться заранее. </p>
                        </div>
                        <div className='day7__dop-item'>
                            <h4 className='day7__dop-title'>Ледянки</h4>
                            <p className='day7__dop-text'>Прыжки с высоты над водопадом. <br/> Записываться заранее. </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Day7;