import TRANSLATE from "../../../../utils/translates/welcome/translate.json"; // Assuming this JSON contains button texts and emojis

// Define the common Tailwind CSS classes for all buttons
const BUTTON_COMMON_CLASS: string = "hover:shadow-md hover:shadow-indigo-400 mt-6 hover:from-indigo-800 hover:to-indigo-200/75 w-full py-3 pl-4 text-start text-2xl rounded-md bg-gradient-to-r from-indigo-950/75 to-indigo-600/25";

// Centralized data for each button to avoid repetition
const BUTTON_DATA = [
    { text: TRANSLATE.ES.BUTTONS.SKILLS, emoji: TRANSLATE.EMOJIS.SKILLS, key: "skills" },
    { text: TRANSLATE.ES.BUTTONS.EXPERIENCIE, emoji: TRANSLATE.EMOJIS.EXPERIENCIES, key: "experience" },
    { text: TRANSLATE.ES.BUTTONS.EDUCATION, emoji: TRANSLATE.EMOJIS.EDUCATION, key: "education" },
    { text: TRANSLATE.ES.BUTTONS.PROJECTS, emoji: TRANSLATE.EMOJIS.PROJECTS, key: "projects" },
    { text: TRANSLATE.ES.BUTTONS.ABOUTME, emoji: TRANSLATE.EMOJIS.ABOUTME, key: "about-me" },
];

/**
 * A functional component that renders a set of navigation buttons for different sections
 * of a profile or portfolio. Each button displays text and an associated emoji.
 *
 * @returns {React.ReactElement} A React div element containing a list of styled buttons.
 */
export default function CardSectionButtons(): React.ReactElement {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full">
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