import React, { useState } from "react";
import { Link } from "react-scroll";


import './Navbar.css';

function Navbar(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false)
    return(
        <div className="navbar">
            <div className="nav_logo">
                <h2>Knoy</h2>
            </div>

            <div className="time">
                Time
            </div>

            <div className="nav_links">
                <ul>
                    <li><Link to="About" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>About</Link></li>
                    <li><a href="">Projects</a></li>
                </ul> 
            </div>
        </div>
    )
}

export default Navbar