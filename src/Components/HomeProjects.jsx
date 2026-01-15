import React from "react";
import { Link } from "react-router-dom";
import './HomeProjectsProjects.css';
import './iconsColors.css';
import Project from "./Project";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaReact, 
  FaAngular 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript 
} from "react-icons/si";

function HomeProjects(){

    return (
        <div className="HomeProjects">
            <div className="HomeProjectsContainer">
                <div className="HomeProjectContainer">
                    <Project 
                        icon={<FaHtml5 className="html"/>}
                        icon2={<FaBootstrap className="bootstrap"/>}
                        icon3={null}
                        project={'cremolata Website'} 
                        description={'A multi-page website styled with Bootstrap, focused on responsive layout, consistent styling, and efficient CSS-based design.'} 
                        link="https://cremolatabootstrap.netlify.app/"
                    />
                </div>
                <div className="HomeProjectContainer">
                    <Project 
                        icon={<FaReact className="react"/>} 
                        icon2={<SiJavascript className="javascript"/>}
                        icon3={null}
                        project={'Weather Widget React'} 
                        description={'A React mini app that fetches weather data for cities worldwide using a weather API. The app also integrates Google Maps to display the location of the selected city, providing an interactive and visually informative user experience.'} 
                        link="https://weatherwidgetreact.netlify.app/"
                    />
                </div>
                <div className="HomeProjectContainer">
                    <Project 
                        icon={<FaAngular className="angular"/>}  
                        icon2={<SiTypescript className="typescript"/>}
                        icon3={null}
                        project={'LOLGorithm'} 
                        description={'A multi-page Angular app that fetches jokes from an API, featuring client-side routing for seamless navigation. The app includes state management and event handling to provide an interactive user experience, allowing users to view and refresh between different jokes efficiently.'} 
                        link="https://lolgorithm.netlify.app/home"
                    />
                </div>
            </div>
            <div className="HomeProjectContainerOption">
                <div className="HomeProjectOption"> <Link to={"/projects"}>View all projects...</Link> </div>
            </div>
        </div> 
    )
}

export default HomeProjects;