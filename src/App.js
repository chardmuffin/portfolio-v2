import React, { useState } from 'react';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {

  const [currentTab, setCurrentTab] = useState("About");

  console.log(currentTab);

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
        {(currentTab === "About") ? (
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
        ))}
      </main>
      
      <Footer></Footer>
    </div>
  );
};

export default App;
