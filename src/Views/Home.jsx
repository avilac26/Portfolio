import './Home.css'
import HomeAbout from '../Components/HomeAbout';
import HomeProjects from '../Components/HomeProjects';

function Home(){
    
    return(
        <div className='homeContainer'>
            <HomeAbout/>
            <HomeProjects />
        </div>
    )
}

export default Home;



