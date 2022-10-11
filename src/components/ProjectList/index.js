import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import FadeIn from '../FadeIn';

function ProjectList( { setCurrentTab, mobileUI } ) {

    const projects = [
        {
            name: 'Portfolio',
            tags: 'React, Node, CSS, JavaScript',
            description: `The portofolio you are viewing is a single page app built from scratch using React.`,
            link: 'https://chardmuffin.github.io/portfolio-v2/',
            repo: 'https://github.com/chardmuffin/portfolio-v2',
            photo: 'portfolio.png'
        },
        {
            name: 'Bar Book',
            tags: 'MongoDB, Express, React, Node, JavaScript, CSS, Apollo GraphQL',
            description: `Bar Book is a solo project I made while working as a bartender to make it easier to quickly look up cocktail recipes. React-Bootstrap components were used as a starting point when building the mobile-first UI. Recipe search results are displayed via query on the Drinks DB (using Apollo GraphQL). Some sections of the app require creating an account. Once logged in (users are authorized by JWT), users are able to add custom drink recipes to the DB, view their profile, and create a Bar Book of recipes.`,
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
            name: 'Code Probe',
            tags: 'HTML, CSS, JavaScript',
            description: 'The quiz starts, a timer counts down from 75 seconds and the user is prompted with several multiple-choice questions. (Questions and answer choices appear in a randomized order each time the quiz is taken.)',
            link: 'https://chardmuffin.github.io/code-probe/',
            repo: 'https://github.com/chardmuffin/code-probe',
            photo: 'code-probe.png'
        },
        {
            name: 'Weather Pal',
            tags: 'HTML, CSS, JavaScript',
            description: 'Utlizes OpenWeatherMap API to provide a summary of the current weather and a 5-day forecast for any major city.',
            link: 'https://chardmuffin.github.io/weather-pal/',
            repo: 'https://github.com/chardmuffin/weather-pal',
            photo: 'weather-pal.png'
        }
    ];
    
    return (
        <section className='projects'>
            {projects.map((project, index) => (
                <FadeIn setCurrentTab={setCurrentTab} key={project.name}>
                    <div className='card' >
                        <img
                            src={require(`../../assets/portfolio/${project.photo}`)}
                            alt={project.name}
                            className={`img-thumbnail ${!mobileUI && (index%2 === 0 ? " float-left" : " float-right")}`}
                        />
                            
                        <div className='details'>
                            <h4 className={`my-5 ${(!mobileUI && index%2!==0) && "my-5 text-align-right"}`}><span>{project.name}</span></h4>
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
