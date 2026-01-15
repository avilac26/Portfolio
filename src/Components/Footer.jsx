import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer(){


    return (
        <div className="Footer">
            <hr/>
            <div className="FooterContainer">
                <nav>
                    <ul className="FooterOptionsContainer">
                        <li className="navOption"> <Link to={"/"}>Home</Link> </li>
                        <li className="navOption"> <Link to={"/about"}>About</Link> </li>
                        <li className="navOption"> <Link to={"/projects"}>Projects</Link> </li>
                    </ul>
                </nav>
                <div className="FooterAuthorInfoContainer">
                    <p>@2025 Emanuel Ávila Córdoba dev. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;