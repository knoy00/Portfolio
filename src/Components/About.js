import React from "react";
import './About.css';

function About(){
    return(
        <div className="about" id="About">
            <div className="about_header"><span>About</span> Me</div>
            <hr />

            <div className="about_content">
                <p>Hi, I'm Kelvin Nana Osei Yeboah, a Front-End Developer with a background in accounting and a strong passion for web development. I hold a Bachelor of Science in Accounting from Central University College and a Software Engineering Diploma, but my true calling is in creating intuitive and efficient user interfaces.

                With expertise in JavaScript, HTML5, CSS, and modern web frameworks like React, I've had the opportunity to contribute to impactful projects in both corporate and team-based environments. My professional experience includes optimizing web applications, collaborating with designers to build user-friendly interfaces, and improving performance and security.

                I’m dedicated to problem-solving, continuous learning, and delivering high-quality solutions. Let's connect to discuss how I can contribute to your team! 
                </p>
            </div>
        </div>
    )
}

export default About;