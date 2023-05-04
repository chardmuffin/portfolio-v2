
function Nav({ currentTab, setCurrentTab }) {

    const handleClick = (e) => {

        const requestedPage = e.target.textContent;
        if (requestedPage === "About Me") {
            
            setCurrentTab("about")
            window.location.href="#"
        }
        if (requestedPage === "Portfolio") {
            window.location.href = "#projects"
            setCurrentTab("projects")
        }
        if (requestedPage === "Resume") {
            window.location.href = "#resume"
            setCurrentTab("resume")
        }
        if (requestedPage === "Contact") {
            window.location.href = "#contact"
            setCurrentTab("contact")
        }
    }

    return (
        <>
            <header className="flex-row px-1">
                <h1 className='mobile-title' onClick={() => setCurrentTab("about")}>
                    Richard Huffman
                </h1>  
                <nav>
                    <ul className='flex-row mobile-nav-pages'>
                        <li className={`mx-2 ${currentTab === "about" && 'navActive'}`}>
                            <h6 onClick={handleClick}>About Me</h6>
                        </li>
                        <li className={`mx-2 ${currentTab === "projects" && 'navActive'}`}>
                            <h6 onClick={handleClick}>Portfolio</h6>
                        </li>
                        <li className={`mx-2 ${currentTab === "resume" && 'navActive'}`}>
                            <h6 onClick={handleClick}>Resume</h6>
                        </li>
                        <li className={`mx-2 ${currentTab === "contact" && 'navActive'}`}>
                            <h6 onClick={handleClick}>Contact</h6>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Nav;