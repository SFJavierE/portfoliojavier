import { memo, useMemo } from 'react';
import { Card, DateInfo, Month } from "../../../utils/interfaces/Interfaces"; // Import necessary interfaces
import TimesEs from "../../../utils/translates/times/times.json"; // Assuming this JSON contains Spanish month names and "CURRENT" text

/**
 * Formats a date object into a readable string (e.g., "Enero 2023").
 * @param {DateInfo} date - The date object containing month and year.
 * @returns {string} The formatted date string.
 */
const formatDate = (date: DateInfo): string =>
    // Access month name using the numeric month as an index/key in TimesEs.MONTH
    `${TimesEs.MONTH[date.month as Month]} ${date.year}`; // Cast to Month to ensure correct indexing if TimesEs.MONTH is an array

/**
 * A memoized functional component that displays the title and dates for a card.
 * This typically represents a place (e.g., company, institution) and its duration.
 *
 * @param {object} { title } - The Card object containing place, dates, and type.
 * @returns {React.ReactElement} A React div element displaying the card title and dates.
 */
const Title = memo(({ title }: { title: Card }): React.ReactElement => { // Use React.ReactElement for return type
    /**
     * Memoized function to render the start and end dates of the card.
     * It handles "Current" dates appropriately.
     */
    const renderDates = useMemo(() => {
        // If no dates are provided, return null
        if (!title.dates) return null;

        // Format the start date
        const startDate = formatDate(title.dates.firstDate);
        // Determine the end date string: "Current" or a formatted date
        const endDate = title.dates.secondDate === 'Current'
            ? TimesEs.CURRENT // Assuming TimesEs.CURRENT exists (e.g., "Actual")
            : formatDate(title.dates.secondDate);

        return (
            <div className="flex lg:flex-col md:flex-row lg:justify-between text-sm md:text-base lg:mt-1">
                <span aria-label="Start date">{startDate}</span>
                <span aria-label="End date" className="ml-2 md:mt-0">{endDate}</span>
            </div>
        );
    }, [title.dates]); // Re-memoize only when title.dates object changes

    return (
        <div className="lg:pr-2 w-full flex justify-between">
            <h3 className={`${title.type ? 'flex items-center' : ''} -mt-1 lg:mt-0 text-lg md:text-xl font-bold text-indigo-200`}>
                {title.place}
                {/* Conditionally render an emoji based on the card type */}
                {title.type && (
                    <p className='ml-2'>
                        {title.type === 'Game' ? "🎮" : "💻"}
                    </p>
                )}
            </h3>
            {renderDates} {/* Render the memoized date display */}
        </div>
    );
});

// Assign a display name for better debugging in React DevTools
Title.displayName = 'Title';
export default Title;