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
          <button className="mx-auto my-5">DOWNLOAD RESUME</button>
        </a>
      </FadeIn>
    </section>
  )

}

export default Resume;