import React, { useEffect } from 'react';

function Nav({ currentTab, setCurrentTab }) {

    useEffect(() => {
        document.title = currentTab;

    }, [currentTab]);

    return (
        <>
            <header className="flex-row px-1">
                <h1 className='mobile-title' onClick={() => setCurrentTab("About")}>
                    Richard Huffman
                </h1>  
                <nav>
                    <ul className='flex-row mobile-nav-pages'>
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
        </>
    );
};

export default Nav;