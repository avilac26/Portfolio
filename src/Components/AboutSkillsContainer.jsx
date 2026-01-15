import React from "react";
import './AboutSkillsContainer.css'
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

function AboutSkills(){

    return (
        <>
           <div className="AboutSkillsInfoContainer">
                <div className="AboutSkillsInformationContainer">
                    <h1>Technical Skills</h1>
                    <p>
                        These are the technologies I use to build modern, responsive,
                        and user-friendly web applications.
                    </p>

                    <div className="AboutSkillsGrid">
                        <div className="SkillItem">
                            <FaHtml5 className="icon html" />
                            <span>HTML</span>
                        </div>

                        <div className="SkillItem">
                            <FaCss3Alt className="icon css" />
                            <span>CSS</span>
                        </div>

                        <div className="SkillItem">
                            <FaBootstrap className="icon bootstrap" />
                            <span>Bootstrap</span>
                        </div>

                        <div className="SkillItem">
                            <SiTailwindcss className="icon tailwind" />
                            <span>Tailwind CSS</span>
                        </div>

                        <div className="SkillItem">
                            <SiJavascript className="icon javascript" />
                            <span>JavaScript</span>
                        </div>

                        <div className="SkillItem">
                            <SiTypescript className="icon typescript" />
                            <span>TypeScript</span>
                        </div>

                        <div className="SkillItem">
                            <FaAngular className="icon angular" />
                            <span>Angular</span>
                        </div>

                        <div className="SkillItem">
                            <FaReact className="icon react" />
                            <span>React</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default AboutSkills;