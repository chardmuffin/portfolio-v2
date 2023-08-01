import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>&copy; {currentYear} Richard Huffman</span>
      <div className="icons">
        <a href={'https://www.linkedin.com/in/richard-huffman-52806b137'} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> </a>
        <a href={'https://github.com/chardmuffin'} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubSquare} /> </a>
      </div>
    </footer>
  )

}

export default Footer;