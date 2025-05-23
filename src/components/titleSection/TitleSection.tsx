import { Title } from '../../utils/interfaces/Interfaces'; // Import the Title interface

/**
 * A functional component that renders a stylized section title.
 * It applies a gradient background and bold text.
 *
 * @param {object} { name } - The title text to be displayed.
 * @returns {React.ReactElement} A React div element representing the section title.
 */
export default function TitleSection({ name }: Title): React.ReactElement {
    return (
        <div className="from-indigo-800 to-indigo-200/75 w-full py-3 pl-4 text-start text-3xl rounded-md bg-gradient-to-r text-gray-200 font-bold">
            {name} {/* Displays the title text passed as a prop */}
        </div>
    );
}