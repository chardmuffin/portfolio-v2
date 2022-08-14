import React, { useState, useEffect } from 'react';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {

  const [currentTab, setCurrentTab] = useState("about");

  const [width, setWindowWidth] = useState(0);

  useEffect(() => { 
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  }

  // mobileUI ? do mobile UI : do something else
  const responsive = {
    mobileUI: width <= 950
  }

  // if something is different for mobileUI, use (responsive.mobileUI) ? (...) : (...)
  return (
    <div>
      <Nav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Nav>
      <section className="hero-container">
        <div className="hero"></div>
      </section>
      <main>
        {responsive.mobileUI && <div className='my-5 py-5'></div>}
        <About setCurrentTab={setCurrentTab}></About>
        <Projects setCurrentTab={setCurrentTab} mobileUI={responsive.mobileUI}></Projects>
        <Resume setCurrentTab={setCurrentTab}></Resume>
        <ContactForm setCurrentTab={setCurrentTab}></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
