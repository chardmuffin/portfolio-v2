import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function ProjectList() {

    const projects = [
        {
            name: 'WIP - Bar Book',
            tags: 'MongoDB, Express, React, Node, CSS, Apollo client, GraphQL',
            description: `Bar Book is a mobile webapp I am working on that will make it easy to look up cocktail recipes very quickly. React-Bootstrap components are a starting point when building the mobile-first UI. Recipe search results are fetched from "TheCocktailDB.com" API.`,
            link: 'https://bar-book.herokuapp.com/',
            repo: 'https://github.com/chardmuffin/bar-book',
            photo: 'chasing-dreams.png'
        },
        {
            name: 'Chasing Dreams',
            tags: 'MongoDB, Express, React, Node, CSS',
            description: 'Chasing Dreams is a group project where the group used the MERN stack to build a travel application that helps users to find hotels and attractions at locations all over the world.',
            link: 'https://chasing-dreams.herokuapp.com/',
            repo: 'https://github.com/Mikekuney/Chasing-Dreams',
            photo: 'chasing-dreams.png'
        },
        {
            name: 'Mental Health Buddy',
            tags: 'HTML, CSS, Javascript',
            description: 'Mental Health Buddy displays quotes from any of these categories: advice slips, dad jokes, zen quotes, stoicism quotes, and Kanye quotes. (A different API is leveraged for each category.) Also allows users to create daily TODO list.',
            link: 'https://chardmuffin.github.io/mental-health-buddy/',
            repo: 'https://github.com/chardmuffin/mental-health-buddy',
            photo: 'mental-health-buddy.png'
        },
        {
            name: 'Code Probe',
            tags: 'HTML, CSS, Javascript',
            description: 'Test your knowledge of Javacsript, CSS, HTML, and more! Upon starting the quiz, a timer counts down from 75 seconds and the user is prompted with several multiple-choice questions. (Questions and their answer choices appear in a randomized order each time the quiz is taken.)',
            link: 'https://chardmuffin.github.io/code-probe/',
            repo: 'https://github.com/chardmuffin/code-probe',
            photo: 'code-probe.png'
        },
        {
            name: 'Weather Pal',
            tags: 'HTML, CSS, Javascript',
            description: 'Utlizes OpenWeatherMap API to provide a summary of the current weather and a 5-day forecast for any major city.',
            link: 'https://chardmuffin.github.io/weather-pal/',
            repo: 'https://github.com/chardmuffin/weather-pal',
            photo: 'weather-pal.png'
        }
    ];
    
    return (
        <div className='projects'>
            {projects.map((project) => (
                <div className='card' key={project.name}>
                    <div className='img-div'>
                        <img
                        src={require(`../../assets/portfolio/${project.photo}`)}
                        alt={project.name}
                        className="img-thumbnail mx-1"
                        />
                    </div>
                    <div className='details'>
                        <p><span>{project.name}</span></p>
                        <p>
                            <span>></span>{project.tags}
                        </p>
                        <p>
                            <span>></span>{project.description}
                        </p>
                        <div className='buttons'>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <button>Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                            </a>
                            <a href={project.repo} target="_blank" rel="noreferrer">
                                <button><FontAwesomeIcon icon={faGithubSquare} /> Source Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;