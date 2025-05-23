import { memo } from 'react';
import { CardInfo, Card as CardInterface } from "../../utils/interfaces/Interfaces"; // Import CardInfo and alias Card as CardInterface to avoid name collision
import Description from "./description/Description"; // Assuming Description is the default export from Description.tsx (which was DescriptionItem)
import Title from "./title/Title"; // Assuming Title is the default export from Title.tsx

/**
 * A memoized functional component that displays a collection of cards.
 * Each card represents an item like an experience, education, or project,
 * structured with a title section and one or more description sections.
 *
 * @param {object} { info } - An object containing an array of Card data.
 * @returns {React.ReactElement} A React div element acting as a container for all the cards.
 */
const Card = memo(({ info }: { info: CardInfo }): React.ReactElement => {
    return (
        <div className="w-full flex flex-col gap-3 md:gap-4">
            {/* Main container for the list of cards */}
            <div className="mt-6">
                {/* Map through the 'data' array from 'info' to render each individual card */}
                {info.data.map((data: CardInterface, index: number) => (
                    <article
                        // Unique key for each card based on its place and index for React's reconciliation
                        key={`${data.place}-${index}`}
                        className="w-full text-zinc-100 rounded-lg
                                   border-b md:border-none border-indigo-100/25
                                   mb-6"
                    >
                        {/* Grid layout for title and description sections within each card */}
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4">
                            {/* Title Section (e.g., Company Name, Institution) */}
                            <div className="md:col-span-1 md:pr-2">
                                {/* Pass the individual card data as 'title' prop to the Title component */}
                                <Title title={data} />
                            </div>

                            {/* Description Section (e.g., Job Responsibilities, Course Details) */}
                            <div className="md:col-span-5 space-y-3 md:space-y-4">
                                {/* Map through the 'description' array within each card data */}
                                {data.description.map((description, descIndex) => (
                                    <Description
                                        // Unique key for each description item
                                        key={`desc-${descIndex}-${data.place}`}
                                        description={description}
                                    />
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
});

// Assign a display name for better debugging in React DevTools
Card.displayName = 'Card';

export default Card;