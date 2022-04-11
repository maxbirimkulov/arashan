import React from 'react';
import './home.css'
import FirstScreen from "./FirstScreen/FirstScreen";
import Begin from "./Begin/Begin";
import Day1 from "./Day1/Day1";
import Day2 from "./Day2/Day2";
import Road from "./Road/Road";

const Home = () => {
    return (
        <section className='home'>
            <FirstScreen/>
            <Begin/>
            <Day1/>
            <Day2/>
            <Road/>
        </section>
    );
};

export default Home;