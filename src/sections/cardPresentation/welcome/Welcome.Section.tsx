import Name from "../../../components/welcome/name/Name";
import CommunicationButtons from "../../../components/buttons/communication/CommunicationButtons";
import ShortDescription from "../../../components/welcome/presentation/ShortDescription";
import Photo from "../../../components/welcome/photo/Photo";
import Phrase from "../../../components/welcome/phrase/Phrase";
import CardSectionButtons from "../../../components/welcome/buttons/redirecters/CardSectionButtons";
import CardButton from "../../../components/welcome/buttons/card/CardButton";
import { useState, useEffect, type ReactElement } from 'react'; // Import ReactElement type

/**
 * The Welcome component serves as the main entry point for the introductory section of the application.
 * It manages the display of a photo and two interchangeable content sections
 * (personal info vs. navigation buttons) with an automatic transition.
 *
 * @returns {ReactElement} A React div element representing the welcome section.
 */
export default function Welcome(): ReactElement {
    // State to control which content section is currently visible (true for CardSectionButtons, false for personal info)
    const [changeSection, setChangeSection] = useState<boolean>(false);

    // Common Tailwind CSS classes for the content sections, enabling smooth transitions
    const contentBaseClasses: string = "absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out";

    /**
     * useEffect hook to manage the automatic content section transition.
     * It sets a timer to toggle `changeSection` every 15 seconds.
     * The timer is cleared on component unmount or when `changeSection` changes.
     */
    useEffect(() => {
        const timer = setTimeout(() => {
            setChangeSection(prev => !prev); // Toggle the section
        }, 15000); // 15 seconds duration

        // Cleanup function: clears the timer when the component unmounts or effect re-runs
        return () => {
            clearTimeout(timer);
        };
    }, [changeSection]); // Effect re-runs whenever `changeSection` changes, resetting the timer

    return (
        <div className="overflow-hidden relative max-w-5xl h-[475px] flex flex-col md:flex-row w-full gap-6 p-8 rounded-xl bg-gradient-to-br from-indigo-900 via-gray-950 to-indigo-900 rounded-3xl shadow-2xl shadow-indigo-950/70 ring-2 ring-indigo-500/70 [box-shadow:inset_0_0_80px_rgba(165,180,252,0.1),inset_0_0_20px_rgba(165,180,252,0.2)] border border-indigo-700/50 backdrop-blur-sm p-8">
            {/* Photo Section: Displays the profile picture and embedded technologies */}
            <div className="w-full max-w-[400px] md:max-w-none mr-2 z-10 relative">
                <Photo />
            </div>

            {/* Dynamic Content Section: Swaps between personal details and navigation buttons */}
            <div className="w-[1230px] relative overflow-hidden">
                {/* First Content Block: Name, Phrase, Short Description, Communication Buttons */}
                <div
                    className={`${contentBaseClasses} ${!changeSection ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                    aria-hidden={changeSection} // Hide content from accessibility tree when not visible
                >
                    <Name />
                    <Phrase />
                    <ShortDescription />
                    <CommunicationButtons classContainer="flex justify-start mt-6" />
                </div>

                {/* Second Content Block: Card Section Buttons (Navigation to other sections) */}
                <div
                    className={`${contentBaseClasses} ${changeSection ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                    aria-hidden={!changeSection} // Hide content from accessibility tree when not visible
                >
                    <CardSectionButtons />
                </div>
            </div>

            {/* Card Button: Allows manual toggling between the two content sections */}
            <CardButton setChangeSection={setChangeSection} changeSection={changeSection} />
        </div>
    );
}