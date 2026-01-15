import React from "react";
import './Project.css';

function Project({icon, icon2, icon3, project, description, link}){

    return (
        <div className="ProjectContainer">
            <div className="skillItem">
                {icon}
                {icon2}
                {icon3}
            </div>
            <h2>{project}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Visit Project
            </a>
        </div>
    )
}

export default Project;