import React, { useState, useEffect } from 'react';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

// for mobile-
// import styles
import 'swiper/css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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

  return (
    <div>
      <Nav
        mobileUI={responsive.mobileUI}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Nav>
      <section className="hero-container">
        <div className="hero"></div>
      </section>
      <main>
        {/* do a carousel for mobile */}
        {(responsive.mobileUI) ? (
          <Swiper
            spaceBetween={80}
            slidesPerView={1}
          >
            <SwiperSlide>
              <About
                mobileUI={responsive.mobileUI}
                setCurrentTab={setCurrentTab}
              ></About>
            </SwiperSlide>

            <SwiperSlide>
              <Projects
                setCurrentTab={setCurrentTab}
              ></Projects>
            </SwiperSlide>

            <SwiperSlide>
              <Resume
                setCurrentTab={setCurrentTab}
              ></Resume>
            </SwiperSlide>

            <SwiperSlide>
              <ContactForm
                setCurrentTab={setCurrentTab}
              ></ContactForm>
            </SwiperSlide>
          </Swiper>
        ) :
        
        // if not on mobile
        (
          (currentTab === "About") ? (
          <About></About>
        ) : (
          (currentTab === "Projects") ? (
            <Projects></Projects>
          ) : (
            (currentTab === "Resume") ? (
              <Resume></Resume>
            ) : (
            <ContactForm></ContactForm>
          )
        )))}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
