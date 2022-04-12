import React from 'react';
import './day3.css'
import bg from './bg.png'

const Day3 = () => {
    return (
        <section className='day3'>
            <div className="container">
                <div className='day3__content'>
                    <div className='day3__carousel'></div>
                    <div className='day3__info'>
                        <h2 className='day3__title'> <span className='day3__title-span'>День 3.</span> Горные цирки и <br/>
                            водопады вулкана <br/> Вачкажец</h2>

                        <ul className='day3__list'>
                            <li className='day3__item'>
                                Вачкажец–горный массив и его окрестности, одно из красивейших <br/>
                                мест первозданной камчатской природы. Небольшой пеший <br/>
                                переход не успеет Вас утомить. А в награду за труд в конце пути <br/>
                                открывается великолепный вид на горное озеро в чаше кратера <br/>
                                старого потухшего вулкана, обрамленное пиками старых, <br/>
                                невысоких гор.


                               </li>
                            <li className='day3__item'>
                                Выезд из гостиницы и переезд около 2 часов. Пеший переход <br/>
                                около 5 км.в одну сторону к горным циркам вулкана Вачкажец, <br/>
                                осмотр водопада. Обед.  Отдых. По прибытию в машину чай с <br/> шоколадом! Обратный переход по тому же пути.
                            </li>
                            <li className='day3__item'>
                                Продолжительность: 8 часов. Трансфер в гостиницу.
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
            <img src={bg} alt="day3 bg" className='day3__bg'/>
        </section>
    );
};

export default Day3;