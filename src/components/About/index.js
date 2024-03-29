import FadeIn from "../FadeIn";

function About({ setCurrentTab }) {
    
    return (
    <div id="about">
        <FadeIn setCurrentTab={setCurrentTab}>
            <h1 className='welcome topText'>richard huffman</h1>
            <div className='underline'></div>
        </FadeIn>
        <section className='about'>
            <FadeIn setCurrentTab={setCurrentTab}>
                <p className='welcome my-5'>I am a Full Stack Web Developer who is passionate about finding elegant solutions to complex problems.</p>
            </FadeIn>
            <FadeIn setCurrentTab={setCurrentTab}>
                <p className='welcome my-5'>I graduated from Bucknell University in 2018 where I received a B.A. in Philosophy and minors in both Computer Science and Mathematics. After working a client-facing role in tech for 3 years, I decided to round out my coding skills by completing the UNC-Chapel Hill Full Stack Flex Coding Bootcamp in July of 2022, where I gained hands-on experience using browser based technologies like HTML, CSS, Javascript, databases (both relational and non-relational), server side development (User Authentication, PWAs, MERN stack), and API design/consumption.</p>
            </FadeIn>
            <FadeIn setCurrentTab={setCurrentTab}>
                <p className='welcome my-5'>The page you are currently viewing was built from scratch using React. Check out some more examples of my recent work in the next section.</p>
            </FadeIn>
        </section>
    </div>
    );
    
}

export default About;