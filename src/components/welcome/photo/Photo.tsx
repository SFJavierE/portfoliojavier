import { memo, type ReactElement } from 'react'; // Import memo and type ReactElement for clarity
import Me from '../../../assets/imgs/yo.png'; // Import the main profile photo
import Technologies from '../technologies/Technologies'; // Import the Technologies component

/**
 * A memoized functional component that displays the profile photo
 * with a transparent overlay for the Technologies component at the bottom.
 *
 * This component uses `memo` for performance optimization, as it doesn't
 * receive any props and its content is static, preventing unnecessary re-renders.
 *
 * @returns {ReactElement} A React div element containing the profile photo and a technologies overlay.
 */
const Photo = memo((): ReactElement => (
    <div className="w-full relative shadow-2xl shadow-indigo-950/70">
        {/* Main profile image */}
        <img
            src={Me} // Source of the profile photo
            className='rounded-md opacity-80 hover:opacity-95 transition-opacity
                       border-4 border-indigo-900/30 hover:border-indigo-700/50
                       object-cover p-1 transition-all duration-300
                       bg-indigo-950/75' // Tailwind CSS classes for styling, hover effects, and transitions
            alt="Javier Sosa Fuch - Frontend Developer" // Accessible alt text for the image
            loading="lazy" // Optimize image loading: defer loading until it's near the viewport
            decoding="async" // Hint to the browser to decode the image asynchronously
        />
        {/* Absolute positioned div for the Technologies component, creating an overlay effect */}
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm">
            <Technologies /> {/* Renders the Technologies component */}
        </div>
    </div>
));

// Assign a display name for better debugging in React DevTools
Photo.displayName = 'Photo';

export default Photo;