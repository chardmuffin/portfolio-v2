import ProjectList from "../ProjectList";
import FadeIn from "../FadeIn";

function Projects({ setCurrentTab, mobileUI }) {

    return (
        <section id="projects">
            <FadeIn>
                <h1 className='welcome centerText'>my projects</h1>
                <div className='underline'></div>
            </FadeIn>
            <ProjectList setCurrentTab={setCurrentTab} mobileUI={mobileUI}></ProjectList>
        </section>
    );
};

export default Projects;