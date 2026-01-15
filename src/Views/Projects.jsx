import ProjectsProjects from '../Components/ProjectsProjects';
import AboutProjectsContainer from '../Components/AboutProjectsContainer';


function Projects({}){
    return(
        <div>
            <AboutProjectsContainer
            title={"Things I’ve built while learning and growing as a Front-End Developer."}
            description={
                <>
                    <p>
                        I’ve worked on a variety of academic projects where 
                        I constantly build websites and mini applications 
                        using different front-end technologies. These projects
                         represent my learning journey and my passion for 
                         creating clean, responsive, and interactive user 
                         interfaces.
                    </p>
                    <p>
                        Through these projects, I’ve strengthened my 
                        understanding of front-end fundamentals, modern 
                        frameworks, and best practices, while continuously 
                        challenging myself to improve with every new build.
                    </p>
                    <p>
                        I’m currently seeking my first professional opportunity 
                        as a Front-End Developer, where I can contribute, keep 
                        learning, and grow as part of a team. I’m highly motivated, 
                        open to feedback, and excited to apply my skills in a 
                        real-world environment while continuing to develop as a 
                        developer.
                    </p>
                </>
            }
            />
            <ProjectsProjects />
        </div>
    )
}

export default Projects;