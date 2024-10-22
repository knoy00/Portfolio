import React from 'react';
import './Hero.css';

function Hero(){
    return(
        <div className='hero'>
            <div className='hero_title'>Welcome to My world of Design & Code</div>

            <div className='hero_content'>Explore my projects, where creativity meets functionality. Simplify your digital experience with designs and code that speak for themselves.</div>

            <div className='hero_scroll'>SCROLL DOWN</div>

            <div className='hero_section'>
                <div className='section_1'>
                    <h1>My Projects</h1>
                    <p>Dive into a collection of my best work!</p>
                    <button>Projects</button>
                </div>

                <div className='section_2'>
                    <img />
                </div>

                <div className='section_3'>
                    <h1>My Projects</h1>
                    <p>"The best way to get a project done faster is to start sooner."</p>
                    <h2>Jim Highsmith</h2>
                    <h3>Software Developer</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero;