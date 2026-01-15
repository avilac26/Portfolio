import React from "react";
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

function ProjectsProjects(){

    return (
        <div className="HomeProjects">
            <div className="HomeProjectsContainer">
                <div className="HomeProjectContainer">
                    <Project 
                        icon= {<FaHtml5 className="html"/>}
                        icon2={<FaCss3Alt className="css"/>}
                        icon3={null}
                        project={'cremolata Website'} 
                        description={'A multi-page website built entirely with HTML and CSS. Fully responsive with clean, user-friendly design and modern layout.'} 
                        link="https://cremolatahtmlcss.netlify.app/"
                    />
                </div>
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
                        icon2={<FaHtml5 className="html"/>}
                        icon3={<FaCss3Alt className="css"/>}
                        project={'React Node JS Clone'} 
                        description={'Node.js official website clone built with React. Each section is a reusable component, following best practices in modularity and responsive design.'} 
                        link="https://reactnodejsclone.netlify.app/"
                    />
                </div>
                <div className="HomeProjectContainer">
                    <Project 
                        icon={<FaAngular className="angular"/>} 
                        icon2={<SiTypescript className="typescript"/>}
                        icon3={<FaCss3Alt className="css"/>}
                        project={'Angular Showcase'} 
                        description={'A component-based Angular application where product descriptions can be dynamically shown or hidden, demonstrating component interaction and state handling.'} 
                        link="https://angularshowcase.netlify.app/"
                    />
                </div>
                <div className="HomeProjectContainer">
                    <Project 
                        icon={<FaReact className="react"/>} 
                        icon2={<SiJavascript className="javascript"/>}
                        icon3={null}
                        project={'To Do List React App'} 
                        description={'A simple and interactive To-Do List app built with React, utilizing React Hooks to manage side effects and state updates. Users can create, read, update, and delete tasks efficiently through a clean and responsive interface.'} 
                        link="https://todolistcrudappreact.netlify.app/"
                    />
                </div>
                <div className="HomeProjectContainer">
                    <Project 
                        icon={<FaAngular className="angular"/>} 
                        icon2={<SiTypescript className="typescript"/>}
                        icon3={<FaCss3Alt className="css"/>}
                        project={'LOLGorithm'} 
                        description={'A multi-page Angular app that fetches jokes from an API, featuring client-side routing for seamless navigation. The app includes state management and event handling to provide an interactive user experience, allowing users to view and refresh between different jokes efficiently.'} 
                        link="https://lolgorithm.netlify.app/home"
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
                        icon={<FaHtml5 className="html"/>}
                        icon2={<SiTailwindcss className="tailwind"/>}
                        icon3={null}
                        project={'Tailwind CSS Miniportfolio'} 
                        description={'Mini portfolio built using only HTML and Tailwind CSS, focused on a clean, responsive, and modern design that showcases personal information, skills, and projects in a clear and visually appealing way.'} 
                        link="https://tailwindcssminiportfolio.netlify.app/"
                    />
                </div>
                <div className="HomeProjectContainer">
                    <Project 
                        icon={<FaReact className="react"/>} 
                        icon2={<SiJavascript className="javascript"/>}
                        icon3={null}
                        project={'Book Showcase React'} 
                        description={'A React application that allows users to create and manage a book gallery by adding titles, authors, introductions, reviews, and uploading cover images from their device. The app displays all books in a gallery and lets users view detailed information for each entry.'} 
                        link="https://bookshowcasereact.netlify.app/"
                    />
                </div>
            </div>
        </div> 
    )
}

export default ProjectsProjects;