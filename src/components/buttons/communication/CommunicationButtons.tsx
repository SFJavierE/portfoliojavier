import CV from "../../../assets/pdf/CVSosaFuch.pdf";
import { ReactElement } from 'react';
import { LinkedIn, GitHub, Email, Cv, Phone, Copy } from '../../../utils/icons/Icons';
// Importing the refined interfaces and types
import { ActionType, ButtonActions, ClassContainer, IconProps } from '../../../utils/interfaces/Interfaces';

// Centralizing social media links and constants for easy management
const SOCIAL_MEDIA_LINKS = {
    linkedIn: "https://www.linkedin.com/in/sosafuch",
    github: "https://github.com/Zoaxx1",
    email: "sosafuch@gmail.com",
    whatsapp: "https://w.app/sosafuchjaviere",
    cvName: "CVJavierESosaFuch"
};

// Common Tailwind CSS classes for all SVG icons
const ICON_CLASS_NAME: string = "mr-3 w-10 h-10 hover:border-gray-200 hover:bg-gray-200 hover:text-indigo-800 transition ease-in-out text-indigo-200 delay-150 bg-indigo-900 rounded-md border-4 border-indigo-800 shadow-indigo-600 shadow-md hover:shadow-lg hover:shadow-indigo-400";

// Configuration array for each button, mapping action to its icon component
const BUTTON_CONFIG: { action: ActionType; icon: React.ComponentType<IconProps> }[] = [
    { action: 'LinkedIn', icon: LinkedIn },
    { action: 'GitHub', icon: GitHub },
    { action: 'Whatsapp', icon: Phone },
    { action: 'Email', icon: Email },
    { action: 'CopyEmail', icon: Copy },
    { action: 'CV', icon: Cv },
];

/**
 * Renders a set of communication buttons for social media and CV download.
 * @param {ClassContainer} { classContainer } - The CSS class for the main container div.
 */
const CommunicationButtons = ({ classContainer }: ClassContainer): ReactElement => {

    /**
     * Renders an individual social media button.
     * @param {ButtonActions} { action } - The action associated with the button (e.g., 'LinkedIn', 'GitHub').
     */
    const SocialMediaButton = ({ action }: ButtonActions): ReactElement => {
        // Find the corresponding icon component from the BUTTON_CONFIG
        const config = BUTTON_CONFIG.find(btn => btn.action === action);

        // If no config found for the action, return an empty fragment
        if (!config) return <></>;

        // Destructure the IconComponent from the found config
        const IconComponent = config.icon;

        return (
            <button
                key={action} // Use action as key for uniqueness in lists
                className="" // Add specific button styling if needed
                onClick={() => handleAction(action)} // Trigger the main action handler
            >
                <IconComponent className={ICON_CLASS_NAME} /> {/* Render the icon with shared class */}
            </button>
        );
    };

    /**
     * Handles different communication actions based on the provided action type.
     * @param {ActionType} action - The type of action to perform.
     */
    const handleAction = async (action: ActionType) => {
        switch (action) {
            case 'LinkedIn':
                window.open(SOCIAL_MEDIA_LINKS.linkedIn, "_blank");
                break;
            case 'GitHub':
                window.open(SOCIAL_MEDIA_LINKS.github, "_blank");
                break;
            case 'Email':
                window.location.href = `mailto:${SOCIAL_MEDIA_LINKS.email}`;
                break;
            case 'Whatsapp':
                window.open(SOCIAL_MEDIA_LINKS.whatsapp, "_blank");
                break;
            case 'CopyEmail':
                try {
                    await navigator.clipboard.writeText(SOCIAL_MEDIA_LINKS.email);
                    alert("Email copied to clipboard!"); // User feedback
                } catch (err) {
                    console.error("Failed to copy email:", err);
                    alert("Could not copy email."); // User feedback for error
                }
                break;
            case 'CV':
                // Fetch the CV PDF
                const response = await fetch(CV);
                const blob = await response.blob();

                // Create a temporary anchor element to trigger download
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = SOCIAL_MEDIA_LINKS.cvName; // Set the download file name

                // Append link to body, click it, and then remove it
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;
            default:
                // Log a warning for any unhandled action types
                console.warn(`Unknown action: ${action}`);
                break;
        }
    };

    return (
        <div className={classContainer}>
            {/* Map through the BUTTON_CONFIG to render each social media button */}
            {BUTTON_CONFIG.map(({ action }) =>
                <div key={action}> {/* Key prop for list rendering efficiency */}
                    <SocialMediaButton action={action} />
                </div>
            )}
        </div>
    );
};

export default CommunicationButtons;