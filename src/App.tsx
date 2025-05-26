import { useRef, type ReactElement, useEffect } from 'react'; // Import useRef for DOM references and ReactElement type
import './App.css'; // Assuming this imports global or base styles
import NavBar from './sections/navbar/Navbar'; // Navigation bar component
import CardPresentation from './sections/cardPresentation/CardPresentation'; // Welcome/Card presentation section
import Experiencies from './sections/experiencies/Experiencies.Section'; // Experiences section
import Projects from './sections/projects/Projects.Section'; // Projects section
import Skills from './sections/skills/Skills.Section'; // Skills section
import AboutMe from './sections/aboutMe/AboutMe.Section'; // About Me section
import Education from './sections/education/Education.Section'; // Education section
import { useDispatch } from 'react-redux';
import { setAllRefs } from './utils/redux/refs';
import { Refs } from './utils/interfaces/Interfaces';

/**
 * The main App component that orchestrates the entire portfolio layout.
 * It uses refs to allow smooth scrolling between different sections via the NavBar.
 *
 * @returns {ReactElement} The root React element for the application.
 */
function App(): ReactElement {
    const dispatch = useDispatch();

    // Create refs for each major section of the portfolio.
    // These refs will be attached to their respective section divs,
    // allowing direct DOM manipulation for smooth scrolling.
    const homeRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const jobsRef = useRef<HTMLDivElement>(null); // Often used for "Experience"
    const educationsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutMeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const refs : Refs= {
            homeRef,
            skillsRef,
            jobsRef,
            educationsRef,
            projectsRef,
            aboutMeRef
        }
        dispatch(setAllRefs(refs))
    }, [])
    
    return (
        <div
            className="
                w-full min-h-screen
                scroll-smooth           /* Enables smooth scrolling animation */
                snap-y snap-mandatory    /* Enforces vertical scroll snapping to elements */
                pb-24 px-6 lg:px-36              /* Padding at the bottom and horizontal padding */
            "
        >
            {/* Navigation Bar: Receives all section refs to enable smooth scrolling to each section. */}
            <NavBar/>

            {/* Container for all main content sections */}
            <>
                {/* Home/Welcome Section */}
                <div ref={homeRef} className="snap-start min-h-screen flex items-center justify-center">
                    <CardPresentation />
                </div>

                {/* Skills Section */}
                <div ref={skillsRef} className="snap-start min-h-screen flex items-center justify-center">
                    <Skills />
                </div>

                {/* Experiences Section */}
                <div ref={jobsRef} className="snap-start min-h-screen flex items-center justify-center">
                    <Experiencies />
                </div>

                {/* Education Section */}
                <div ref={educationsRef} className="snap-start min-h-screen flex items-center justify-center">
                    <Education />
                </div>

                {/* Projects Section */}
                <div ref={projectsRef} className="snap-start min-h-screen flex items-center justify-center">
                    <Projects />
                </div>

                {/* About Me Section */}
                <div ref={aboutMeRef} className="snap-start min-h-screen flex items-center justify-center">
                    <AboutMe />
                </div>
            </>
        </div>
    );
}

export default App;