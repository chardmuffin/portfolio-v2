import React, { useState, useEffect } from 'react';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {

  const [currentTab, setCurrentTab] = useState("About");

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
        {(currentTab === "About") ? (
          <About mobileUI={responsive.mobileUI}></About>
        ) : (
          (currentTab === "Projects") ? (
            <Projects></Projects>
          ) : (
            (currentTab === "Resume") ? (
              <Resume></Resume>
            ) : (
            <ContactForm></ContactForm>
            )
          )
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
