import FadeIn from "../FadeIn";

function About({ setCurrentTab }) {
    
    return (
    <div id="about">
        <FadeIn setCurrentTab={setCurrentTab}>
            <h1 className='welcome centerText'>richard huffman</h1>
            <div className='underline'></div>
        </FadeIn>
        <section className='about'>
            <FadeIn setCurrentTab={setCurrentTab}>
                <p className='welcome my-5'>I am a Full Stack Web Developer who is passionate about finding elegant solutions to complex problems.</p>
            </FadeIn>
            <FadeIn setCurrentTab={setCurrentTab}>
                <p className='welcome my-5'>I completed the UNC-Chapel Hill Full Stack Flex Coding Bootcamp in July 2022, where I gained hands-on experience using browser based technologies, databases, server side development, and API interaction.</p>
            </FadeIn>
            <FadeIn setCurrentTab={setCurrentTab}>
                <p className='welcome my-5'>Check out some examples of my recent work in the next section.</p>
            </FadeIn>
        </section>
    </div>
    );
    
}

export default About;