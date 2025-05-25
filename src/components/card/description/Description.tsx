import { memo, useMemo, ReactElement } from 'react';
import TimesES from "../../../utils/translates/times/times.json"; // Assuming this JSON contains Spanish month names and "CURRENT" text
import { CardDescription, DatesDisplay } from "../../../utils/interfaces/Interfaces";
import Skill from "../skills/Skill";

/**
 * Renders a formatted date string.
 * It displays "Current" if isCurrent is true, otherwise formats the given date.
 * @param {DatesDisplay} { date, isCurrent } - The date object and a flag indicating if it's the current date.
 */
const DateDisplay = ({
    date,
    isCurrent = false
}: DatesDisplay): ReactElement => {
    // Memoize the formatted date string to prevent re-calculation on every render
    const formattedDate = useMemo(() => {
        if (isCurrent) {
            return TimesES.CURRENT; // Assuming TimesES.CURRENT exists and is "Current" or equivalent
        }
        // Assuming TimesES.MONTH is an array/object where `date.month` (1-12) can be used as an index/key
        return `${TimesES.MONTH[date.month]} ${date.year}`;
    }, [date.month, date.year, isCurrent]); // Dependencies specify exactly what triggers re-memoization

    return (
        <span className="text-xs md:text-sm whitespace-nowrap">
            {formattedDate}
        </span>
    );
};

/**
 * Renders a description item for a card, including position, text, points, and skills.
 * This component is memoized to optimize re-renders.
 * @param {object} { description } - The CardDescription object containing all details.
 */
const DescriptionItem = memo(({ description }: { description: CardDescription }): ReactElement => {
    // Extract position time for easier access
    const positionTime = description.position?.time;

    /**
     * Memoized component to display the position's date range.
     * Renders "FirstDate - SecondDate" or "FirstDate - Current".
     */
    const positionDates = useMemo(() => {
        if (!positionTime) {
            return null; // Return null if no position time is available
        }

        const secondDateComponent = positionTime.secondDate !== 'Current' ? (
            // If secondDate is a specific date, render it using DateDisplay
            <DateDisplay date={positionTime.secondDate} />
        ) : (
            // If secondDate is 'Current', render "Current" using DateDisplay with isCurrent flag
            <DateDisplay date={positionTime.firstDate} isCurrent={true} />
        );

        return (
            <div className="flex flex-wrap gap-x-2">
                <DateDisplay date={positionTime.firstDate} />
                {secondDateComponent}
            </div>
        );
    }, [positionTime]); // Re-memoize only when positionTime changes

    /**
     * Memoized component to render the position title and its dates.
     */
    const positionContent = useMemo(() => {
        if (!description.position) {
            return null; // Return null if no position data
        }

        return (
            <>
                <div className="flex lg:flex-col md:flex-row justify-between gap-1 md:gap-4 mt-6">
                    <h3 className="font-medium text-sm -mt-1 lg:mt-0 lg:text-base">
                        {description.position.name}
                    </h3>
                    {positionDates} {/* Render the memoized position dates */}
                </div>
                <hr className="border border-zinc-100/40 my-2" />
            </>
        );
    }, [description.position, positionDates]); // Re-memoize when position or its dates change

    return (
        <article className="lg:pl-6">
            {positionContent} {/* Render the memoized position content */}

            <p className="text-sm leading-relaxed hyphens-auto lg:mb-4">
                {description.text}
            </p>

            {/* Conditionally render bullet points if they exist */}
            {description.points && (
                <ul className="mt-2 space-y-1 text-xs md:text-sm list-none">
                    {description.points.map((point, index) => (
                        <li key={`point-${index}`} className="flex items-start">
                            {/* Aria-hidden to prevent screen readers from reading the bullet symbol */}
                            <span aria-hidden="true" className="mr-2">•</span>
                            <span className="flex-1">{point}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Conditionally render skills if they exist */}
            {description.skills && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {description.skills.map((skill, index) => (
                        // Key includes skill name and index for uniqueness
                        <Skill key={`skill-${skill}-${index}`} skill={skill} />
                    ))}
                </div>
            )}
        </article>
    );
});

// Assign a display name for better debugging in React DevTools
DescriptionItem.displayName = 'DescriptionItem';
export default DescriptionItem;