import React from 'react';
import './header.css'
import icon from './mountain.svg'


const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <a href='#' className='header__logo'>
                        <img className='header__logo-img' src={icon} alt="Алтын Арашан travel"/>
                        <h1 className='header__title' >
                            АЛТЫН - АРАШАН
                            <br/>
                            TRAVEL
                        </h1>
                    </a>
                    <div className='header__right'>
                        <ul className='header__list'>
                            <li className='header__item'>
                                <a className='header__link' href="#">Расписание тура</a>
                            </li>
                            <li className='header__item'>
                                <a className='header__link' href="#">Как записаться</a>
                            </li>
                            <li className='header__item'>
                                <a className='header__link' href="#">Команда</a>
                            </li>
                        </ul>

                        <button type='button' className='header__btn'>Забронировать</button>
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Header;