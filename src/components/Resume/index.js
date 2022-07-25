import React from "react";

function Resume() {

  return (
    <section className='my-2'>
      <h2 className='centerText'>skills & proficiencies</h2>
      <div className='underline'></div>
      <div className="two-columns skills-container">
        <ul>
          <li>
            MERN (MongoDB, Express.js, React, Node.js)
          </li>
          <li>
            MySQL
          </li>
          <li>
            Javascript
          </li>
          <li>
            JQuery
          </li>
          <li>
            CSS
          </li>
          <li>
            Bootstrap
          </li>
          <li>
            HTML
          </li>
          <li>
            Python
          </li>
          <li>
            Java
          </li>
          <li>
            GitHub
          </li>
          <li>
            Jira
          </li>
          <li>
            Salesforce
          </li>
          <li>
            Project Management
          </li>
          <li>
            Oral and Written Communication
          </li>
        </ul>
      </div>
      <br></br>
      <br></br>
      <a href={require("../../assets/resume.pdf")} download="resume-RHuffman">
        <button className="mx-auto my-5">DOWNLOAD RESUME</button>
      </a>
    </section>
  )

}

export default Resume;