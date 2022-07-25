import React from 'react';
import ProjectList from "../ProjectList";

function Projects() {

    return (
        <section>
            <h1 className='centerText'>My Projects</h1>
            <div className='underline'></div>
            <ProjectList></ProjectList>
        </section>
    );
};

export default Projects;