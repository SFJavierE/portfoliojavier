import Name from "../../../components/welcome/name/Name";
import CommunicationButtons from "../../../components/buttons/communication/CommunicationButtons";
import ShortDescription from "../../../components/welcome/presentation/ShortDescription";
import Photo from "../../../components/welcome/photo/Photo";
import Phrase from "../../../components/welcome/phrase/Phrase";
import CardSectionButtons from "../../../components/welcome/buttons/redirecters/CardSectionButtons";
import CardButton from "../../../components/welcome/buttons/card/CardButton";
import { useState, useEffect, type ReactElement } from 'react';

/**
 * The Welcome component serves as the main introductory section of the application.
 * It presents a responsive layout with a profile photo and personal information,
 * allowing for dynamic swapping between personal details and navigation buttons
 * within the text content area.
 *
 * @returns {ReactElement} A React div element representing the welcome section.
 */
export default function Welcome(): ReactElement {
    // State to control which content block is visible within the text area.
    // `false` typically shows personal info (Name, Phrase, Description, Communication Buttons),
    // `true` shows navigation buttons (`CardSectionButtons`).
    const [changeSection, setChangeSection] = useState<boolean>(false);

    // Common Tailwind CSS classes for content blocks that swap internally.
    // These blocks are absolutely positioned *within their parent container*
    // which handles the overall responsive layout.
    const contentSwapBaseClasses: string = "absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out";

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
        // Main card container:
        // - `flex flex-col`: Stacks items vertically by default (mobile first).
        // - `lg:flex-row`: Arranges items horizontally on large screens.
        // - `h-auto`: Auto height on mobile to accommodate stacked content.
        // - `lg:h-[475px]`: Fixed height on large screens.
        // - `p-4 lg:p-8`: Adjustable padding for mobile and desktop.
        <div className="
            overflow-hidden relative
            max-w-5xl
            flex flex-col lg:flex-row                  /* Flex direction: column by default, row on lg */
            w-full h-auto lg:h-[505px]                  /* Auto height on mobile, fixed height on lg */
            rounded-xl bg-gradient-to-br from-indigo-900 via-gray-950 to-indigo-900
            rounded-3xl shadow-2xl shadow-indigo-950/70
            ring-2 ring-indigo-500/70
            [box-shadow:inset_0_0_80px_rgba(165,180,252,0.1),inset_0_0_20px_rgba(165,180,252,0.2)]
            border border-indigo-700/50 backdrop-blur-sm
            p-4 lg:p-8                                 /* Adjustable padding */
        ">
            {/* Photo Section: This div will always be on top in mobile view and to the left on desktop. */}
            <div className="
                w-full max-w-[400px] lg:max-w-none      /* Full width on mobile, no max-width on lg */
                mx-auto lg:mr-2 lg:ml-0                  /* Centered on mobile, right margin on lg */
                z-10 relative
            ">
                <Photo />
            </div>

            {/* **NEW**: Container for all text-based content and swapping sections.
                This div is a direct flex child of the main container, meaning it will stack
                below the photo on small screens and next to it on large screens.
                It has `relative` positioning because its children are absolutely positioned. */}
            <div className="
                w-full lg:flex-grow                      /* Full width on mobile, grows to fill space on lg */
                relative                                 /* Crucial for absolute positioning of its children */
                mt-4 lg:mt-0                             /* Top margin on mobile for spacing from photo, none on lg */
                overflow-hidden                          /* Hides content that translates out of view */
                min-h-[300px] lg:min-h-0                 /* Ensure enough height for content on mobile when swapped */
                lg:ml-4
            ">
                {/* Personal Info Block: Name, Phrase, Short Description, Communication Buttons.
                    This block is visible when `changeSection` is false. */}
                <div
                    className={`
                        ${contentSwapBaseClasses}
                        ${!changeSection ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
                    `}
                    aria-hidden={changeSection} // Hide content from accessibility tree when not visible
                >
                    <Name />
                    <Phrase />
                    <ShortDescription />
                    <CommunicationButtons classContainer="mt-3 flex justify-start lg:mt-6" />
                </div>

                {/* Navigation Buttons Block: Card Section Buttons.
                    This block is visible when `changeSection` is true. */}
                <div
                    className={`
                        ${contentSwapBaseClasses}
                        ${changeSection ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
                    `}
                    aria-hidden={!changeSection} // Hide content from accessibility tree when not visible
                >
                    <CardSectionButtons />
                </div>
            </div>

            {/* Card Button: Allows manual toggling between the two content sections.
                It remains a direct child of the main container and its position
                will naturally adjust based on the overall flex layout. */}
            <CardButton setChangeSection={setChangeSection} changeSection={changeSection} />
        </div>
    );
}