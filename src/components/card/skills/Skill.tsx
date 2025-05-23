import { memo, type ReactElement } from 'react'; // Import memo and type ReactElement for clarity
import { SkillType } from '../../../utils/interfaces/Interfaces'; // Import the SkillType interface

/**
 * A memoized functional component that displays a single skill tag.
 * It renders a styled span with the skill name and includes a title attribute for accessibility.
 *
 * @param {object} { skill } - The skill string to be displayed.
 * @returns {ReactElement} A React span element representing the skill tag.
 */
const Skill = memo(({ skill }: { skill: SkillType }): ReactElement => (
    <span
        // Apply Tailwind CSS classes for styling the skill tag
        className="text-zinc-100 text-xs md:text-sm p-1 md:p-2 rounded
                   mr-1 md:mr-2 shadow-sm md:shadow-inner shadow-indigo-900/50
                   font-semibold md:font-bold bg-indigo-900/20 hover:bg-indigo-900/30
                   transition-all duration-200 whitespace-nowrap cursor-pointer"
        // Add a title attribute for hover text and accessibility
        title={skill}
    >
        {skill} {/* Display the skill name */}
    </span>
));

// Assign a display name for easier debugging in React DevTools
Skill.displayName = 'Skill';

export default Skill;