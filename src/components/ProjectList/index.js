import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import FadeIn from '../FadeIn';

function ProjectList( { setCurrentTab, mobileUI } ) {

    const projects = [
        {
            name: 'Bar Book',
            tags: 'MongoDB, Express, React, Node, JavaScript, CSS, Apollo GraphQL',
            description: `Bar Book is a project I made for my own use while working as a beginner bartender to make it easier for me to quickly look up cocktail recipes. React-Bootstrap components were used as a starting point to build the mobile-first UI. Recipe search results are displayed via a query on the Drinks DB (using Apollo GraphQL). Some sections of the app require creating an account. Once logged in (users are authorized by JWT), users are able to add custom drink recipes to the DB and view their profile.`,
            link: 'https://bar-book.herokuapp.com/',
            repo: 'https://github.com/chardmuffin/bar-book',
            photo: 'bar-book.png'
        },
        {
            name: 'Chasing Dreams',
            tags: 'MongoDB, Express, React, Node, JavaScript, CSS',
            description: 'Chasing Dreams was a group project. We used the MERN stack to build a travel application that helps users to find hotels and attractions at locations all over the world. Search results are fetched via API. A different API is leveraged to attempt to include a picture with each search result (my responsibility). Users can save their favorite search results.',
            link: 'https://chasing-dreams.herokuapp.com/',
            repo: 'https://github.com/Mikekuney/Chasing-Dreams',
            photo: 'chasing-dreams.png'
        },
        {
            name: 'Mental Health Buddy',
            tags: 'HTML, CSS, JavaScript',
            description: 'Mental Health Buddy was a group project, although I built the majority of this one. The app displays quotes from any of these categories (selected by the user): advice slips, dad jokes, zen quotes, and stoicism quotes. (A different API is leveraged for each category.) Favorite quotes can be saved and viewed via the hamburger menu. The color scheme is customizable. App also allows users to track a list of TODOs.',
            link: 'https://chardmuffin.github.io/mental-health-buddy/',
            repo: 'https://github.com/chardmuffin/mental-health-buddy',
            photo: 'mental-health-buddy.png'
        },
        {
            name: 'Fully Immersive Game Developer Experience Simulator (FIGDES)',
            tags: 'Godot, GDScript, JSON',
            description: '(Not a web project.) I started building a game in Spring of 2020. After researching game engines I taught myself how to use Godot and GDScript. Although it is currently not finished, my game features an original game concept, original sprites, pixel perfect rendering, and a self-produced chiptune soundtrack.',
            link: 'https://chardmuffin.github.io/FIGDES/',
            repo: 'https://github.com/chardmuffin/FIGDES',
            photo: 'FIGDES.png'
        },
        {
            name: 'Code Probe',
            tags: 'HTML, CSS, JavaScript',
            description: 'The quiz starts, a timer counts down from 75 seconds and the user is prompted with several multiple-choice questions. (Questions and answer choices appear in a randomized order each time the quiz is taken.)',
            link: 'https://chardmuffin.github.io/code-probe/',
            repo: 'https://github.com/chardmuffin/code-probe',
            photo: 'code-probe.png'
        }
    ];
    
    return (
        <section className='projects'>
            {projects.map((project, index) => (
                <FadeIn setCurrentTab={setCurrentTab} key={project.name}>
                    <div className='card' >
                        <h4 className="my-5 text-align-center"><span>{project.name}</span></h4>
                            
                        <img
                            src={require(`../../assets/portfolio/${project.photo}`)}
                            alt={project.name}
                            className={`img-thumbnail ${!mobileUI && (index%2 === 0 ? " float-left" : " float-right")}`}
                        />
                        <div className='details'>
                            <p className={`my-5 ${(!mobileUI && index%2!==0) && "my-5 text-align-right"}`}>
                                <span>></span>{project.tags}
                            </p>
                            <p className={`my-5 ${(!mobileUI && index%2!==0) && "my-5 text-align-right"}`}>
                                <span>></span>{project.description}
                            </p>
                            <div className='buttons'>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <button>Deployed Site<br></br><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                                </a>
                                <a href={project.repo} target="_blank" rel="noreferrer">
                                    <button><FontAwesomeIcon icon={faGithubSquare} /><br></br>Source Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </section>
    );
};

export default ProjectList;
