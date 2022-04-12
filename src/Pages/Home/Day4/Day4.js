import React from 'react';
import './day4.css'
import birds from './birds.png'

const Day4 = () => {
    return (
        <section className='day4'>
            <div className="container">
                <div className='day4__content'>
                    <div className='day4__info'>
                        <h2 className='day4__title'> <span className='day3__title-span'>День 4.</span> Горные цирки и <br/>
                            водопады вулкана <br/> Вачкажец</h2>

                        <ul className='day4__list'>
                            <li className='day4__item'>
                                Инструктаж по поведению группы в горах. Проверка <br/>
                                снаряжения.Выезд на автомашине на вулканическое плато <br/>
                                (высота 900 м) к подножию Авачинского вулкана (2 часа).

                            </li>
                            <li className='day4__item'>
                                Пешеходная экскурсия к горе Верблюд, представляющую <br/>
                                собой вулканическую экструзию. Находится в седловине <br/>
                                между Корякским и Авачинским вулканами, относительная <br/>
                                высота 100-150 м, ширина - около 100 м и по длине она <br/>
                                протягивается на 500 м., состоит из трех сросшихся блоков.

                            </li>
                            <li className='day4__item'>
                                Обед.  Поездка в Паратунку с купанием.
                            </li>
                            <li className='day4__item'>
                                Продолжительность – 8 часов. Трансфер в гостиницу.
                            </li>
                        </ul>


                    </div>
                    <div className='day4__carousel'>

                    </div>
                </div>
                <img src={birds} alt="birds kamchatka" className='day4__birds'/>
            </div>
        </section>
    );
};

export default Day4;