import { useEffect, useRef, memo, useCallback, useMemo, type ReactElement } from "react";
import ReactDOM from 'react-dom/client'; // Import ReactDOM.client for createRoot
import { Technologies as technologiesList } from "../../../utils/lists/Lists"; // Assuming this imports an array of React SVG components
import { ChildrenSVG } from "../../../utils/interfaces/Interfaces"; // Interface for SVG children

/**
 * A component that displays an infinitely scrolling horizontal list of technology icons.
 * It uses direct DOM manipulation and `requestAnimationFrame` for smooth animation.
 *
 * This component dynamically creates and manages React roots for each icon
 * outside of the main component's render cycle for performance.
 */
const Technologies = (): ReactElement => {
    // Refs to directly interact with DOM elements and manage animation state
    const containerRef = useRef<HTMLDivElement>(null); // Ref for the main container element
    const animationRef = useRef<number>(0); // Ref to store the requestAnimationFrame ID
    const rootRefs = useRef<ReactDOM.Root[]>([]); // Ref to store ReactDOM roots created manually
    const positionRef = useRef(0); // Ref to track the current horizontal scroll position
    const isPausedRef = useRef(false); // Ref to control animation pause state (not currently used in logic but available)

    /**
     * Memoized array of React elements (SVG icons wrapped in a div).
     * These elements will be rendered into the dynamically created DOM lists.
     * `useMemo` with an empty dependency array ensures this is created only once.
     */
    const elements = useMemo(() =>
        technologiesList.map((tech: ChildrenSVG, index: number) => (
            // Ensure each item has a unique key for list rendering (assuming tech already has a unique key or provide one)
            // Using a combination of tech.key and index for robustness.
            <div key={`${tech.key || `tech-${index}`}`} className="h-8 w-8">
                {tech} {/* The actual SVG component */}
            </div>
        )), []
    );

    /**
     * Callback to set up the DOM structure for the infinite scroll.
     * It creates two identical lists (original and cloned) and appends them to the container.
     * This function is memoized to avoid re-creation on every render.
     */
    const setupDOM = useCallback(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        container.innerHTML = ''; // Clear previous content to prevent duplicates on re-render

        // Create a wrapper div to hold the two scrolling lists
        const wrapper = document.createElement('div');
        wrapper.className = 'flex h-full'; // Flex container to arrange lists horizontally

        // Create the original list (ul)
        const originalList = document.createElement('ul');
        originalList.className = 'flex space-x-6 h-full items-center absolute top-0 left-0';

        // Create a cloned list (ul) for the infinite scroll effect
        const clonedList = document.createElement('ul');
        clonedList.className = 'flex space-x-8 h-full items-center absolute top-0 left-6'; // Slightly different margin for seamless transition

        // Iterate over the memoized React elements and render them into both lists
        elements.forEach((tech) => {
            // Create list item (li) for the original list
            const li = document.createElement('li');
            li.className = 'flex-shrink-0 transition-transform duration-300';
            // Create a new React root for each list item to render the SVG component
            const root = ReactDOM.createRoot(li);
            root.render(tech); // Render the React element into the li
            rootRefs.current.push(root); // Store the root for later unmounting
            originalList.appendChild(li);

            // Create list item (li) for the cloned list
            const liClone = document.createElement('li');
            liClone.className = 'flex-shrink-0 transition-transform duration-300';
            // Create a new React root for the cloned list item
            const rootClone = ReactDOM.createRoot(liClone);
            rootClone.render(tech); // Render the React element into the cloned li
            rootRefs.current.push(rootClone); // Store the cloned root for later unmounting
            clonedList.appendChild(liClone);
        });

        // Append both lists to the wrapper, and wrapper to the main container
        wrapper.appendChild(originalList);
        wrapper.appendChild(clonedList);
        container.appendChild(wrapper);

        // Position the cloned list immediately after the original list
        clonedList.style.transform = `translateX(${originalList.offsetWidth}px)`;

        // Return the created lists for use in the animation loop
        return { originalList, clonedList };
    }, [elements]); // Re-create if 'elements' array changes (though it's memoized to not change)

    /**
     * Callback for the animation loop using `requestAnimationFrame`.
     * It continuously updates the `transform` property of the lists to create the scrolling effect.
     * This function is memoized to avoid re-creation on every render.
     */
    const animate = useCallback(() => {
        // Stop animation if paused or container ref is not available
        if (isPausedRef.current || !containerRef.current) return;

        // Get the two list elements
        const lists = containerRef.current.querySelectorAll('ul');
        const originalList = lists[0];
        const clonedList = lists[1];

        if (!originalList || !clonedList) return;

        const listWidth = originalList.offsetWidth; // Get the width of the original list

        positionRef.current -= 0.5; // Decrement position to move left (speed control)

        // If the original list has scrolled completely out of view, reset position
        // This creates the seamless looping effect
        if (positionRef.current <= -listWidth) {
            positionRef.current = 0;
        }

        // Apply translations to create the continuous scroll
        originalList.style.transform = `translateX(${positionRef.current}px)`;
        clonedList.style.transform = `translateX(${positionRef.current + listWidth}px)`;

        // Request the next animation frame
        animationRef.current = requestAnimationFrame(animate);
    }, []); // Dependencies are stable refs, so this callback is stable

    // useEffect hook to manage component lifecycle (setup and cleanup)
    useEffect(() => {
        // Setup the DOM elements for animation
        const { originalList, clonedList } = setupDOM() || {};

        // If DOM setup fails, return early
        if (!originalList || !clonedList) return;

        // Start the animation loop
        animate();

        // Cleanup function: runs when the component unmounts
        return () => {
            // Cancel any ongoing animation frame
            cancelAnimationFrame(animationRef.current);
            // Unmount all manually created React roots to prevent memory leaks
            rootRefs.current.forEach(root => root.unmount());
            rootRefs.current = []; // Clear the refs array
        };
    }, [setupDOM, animate]); // Dependencies ensure effect re-runs if setupDOM or animate change (though they are memoized)

    return (
        // Main container for the scrolling technologies banner
        <div className={`z-50 h-12 w-full rounded-ee-md rounded-ss-md bg-gradient-to-r from-indigo-950/75 to-indigo-600/25 relative overflow-hidden`}>
            {/* Inner div where the actual lists will be rendered by direct DOM manipulation */}
            <div
                ref={containerRef} // Attach ref to this div for DOM interaction
                className="w-full h-20 rounded-md" // Styling for the inner container
                aria-label="Technologies mastered" // Accessibility label for the content
            />
        </div>
    );
};

export default memo(Technologies);