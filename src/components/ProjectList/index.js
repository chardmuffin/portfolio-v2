import React from 'react';

function ProjectList() {

    const projects = [
        {
            name: 'Chasing Dreams',
            tags: 'MERN stack',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://chasing-dreams.herokuapp.com/',
            photo: 'chasing-dreams.png'
        },
        {
            name: 'Mental Health Buddy',
            tags: 'HTML, CSS, Javascript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://chardmuffin.github.io/mental-health-buddy/',
            photo: 'mental-health-buddy.png'
        },
        {
            name: 'Code Probe',
            tags: 'HTML, CSS, Javascript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://chardmuffin.github.io/code-probe/',
            photo: 'code-probe.png'
        },
        {
            name: 'Weather Pal',
            tags: 'HTML, CSS, Javascript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
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
            <div className='flex-row'>
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
                        <div className='details' onClick={(e) => triggerHandler(e, project)}>here are some details</div>
                    </div>
                ))}
            </div>
    );
};

export default ProjectList;