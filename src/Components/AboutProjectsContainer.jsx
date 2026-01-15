import './AboutProjectsContainer.css'
import AboutContactContainer from './AboutContactContainer';
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function AboutProjectsContainer({title, description}){
    return(
        <>
            <div className="AboutProjectsMainContainer">
                <div className="AboutProjectsContainer">
                    <div className="AboutContainerDescription">
                        <h2>
                            {title}
                        </h2>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div>
                        <AboutContactContainer icon1={<FaLinkedin className='icon'/>} icon2={<FaGithub className='icon'/>} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutProjectsContainer;