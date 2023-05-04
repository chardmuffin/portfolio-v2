import FadeIn from "../FadeIn";

function Resume({ setCurrentTab }) {

  return (
    <section id="resume" className='my-2'>
      <FadeIn setCurrentTab={setCurrentTab}>
        <h2 className='resume-contact centerText'>resume</h2>
        <div className='underline small'></div>
      </FadeIn>
      <FadeIn>
        <a href={require("../../assets/resume.pdf")} download="resume-RHuffman">
          <button className="mx-auto my-5">DOWNLOAD FULL RESUME</button>
        </a>
      </FadeIn>
      <div className='resume-content'>
        <FadeIn>
          <div className='skills'>
            <div className='skills-grid'>
              <div className='skills-column'>
                <h4>Technical Skills</h4>
                <ul>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>MUI</li>
                  <li>Jest</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                  <li>ExpressJS</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>NodeJS</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>OOP</li>
                </ul>
              </div>
              <div className='skills-column'>
                <h4>Additional Skills</h4>
                <ul>
                  <li>GitHub</li>
                  <li>JIRA</li>
                  <li>Windows</li>
                  <li>Linux</li>
                  <li>Microsoft Office</li>
                  <li>Project Management</li>
                  <li>Verbal/Written Communication</li>
                  <li>Agile App Development</li>
                  <li>AWS: Elastic Beanstalk, EC2, RDS, Route 53, and Certificate Manager</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className='education'>
            <h3>Education</h3>
            <div className='education-item'>
              <div className='school-info'>
                <p>University of North Carolina, Chapel Hill</p>
                <p className='grad-date'>July 2022</p>
              </div>
              <ul>
                <li>Full Stack Flex Coding Bootcamp</li>
              </ul>
            </div>
            <div className='education-item'>
              <div className='school-info'>
                <p>Bucknell University, Lewisburg, PA</p>
                <p className='grad-date'>May 2018</p>
              </div>
              <ul>
                <li>Bachelor of Art (Philosophy)</li>
                <li>Minors: Computer Science, Mathematics</li>
                <li>Phi Sigma Tau International Honor Society in Philosophy</li>
                <li>Dean’s Scholar</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Resume;
