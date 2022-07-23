import React from 'react';
import ProjectList from "../ProjectList";

function Projects() {

    return (
        <section>
            <h1>My Projects</h1>
            <p>Here are some of the projects I have worked on! Select one to see a preview.</p>
            <ProjectList></ProjectList>
        </section>
    );
};

export default Projects;