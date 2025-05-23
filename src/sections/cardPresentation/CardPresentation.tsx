import Welcome from './welcome/Welcome.Section'; // Imports the Welcome section component
import { useState, useRef, useEffect, useCallback, type ReactElement } from 'react'; // Imports necessary React hooks and types

/**
 * A functional component that applies an interactive 3D tilt and translate effect
 * to its child content based on mouse movement. This creates a subtle parallax-like
 * visual depth effect on hover.
 *
 * @returns {ReactElement} A React div element acting as a container for the Welcome section
 * with the applied mouse-hover interactive styles.
 */
export default function CardPresentation(): ReactElement {
    // Configuration constants for the tilt and translate effect
    // These values determine the intensity of the 3D and movement effects.
    const maxTilt: number = 5; // Maximum inclination in degrees for X and Y axis (e.g., 5 degrees max rotation)
    const maxTranslate: number = 5; // Maximum translation in pixels for X and Y axis (e.g., 5px max shift)
    const transitionDuration: string = 'duration-100'; // Tailwind CSS class for the transition speed (e.g., 'duration-100' for 100ms)

    // A ref to attach to the main container div. This allows direct DOM access
    // to measure the component's position and attach event listeners.
    const componentRef = useRef<HTMLDivElement>(null);
    // State to store and dynamically apply the calculated CSS transform styles.
    // This state update triggers a re-render whenever the mouse moves, applying new styles.
    const [transformStyle, setTransformStyle] = useState({});

    /**
     * Callback function to handle the 'mousemove' event.
     * It calculates the desired 3D tilt (rotateX, rotateY) and 2D translation (translateX, translateY)
     * based on the mouse's position relative to the component's center.
     * `useCallback` memoizes this function, preventing unnecessary re-creations on every render.
     */
    const handleMouseMove = useCallback((event: MouseEvent) => {
        // Ensure the ref is attached to a DOM element before proceeding
        if (componentRef.current) {
            const componentRect = componentRef.current.getBoundingClientRect(); // Get component's size and position

            // Calculate the center coordinates of the component relative to the viewport
            const centerX = componentRect.left + componentRect.width / 2;
            const centerY = componentRect.top + componentRect.height / 2;

            // Calculate the mouse's position relative to the component's center
            const x = event.clientX - centerX;
            const y = event.clientY - centerY;

            // Normalize the relative position to a range of -1 to 1.
            // This makes the calculations independent of the component's actual size.
            const normalizeX = x / (componentRect.width / 2);
            const normalizeY = y / (componentRect.height / 2);

            // Calculate the inclination (tilt) angles.
            // `rotateX` is influenced by vertical mouse movement (y-axis),
            // and `rotateY` by horizontal mouse movement (x-axis).
            // The negative sign on `normalizeY` makes the tilt intuitive (mouse up -> top edge tilts forward).
            const tiltX = -normalizeY * maxTilt;
            const tiltY = normalizeX * maxTilt;

            // Calculate the translation (shift) values.
            // These values directly scale the normalized mouse position to move the component.
            const translateX = normalizeX * maxTranslate;
            const translateY = normalizeY * maxTranslate;

            // Update the component's style state with the new transform values.
            // `perspective(1000px)` is crucial for enabling the 3D rotation effect.
            setTransformStyle({
                transform: `
                    perspective(1000px)
                    rotateX(${tiltX}deg)
                    rotateY(${tiltY}deg)
                    translateX(${translateX}px)
                    translateY(${translateY}px)
                `,
            });
        }
    }, [maxTilt, maxTranslate]); // Dependencies: Re-create if `maxTilt` or `maxTranslate` change

    /**
     * Callback function to handle the 'mouseleave' event.
     * Resets the component's transform styles to their initial state (no tilt, no translate)
     * when the mouse cursor leaves the component area.
     * `useCallback` memoizes this function.
     */
    const handleMouseLeave = useCallback(() => {
        // Reset transform styles to flat and centered
        setTransformStyle({
            transform: `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateX(0px)
                translateY(0px)
            `,
        });
    }, []); // No dependencies, as the reset values are constant

    /**
     * `useEffect` hook to manage the lifecycle of event listeners.
     * It runs once after the initial render to attach 'mousemove' and 'mouseleave' listeners
     * to the `componentRef` element.
     * A cleanup function is returned to remove these listeners when the component unmounts,
     * preventing memory leaks.
     */
    useEffect(() => {
        const componentElement = componentRef.current; // Get the DOM element from the ref
        if (!componentElement) return; // Exit if the ref is not yet attached (e.g., during initial render)

        // Add event listeners to the component
        componentElement.addEventListener('mousemove', handleMouseMove);
        componentElement.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function: This runs when the component unmounts or when the effect re-runs
        // (due to changes in `handleMouseMove` or `handleMouseLeave`, though they are memoized).
        return () => {
            componentElement.removeEventListener('mousemove', handleMouseMove);
            componentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]); // Dependencies: Re-run effect if `handleMouseMove` or `handleMouseLeave` change

    return (
        <div
            ref={componentRef} // Attach the ref to this div so we can track mouse events on it
            className="font-mono text-zinc-100 min-h-screen w-full overflow-x-hidden flex justify-center h-full items-center relative"
        >
            <div
                style={transformStyle} // Apply the dynamically calculated transform styles here
                className={`relative ${transitionDuration} ease-out-quad will-change-transform`}
                // `relative`: For positioning child elements if needed
                // `${transitionDuration} ease-out-quad`: Tailwind classes for smooth transition back to reset state
                // `will-change-transform`: A CSS performance hint to the browser that this property will be animated
            >
                <Welcome /> {/* Renders the Welcome component as the content receiving the interactive effect */}
            </div>
        </div>
    );
}