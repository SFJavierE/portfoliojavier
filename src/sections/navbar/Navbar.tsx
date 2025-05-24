import { useState, type ReactElement } from 'react';
import { Language, Refs } from '../../utils/interfaces/Interfaces'; // Assuming Refs interface defines the React.RefObject types
import ButtonsPresentation from '../../components/buttons/communication/CommunicationButtons'; // Communication buttons component
import Translate from '../../utils/translates/navBar/translate.json'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage } from '../../utils/redux/language';
/**
 * Defines the structure for each navigation link.
 */
interface NavLink {
    label: string; // The display text for the navigation item
    ref: React.RefObject<HTMLDivElement | null>; // The ref to the section it scrolls to
    key: string; // A unique key for list rendering
}

// Common Tailwind CSS classes for navigation list items
const LI_BASE_CLASSES: string = "mb-4 text-start p-2 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out";
const LI_GRADIENT_CLASSES: string = "bg-gradient-to-l from-indigo-950/75 to-indigo-600/50 shadow-indigo-500 hover:from-indigo-800 hover:to-indigo-200/75 hover:shadow-indigo-200";

/**
 * A functional component that renders a responsive, sliding side navigation bar.
 * It allows users to smoothly scroll to different sections of the page.
 *
 * @param {Refs} props - An object containing refs to different sections of the page.
 * @returns {ReactElement} A React fragment containing the navigation toggle button and the navigation menu.
 */
export default function NavBar({ homeRef, skillsRef, jobsRef, educationsRef, projectsRef, aboutMeRef }: Refs): ReactElement {
    const L : Language = useSelector((state : any) => state.language.value)
    const dispatch = useDispatch();
    // State to control the visibility of the navigation bar (true for open, false for closed)
    const [showNavbar, setShowNavBar] = useState<boolean>(false);

    // Array defining the navigation links, their labels, and corresponding section refs
    const NAV_LINKS: NavLink[] = [
        { label: Translate[L].START, ref: homeRef, key: "home" },
        { label: Translate[L].SKILLS, ref: skillsRef, key: "skills" },
        { label: Translate[L].EXPERIENCIE, ref: jobsRef, key: "jobs" },
        { label: Translate[L].EDUCATION, ref: educationsRef, key: "educations" },
        { label: Translate[L].PROJECTS, ref: projectsRef, key: "projects" },
        { label: Translate[L].ABOUTME, ref: aboutMeRef, key: "aboutMe" },
    ];

    /**
     * Scrolls the view to the specified section using its ref.
     * After scrolling, it closes the navigation bar.
     *
     * @param {React.RefObject<HTMLDivElement | null>} ref - The ref object pointing to the target DOM element.
     */
    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>): void => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth', // Enables smooth scrolling animation
                block: 'start',      // Aligns the top of the section with the top of the viewport
            });
            setShowNavBar(false); // Close the navbar after navigating
        }
    };

    return (
        <>
            {/* Navigation Toggle Button */}
            <div className='fixed top-4 left-4 z-[100]
                        transition-all duration-300 ease-in-out w-full'>
                <button
                    className={`${showNavbar ? 'bg-indigo-700 text-white' : 'bg-indigo-950 text-white'}
                        hover:bg-indigo-800 p-2 focus:outline-none rounded-md focus:ring-2 focus:ring-indigo-500 mr-3`}
                    onClick={() => setShowNavBar(!showNavbar)}
                    // Aria label for accessibility, describing button's current action
                    aria-label={showNavbar ? "Close navigation menu" : "Open navigation menu"}
                >
                    {showNavbar ? "←" : "☰"} {/* Display arrow or hamburger icon */}
                </button>
                <button 
                    className={`${showNavbar ? 'bg-indigo-700 text-white' : 'bg-indigo-950 text-white'}
                        hover:bg-indigo-800 p-2 focus:outline-none rounded-md focus:ring-2 focus:ring-indigo-500`}
                    onClick={() => dispatch(changeLanguage())}>
                    {L}
                </button>
            </div>

            {/* Side Navigation Menu */}
            <nav
                className={`
                    fixed top-0 left-0 h-screen w-48 p-4 z-50
                    transform transition-transform duration-300 ease-in-out
                    ${showNavbar
                        ? 'translate-x-0 bg-gradient-to-br from-indigo-500/50 to-indigo-900/75' // Visible state
                        : '-translate-x-full bg-transparent pointer-events-none' // Hidden state, disable pointer events
                    }
                `}
            >
                {/* Navigation Links List */}
                <ul
                    className={`
                        flex flex-col mt-16
                        transition-opacity duration-300 ease-in-out
                        ${showNavbar ? 'opacity-100' : 'opacity-0'} {/* Fade in/out links */}
                    `}
                >
                    {NAV_LINKS.map(link => (
                        <li key={link.key} className={`${LI_BASE_CLASSES} ${LI_GRADIENT_CLASSES}`}>
                            <button className="block w-full text-start" onClick={() => scrollToSection(link.ref)}>
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Communication Buttons */}
                <ButtonsPresentation classContainer="grid grid-cols-3 mt-2 lg:mt-60 gap-x-5 gap-y-2"/>
            </nav>
        </>
    );
}