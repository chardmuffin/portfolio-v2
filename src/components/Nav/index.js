import React, { useEffect } from 'react';

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
            <h2>
                <a href='/'>
                    <span role="img" aria-label='camera'></span> Hello World!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className={`mx-2 ${currentTab === "About" && 'navActive'}`}>
                        <h6 onClick={() => setCurrentTab("About")}>About Me</h6>
                    </li>
                    <li className={`mx-2 ${currentTab === "Projects" && 'navActive'}`}>
                        <h6 onClick={() => setCurrentTab("Projects")}>Projects</h6>
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