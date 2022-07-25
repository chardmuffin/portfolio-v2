import React, { useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';

function Nav(props) {

    const {
        currentTab,
        setCurrentTab,
    } = props;

    useEffect(() => {
        document.title = currentTab;

    }, [currentTab]);

    return (
        <header className="flex-row px-1">
            <h1>
                <ReactTypingEffect
                    text={[`print("Hello World!")`, `System.out.println("Hello World!");`, `console.log("Hello World!");`]}
                    onClick={() => setCurrentTab("About")}
                    speed={200}
                    eraseSpeed={60}
                    typingDelay={300}
                />
            </h1>
            <nav>
                <ul className='flex-row'>
                    <li className={`mx-2 ${currentTab === "About" && 'navActive'}`}>
                        <h6 onClick={() => setCurrentTab("About")}>About Me</h6>
                    </li>
                    <li className={`mx-2 ${currentTab === "Projects" && 'navActive'}`}>
                        <h6 onClick={() => setCurrentTab("Projects")}>Portfolio</h6>
                    </li>
                    <li className={`mx-2 ${currentTab === "Resume" && 'navActive'}`}>
                        <h6 onClick={() => setCurrentTab("Resume")}>Resume</h6>
                    </li>
                    <li className={`mx-2 ${currentTab === "Contact" && 'navActive'}`}>
                        <h6 onClick={() => setCurrentTab("Contact")}>Contact</h6>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;