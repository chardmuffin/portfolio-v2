import React from 'react';

function ProjectList() {

    const projects = [
        {
            name: 'Chasing Dreams',
            tags: 'MERN stack',
            description: 'Chasing Dreams is a travel application that helps users to find hotels and attractions at locations all over the world.',
            link: 'https://chasing-dreams.herokuapp.com/',
            photo: 'chasing-dreams.png'
        },
        {
            name: 'Mental Health Buddy',
            tags: 'HTML, CSS, Javascript',
            description: 'Mental Health Buddy displays quotes from any of these categories: advice slips, dad jokes, zen quotes, stoicism quotes, and Kanye quotes. Also allows users to create daily TODO list.',
            link: 'https://chardmuffin.github.io/mental-health-buddy/',
            photo: 'mental-health-buddy.png'
        },
        {
            name: 'Code Probe',
            tags: 'HTML, CSS, Javascript',
            description: 'Test your knowledge of Javacsript, CSS, HTML, and more! Upon starting the quiz, a timer counts down from 75 seconds and the user is prompted with several multiple-choice questions. (Questions and their answer choices appear in a randomized order each time the quiz is taken.)',
            link: 'https://chardmuffin.github.io/code-probe/',
            photo: 'code-probe.png'
        },
        {
            name: 'Weather Pal',
            tags: 'HTML, CSS, Javascript',
            description: 'Utlizes OpenWeatherMap API to provide a summary of the current weather and a 5-day forecast for any major city.',
            link: 'https://chardmuffin.github.io/weather-pal/',
            photo: 'weather-pal.png'
        },
        {
            name: 'Project5',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: '',
            photo: '0.jpg'
        },
        {
            name: 'Project6',
            tags: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: '',
            photo: '0.jpg'
        }
    ];

    function triggerHandler(e, project) {
        e.preventDefault();
        window.open(project.link, '_blank');
    }
    
    return (
        <div className='flex-row space-around'>
            {projects.map((project) => (
                <div className='card'>
                    <div className='img-div'>
                        <img
                        src={require(`../../assets/portfolio/${project.photo}`)}
                        alt={project.name}
                        className="img-thumbnail mx-1"
                        key={project.name}
                        />
                    </div>
                    <div className='details' onClick={(e) => triggerHandler(e, project)}>
                        <p><span>{project.name}</span></p>
                        <p>
                            <span>></span>{project.tags}
                        </p>
                        <p>
                            <span>></span>{project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;