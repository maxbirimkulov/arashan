import React from 'react';
import './header.css'


const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <a href='#' className='header__logo'>
                        <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.607422 31.8498V2.02042C0.607422 0.904576 1.51337 0 2.63091 0H17.5682C19.0724 0 20.0508 1.5806 19.3781 2.92399L4.44077 32.7534C3.48586 34.6603 0.607422 33.9818 0.607422 31.8498ZM50.3852 31.8498V2.02042C50.3852 0.904576 49.4791 0 48.3617 0H33.4244C31.9202 0 30.9418 1.5806 31.6145 2.92399L46.5519 32.7534C47.5066 34.6603 50.3852 33.9818 50.3852 31.8498ZM26.5081 35.1554V5.32596C26.5081 3.19398 29.3865 2.51549 30.3414 4.42243L45.2787 34.2518C45.9513 35.5952 44.9732 37.1758 43.4689 37.1758H28.5315C27.414 37.1758 26.5081 36.2712 26.5081 35.1554ZM24.4846 5.32596V35.1554C24.4846 36.2712 23.5786 37.1758 22.4611 37.1758H7.52378C6.01956 37.1758 5.04121 35.5952 5.71389 34.2518L20.6512 4.42243C21.6061 2.51549 24.4846 3.19398 24.4846 5.32596Z"
                                fill="#275553"/>
                        </svg>
                        <h1 className='header__title'>
                            DREAMKAM
                            <br/>
                            TOUR
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