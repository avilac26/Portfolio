import React from "react";
import './HomeAbout.css';
import './iconsColors.css';
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function HomeAbout(){

    return (
        <>
            <div className="HomeAboutInfoContainer">
                <div className="HomeAboutImgContainer">
                    <img className="HomeAboutImg" src="/197187601.jpg" alt="" />
                </div>
                <div className="HomeAboutInformationContainer">
                    <h1>Front End Web Developer</h1>
                    <p>
                        I am a Junior Front End Developer with knowledge of HTML, 
                        CSS, and JavaScript, and experience using frameworks such
                         as React and Angular. I enjoy creating responsive, 
                         accessible, and user-friendly interfaces while following 
                         modern web development best practices. Currently, I am a 
                         student working towards becoming a Full Stack Developer, 
                         continuously learning both front-end and back-end 
                         technologies. I am motivated to grow, improve my skills, 
                         and take on new challenges that help me advance in my 
                         development career.
                    </p>
                    <div className="HomeAboutContainerIcon">
                        <a href="https://github.com/avilac26" target="_blank" rel="noopener noreferrer">
                            {<FaGithub className="icon"/>}
                        </a>
                        <a href="https://www.linkedin.com/in/emanuel-%C3%A1vila-c%C3%B3rdoba-420106328/" target="_blank" aria-label="LinkedIn">
                            {<FaLinkedin className="icon"/>}
                        </a>
                    </div>
                </div>
            </div>
            <br />
            
        </>
    )
}

export default HomeAbout;