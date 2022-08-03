import React, { useEffect } from 'react';
import headshot from '../../assets/cover/headshot.jpg';
import { useSwiperSlide } from 'swiper/react';

function About({ mobileUI, setCurrentTab}) {

    const swiperSlide = useSwiperSlide();

    useEffect(() => {
        swiperSlide?.isActive && setCurrentTab("About")
    },[setCurrentTab, swiperSlide]);
    
    return (
    <>
        <h1 className='centerText'>richard huffman</h1>
        <div className='underline'></div>
        <section className='about'>
            {mobileUI ? <></> : <img src={headshot} className="headshot float-right" alt="headshot" />}
            <p className='my-5'>Hello! I am a Full Stack Web Developer who is passionate about finding elegant solutions to complex problems.</p>
            <p className='my-5'>I completed the UNC-Chapel Hill Coding Bootcamp in July 2022, where I gained hands-on experience using browser based technologies, databases, server side development, and API interaction. The course was a great supplement to my familiarity with Object-Oriented Programming from my college studies. Check out my Portfolio page for some examples of my recent work!</p>
            <p>Outside the office, my hobbies/interests include swimming, cooking and eating food, watching movies, drawing and painting, reading philosophy, and playing chess, but my favorite thing to do in my free time is play piano. I am always learning new things and being productive!</p>
            {mobileUI ? <img src={headshot} className="headshot my-5" alt="headshot" /> : <></>}
        </section>  
    </>
    );
    
}

export default About;