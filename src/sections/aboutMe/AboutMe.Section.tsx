import ButtonsPresentation from "../../components/buttons/communication/CommunicationButtons"; // Imports the communication buttons component
import Translate from '../../utils/translates/aboutMe/translate.json'; // Imports translation data for the About Me section
import { type ReactElement } from 'react'; // Imports ReactElement type for explicit typing

/**
 * A functional component that renders the "About Me" section of a portfolio or profile.
 * It displays a main title, a personal description spanning two paragraphs,
 * a signature, and a set of communication buttons.
 *
 * All dynamic textual content for this section is fetched from the
 * 'aboutMe/translate.json' file for easy internationalization and content updates.
 *
 * @returns {ReactElement} A React div element representing the entire "About Me" section.
 */
export default function AboutMe(): ReactElement {
    return (
        <div className="w-full text-gray-200">
            {/* Section Title: Displays the "About Me" title, styled with a gradient background. */}
            <div className="from-indigo-800 to-indigo-200/75 w-full py-3 pl-4 text-start text-3xl rounded-md bg-gradient-to-r font-bold">
                {Translate.ES.TITLE} {/* Fetches the title from the translation file */}
            </div>

            {/* Description Section: Contains the personal narrative. */}
            <div className="pl-6 mt-6 text-lg">
                {/* First paragraph of the 'About Me' text. */}
                <p>
                    {Translate.ES.TEXT.FIRST} {/* Fetches the first paragraph from the translation file */}
                </p>
                <br /> {/* Line break for visual separation between paragraphs */}
                {/* Second paragraph of the 'About Me' text. */}
                <p>
                    {Translate.ES.TEXT.SECOND} {/* Fetches the second paragraph from the translation file */}
                </p>
            </div>

            {/* Footer Section: Contains the signature and communication buttons. */}
            <div className="text-2xl font-bold flex justify-between text-end pl-6">
                {/* Signature Name: Hardcoded as it's a fixed personal detail. */}
                <p className="mt-6">Javier Eduardo Sosa Fuch</p>
                {/* Communication Buttons: Renders a set of external communication links,
                    aligned to the end of the container. */}
                <ButtonsPresentation classContainer="flex justify-end mt-6" />
            </div>
        </div>
    );
}