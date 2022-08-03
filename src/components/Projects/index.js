import React, { useEffect } from 'react';
import ProjectList from "../ProjectList";
import { useSwiperSlide } from 'swiper/react';

function Projects({ setCurrentTab }) {

    const swiperSlide = useSwiperSlide();

    useEffect(() => {
        swiperSlide?.isActive && setCurrentTab("Projects");
    }, [setCurrentTab, swiperSlide]);

    return (
        <section>
            <h1 className='centerText'>my projects</h1>
            <div className='underline'></div>
            <ProjectList></ProjectList>
        </section>
    );
};

export default Projects;