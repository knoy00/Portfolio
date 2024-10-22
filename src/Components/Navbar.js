import React from "react";
import './Navbar.css';

function Navbar(){
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
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                </ul> 
            </div>
        </div>
    )
}

export default Navbar