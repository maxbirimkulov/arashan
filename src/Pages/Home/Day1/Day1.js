import React from 'react';

import './day1.css'

const Day1 = () => {
    return (
        <section className='day1'>
            <div className="container">
                <h2 className='day1__title'> <span className='day1__title-span'>День 1.</span> Прибытие. <br/> Встреча в аэропорту и <br/> размещение</h2>

                <ul className='day1__list'>
                    <li className='day1__item'>
                        С высоты птичьего полета вы увидите знаменитые <br/>
                        «домашние» вулканы – Корякский, Авачинский и Козельский. <br/>
                        У выхода в аэропорту <span className='day1__item-span'>вас встретят с табличкой «ДРИМ ТУР».</span>
                    </li>
                    <li className='day1__item'>
                       <span className='day1__item-span'>По пути в гостиницу сбор средств </span> с членов группы, <br/>
                        инструктаж по программе этого дня (бассейн с термальной <br/>
                        водой, шашлык, знакомство с группой, алкоголь, фейерверк <br/>
                        не раньше 20:00).
                    </li>
                    <li className='day1__item'>
                        После выезд (вид транспорта зависит от величины группы) на <br/>
                        базу отдыха в курортный поселок Паратунка.

                    </li>
                    <li className='day1__item'>
                       <span className='day1__item-span'>Вечером</span>, после прибытия на Камчатку всех участников (если <br/>
                        рейсы разные),  <span className='day1__item-span'>общая встреча</span>, проверка снаряжения, <br/>  обсуждение программы завтрашнего дня.
                    </li>
                </ul>

            </div>

        </section>
    );
};

export default Day1;