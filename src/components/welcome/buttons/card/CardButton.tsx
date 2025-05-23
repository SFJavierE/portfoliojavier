import { ButtonTransitionProps } from '../../../../utils/interfaces/Interfaces'; // Import the ButtonTransitionProps interface

/**
 * A functional component for a transition button, typically used within a card
 * to trigger a state change (e.g., show/hide details, navigate).
 *
 * @param {ButtonTransitionProps} { setChangeSection, changeSection } -
 * setChangeSection: A state setter function to toggle a boolean state.
 * changeSection: The current boolean value of the state.
 * @returns {React.ReactElement} A React button element.
 */
export default function CardButton({ setChangeSection, changeSection }: ButtonTransitionProps): React.ReactElement {
    // Define the Tailwind CSS classes for the button's styling and transition effects.
    const buttonClass: string = "hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out bg-gradient-to-r from-gray-200/0 to-gray-600/25 rounded-ee-lg rounded-se-lg text-gray-700 font-bold bg-gray-200 w-6 h-full absolute right-0 top-1/2 -translate-y-1/2 z-20";

    return (
        <button
            // On click, toggle the 'changeSection' state by calling its setter with the opposite value.
            onClick={() => setChangeSection(!changeSection)}
            className={buttonClass}
        >
            {">"} {/* Display a right arrow as the button content */}
        </button>
    );
}