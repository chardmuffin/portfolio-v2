import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import FadeIn from '../FadeIn';

function ProjectList( { setCurrentTab, mobileUI } ) {

    const projects = [
        {
            name: 'artbychard.com',
            tags: 'MySQL, Express, React, NodeJS, JavaScript, Material UI, Docker, AWS',
            description: `An online gallery featuring original oil paintings and other work for sale. The site is built with React.js and powered by Stripe for secure purchases over HTTPS.`,
            link: 'https://www.artbychard.com/',
            repo: 'https://github.com/chardmuffin/art-portfolio',
            photo: 'artbychard.png'
        },
        {
            name: 'Bar Book',
            tags: 'MongoDB, Express, React, NodeJS, JavaScript, CSS, Apollo GraphQL',
            description: `I made Bar Book for my own use while working as a beginner bartender to make it easier for me to quickly look up cocktail recipes. React-Bootstrap components were used as a starting point to build the mobile-first UI. Recipe search results are displayed via a query on the Drinks DB (using Apollo GraphQL). Some sections of the app require creating an account. Once logged in (users are authorized by JWT), users are able to add custom drink recipes to the DB and view their profile.`,
            link: 'https://bar-book.herokuapp.com/',
            repo: 'https://github.com/chardmuffin/bar-book',
            photo: 'bar-book.png'
        },
        {
            name: 'Chasing Dreams',
            tags: 'MongoDB, Express, React, NodeJS, JavaScript, CSS',
            description: 'A group project. We used the MERN stack to build a travel application that helps users to find hotels and attractions at locations all over the world. Search results are fetched via API. A different API is leveraged to attempt to include a picture with each search result (my responsibility). Users can save their favorite search results.',
            link: 'https://chasing-dreams.herokuapp.com/',
            repo: 'https://github.com/Mikekuney/Chasing-Dreams',
            photo: 'chasing-dreams.png'
        },
        {
            name: 'Mental Health Buddy',
            tags: 'HTML, CSS, JavaScript',
            description: 'A group project. The app displays quotes from any of these categories (selected by the user): advice slips, dad jokes, zen quotes, and stoicism quotes. (A different API is leveraged for each category.) Favorite quotes can be saved and viewed via the hamburger menu. The color scheme is customizable. App also allows users to track a list of TODOs. I was responsible for everything except TODOs functionality.',
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
                    <div className='card'>
                        <h4 className='my-5 text-align-center'>
                            <span>{project.name}</span>
                        </h4>
            
                        <div
                            className='grid-container'
                            style={mobileUI
                                ? { gridTemplateAreas: "'img' 'details'" }
                                : index % 2 === 0
                                ? { gridTemplateAreas: "'img details'" }
                                : { gridTemplateAreas: "'details img'" }
                            }
                        >
                            <img
                                src={require(`../../assets/portfolio/${project.photo}`)}
                                alt={project.name}
                                className='img-thumbnail'
                            />
                            <div className='details'>
                                <p className='my-4 tags'>
                                    <span>></span>
                                    {project.tags}
                                </p>
                                <p className='my-3 description'>
                                    <span>></span>
                                    {project.description}
                                </p>
                                <div className='buttons'>
                                    <a href={project.link} target='_blank' rel='noreferrer'>
                                        <button>
                                            Deployed Site
                                            <br />
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </button>
                                    </a>
                                    <a href={project.repo} target='_blank' rel='noreferrer'>
                                        <button>
                                            <FontAwesomeIcon icon={faGithubSquare} />
                                            <br />
                                            Source Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </section>
    );
};

export default ProjectList;
