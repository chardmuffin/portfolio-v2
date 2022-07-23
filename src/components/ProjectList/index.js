import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList() {

    const [projects] = useState([
        {
            name: 'Project1',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Project2',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Project3',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Project4',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Project5',
            tags: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Project6',
            tags: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        }
    ]);

    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (project, i) => {
        setCurrentProject({ ...project, index: i });
        setIsModalOpen(!isModalOpen);
    }
    
    return (
        <div>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            <div className='flex-row'>
                {projects.map((project, i) => (
                    <img
                        src={require(`../../assets/small/${i}.jpg`)}
                        alt={project.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(project, i)}
                        key={project.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;