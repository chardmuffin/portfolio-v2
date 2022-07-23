import React from 'react';
import headshot from '../../assets/cover/headshot.jpg';

function About() {
    return (
        <section className='my-2'>
            <h1 id="about">Who am I?</h1>
            <img src={headshot} className="headshot my-2" alt="headshot" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra diam sit amet nisl suscipit. Accumsan lacus vel facilisis volutpat est velit egestas dui. Eget lorem dolor sed viverra ipsum nunc aliquet. Sem viverra aliquet eget sit amet tellus cras adipiscing. Curabitur vitae nunc sed velit dignissim. Nunc sed velit dignissim sodales ut eu. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Elit eget gravida cum sociis natoque penatibus et. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Elit ut aliquam purus sit. Malesuada proin libero nunc consequat interdum. Magna sit amet purus gravida quis blandit turpis. Ultrices eros in cursus turpis massa tincidunt dui ut.</p>
        </section>
    );
}

export default About;