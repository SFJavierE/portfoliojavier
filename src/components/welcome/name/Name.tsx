import { memo } from 'react';
import ArgentinaFlag from "../../../assets/imgs/argentina.png"; // Import the Argentina flag image
import TRANSLATE from '../../../utils/translates/welcome/translate.json'; // Import translation data
import { Language } from '../../../utils/interfaces/Interfaces';
import { useSelector } from 'react-redux'

/**
 * A memoized functional component that displays the name "Javier E. SosaFuch"
 * along with an "From Argentina" label and the Argentine flag.
 *
 * This component is optimized with `memo` as it does not receive any props
 * and its content is static, preventing unnecessary re-renders.
 *
 * @returns {React.ReactElement} A React div element containing the name and origin information.
 */
const Name = memo((): React.ReactElement => {
    const L : Language = useSelector((state : any) => state.language.value)

    return (
        <div className="w-full max-w-[90vw] mb-2 lg:mb-4">
            <div>
                <div className="flex flex-col">
                    {/* Display the full name with a hidden middle initial on small screens */}
                    <span className="flex flex-start text-3xl lg:text-5xl">
                        Javier
                        <span className="text-indigo-300">E.</span>
                        <span className="ml-1">SosaFuch</span>
                    </span>

                    {/* Container for the "From" text and Argentina flag */}
                    <div className="rounded-md w-2/4 lg:w-2/4 h-6 mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm relative px-2 py-4 bg-indigo-900/25">
                        <span>{TRANSLATE[L].FROM}</span> {/* Displays "From" in Spanish */}
                        <img
                            src={ArgentinaFlag} // Source of the Argentina flag image
                            className="h-4 w-4 sm:h-5 sm:w-5" // Styling for the flag image
                            alt="Argentina Flag" // Accessible alternative text for the image
                            loading="lazy" // Defer loading of the image until it's near the viewport
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

// Assign a display name for better debugging in React DevTools
Name.displayName = 'Name';

export default Name;