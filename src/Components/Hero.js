import React from 'react';
import './Hero.css';
import { motion } from 'motion/react';

function Hero(){
    return(
        <div className='hero'>
            <motion.div className='hero_title'
            initial={{opacity: 0, y: -150}}
            animate={{opacity: 1, y: 20}}
            transition={{duration: 1, ease: 'easeInOut'}}
            >Welcome to My world of Design & Code</motion.div>

            <motion.div className='hero_content'
            initial={{opacity: 0, x: 180}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, ease: 'linear'}}
            >Explore my projects, where creativity meets functionality. Simplify your digital experience with designs and code that speak for themselves.</motion.div>

            <div className='hero_scroll'>SCROLL DOWN</div>

            <div className='hero_section'>
                <div className='section_1'>
                    <h1>My Projects</h1>
                    <p>Dive into a collection of my best work!</p>
                    <button>Projects</button>
                </div>

                <div className='section_2'>
                    {/* <img /> */}
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