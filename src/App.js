import React, { useState } from 'react';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {

  const [currentTab, setCurrentTab] = useState("About");

  console.log(currentTab);

  return (
    <div>
      <Nav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Nav>
      <main>
        {(currentTab === "About") ? (
          <About></About>
        ) : (
          (currentTab === "Projects") ? (
            <Projects></Projects>
          ) : (
            <ContactForm></ContactForm>
          )
        )}
      </main>
    </div>
  );
};

export default App;
