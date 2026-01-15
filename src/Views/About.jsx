import AboutProjectsContainer from '../Components/AboutProjectsContainer';
import AboutSkillsContainer from '../Components/AboutSkillsContainer';


function About({}){
    return(
        <>
            <div >
                <div>
                    <AboutProjectsContainer 
                    LinkedinIcon={LinkedinIcon} 
                    GithubIcon={GithubIcon}
                    title={"I’m Emanuel, a Front-End Developer based in Costa Rica, where I build and experiment with modern web experiences."}
                    description={
                        <>
                            <p>
                                I work mainly on academic and personal projects, constantly 
                                creating websites and mini applications using different 
                                front-end technologies. These projects reflect my learning 
                                journey, my curiosity, and my commitment to improving my skills 
                                with every new challenge.
                            </p>
                            <p>
                                Many of my projects are built for practice and learning, and 
                                I enjoy sharing my work, exploring new ideas, and refining my 
                                code based on feedback. I’m currently seeking my first 
                                professional opportunity as a Front-End Developer, where I can 
                                continue learning, contribute to real-world projects, and grow 
                                as part of a collaborative team.
                            </p>
                        </>
                    }
                    />
                </div>
                <div>
                    <AboutSkillsContainer/>
                </div>
            </div>
        </>
    )
}

export default About;