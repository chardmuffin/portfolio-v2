import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList() {

    const [projects] = useState([
        {
            name: 'Chasing Dreams',
            tags: 'MERN',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://chasing-dreams.herokuapp.com/',
            photo: 'chasing-dreams.png'
        },
        {
            name: 'Project2',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: '',
            photo: '0.jpg'
        },
        {
            name: 'Project3',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: '',
            photo: '0.jpg'
        },
        {
            name: 'Project4',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: '',
            photo: '0.jpg'
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
    ]);

    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (project) => {
        setCurrentProject({ ...project});
        setIsModalOpen(!isModalOpen);
    }
    
    return (
        <div>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            <div className='flex-row'>
                {projects.map((project) => (
                    <img
                        src={require(`../../assets/portfolio/${project.photo}`)}
                        alt={project.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(project)}
                        key={project.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;