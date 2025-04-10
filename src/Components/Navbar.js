import React, { useState } from "react";
import { Link } from "react-scroll";


import './Navbar.css';

function Navbar(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // const closeMenu = () => setClick(false)
    return(
        <div className="navbar">
            <div className="nav_logo">
                <h1>Knoy</h1>
            </div>


            <div className="nav_links">
                <ul>
                    <li><Link to="About" spy={true} smooth={true} offset={-70} duration={1000} onClick={handleClick}>About</Link></li>

                    <li><Link to="Project" spy={true} smooth={true} offset={-50} duration={1000} onClick={handleClick}>Project</Link></li>
                    
                </ul> 
            </div>
        </div>
    )
}

export default Navbar