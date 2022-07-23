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
                        <span onClick={() => setCurrentTab("About")}>About Me</span>
                    </li>
                    <li className={`mx-2 ${currentTab === "Projects" && 'navActive'}`}>
                        <span onClick={() => setCurrentTab("Projects")}>Projects</span>
                    </li>
                    <li className={`mx-2 ${currentTab === "Contact" && 'navActive'}`}>
                        <span onClick={() => setCurrentTab("Contact")}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;