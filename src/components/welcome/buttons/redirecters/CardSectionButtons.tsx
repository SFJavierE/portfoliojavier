import { Language } from "../../../../utils/interfaces/Interfaces";
import TRANSLATE from "../../../../utils/translates/welcome/translate.json"; // Assuming this JSON contains button texts and emojis
import { useSelector } from 'react-redux'

// Define the common Tailwind CSS classes for all buttons
const BUTTON_COMMON_CLASS: string = "hover:shadow-md hover:shadow-indigo-400 mt-6 hover:from-indigo-800 hover:to-indigo-200/75 w-full py-3 pl-4 text-start text-md lg:text-2xl rounded-md bg-gradient-to-r from-indigo-950/75 to-indigo-600/25";


/**
 * A functional component that renders a set of navigation buttons for different sections
 * of a profile or portfolio. Each button displays text and an associated emoji.
*
* @returns {React.ReactElement} A React div element containing a list of styled buttons.
*/
export default function CardSectionButtons(): React.ReactElement {
    const L : Language = useSelector((state : any) => state.language.value)

    // Centralized data for each button to avoid repetition
    const BUTTON_DATA = [
        { text: TRANSLATE[L].BUTTONS.SKILLS, emoji: TRANSLATE.EMOJIS.SKILLS, key: "skills" },
        { text: TRANSLATE[L].BUTTONS.EXPERIENCE, emoji: TRANSLATE.EMOJIS.EXPERIENCIES, key: "experience" },
        { text: TRANSLATE[L].BUTTONS.EDUCATION, emoji: TRANSLATE.EMOJIS.EDUCATION, key: "education" },
        { text: TRANSLATE[L].BUTTONS.PROJECTS, emoji: TRANSLATE.EMOJIS.PROJECTS, key: "projects" },
        { text: TRANSLATE[L].BUTTONS.ABOUTME, emoji: TRANSLATE.EMOJIS.ABOUTME, key: "about-me" },
    ];

    return (
        <div className="w-full h-full">
            <div className="lg:flex lg:flex-col w-full">
                {/* Dynamically render buttons from the BUTTON_DATA array */}
                {BUTTON_DATA.map((button, index) => (
                    <button
                        key={button.key} // Unique key for list rendering
                        // Apply common classes, and for the first button, override 'mt-6' with 'mt-0'
                        className={`${BUTTON_COMMON_CLASS} ${index === 0 ? "mt-0" : ""}`}
                    >
                        {`${button.text} ${button.emoji}`} {/* Display button text and emoji */}
                    </button>
                ))}
            </div>
        </div>
    );
}