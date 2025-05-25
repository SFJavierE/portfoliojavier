import { memo, type ReactElement } from 'react'; // Import memo and type ReactElement for clarity
import TRANSLATE from "../../../utils/translates/welcome/translate.json"; // Import translation data
import { Language } from '../../../utils/interfaces/Interfaces';
import { useSelector } from 'react-redux'
/**
 * A memoized functional component that displays a short introductory description.
 * It fetches the description text from a translation JSON file.
 *
 * This component is optimized with `memo` as it receives no props and
 * its content is static, preventing unnecessary re-renders.
 *
 * @returns {ReactElement} A React div element containing the short description text.
 */
const ShortDescription = memo((): ReactElement => {
    const L : Language = useSelector((state : any) => state.language.value)

    return (
        <div className="hidden lg:inline max-w-[90vw] md:max-w-[65ch] space-y-2 md:space-y-3">
            <p className="text-sm lg:text-md leading-relaxed text-indigo-100 line-clamp-3 md:line-clamp-none">
                {TRANSLATE[L].DESCRIPTION} {/* Displays the description text from the translation file */}
            </p>
        </div>
    );
});

// Assign a display name for better debugging in React DevTools
ShortDescription.displayName = 'ShortDescription';

export default ShortDescription;