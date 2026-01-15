import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){


    return (
        <div className="navFixed">
            <nav>
                <ul className="navContainer">
                    <li className="navOption"> <Link to={"/"}>Home</Link> </li>
                    <li className="navOption"> <Link to={"/about"}>About</Link> </li>
                    <li className="navOption"> <Link to={"/projects"}>Projects</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;