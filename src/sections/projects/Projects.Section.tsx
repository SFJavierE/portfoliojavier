import { Projects as Ps } from '../../utils/lists/Lists'; // Imports the list of project data, aliased as 'Ps'
import Card from '../../components/card/Card'; // Imports the generic Card component
import TitleSection from '../../components/titleSection/TitleSection'; // Imports the TitleSection component
import Translate from '../../utils/translates/projects/translate.json'; // Imports translation data for the projects section
import { type ReactElement } from 'react'; // Imports ReactElement type for explicit typing
import { Language } from '../../utils/interfaces/Interfaces';
import { useSelector } from 'react-redux'

/**
 * A functional component that displays the Projects section of a portfolio or profile.
 * It includes a main title and dynamically renders a list of projects
 * using the generic Card component.
 *
 * All textual content for this section, such as the title, is fetched from the
 * 'projects/translate.json' file.
 *
 * @returns {ReactElement} A React div element representing the entire Projects section.
 */
export default function Projects(): ReactElement {
    const L : Language = useSelector((state : any) => state.language.value)

    return (
        <div className="w-full">
            {/* Renders the main title for the Projects section.
                The title text is retrieved from the translation file (e.g., "Proyectos"). */}
            <TitleSection name={Translate[L].TITLE} />

            {/* Renders the Card component, passing the 'Ps' (Projects) list as its info prop.
                This Card component is responsible for displaying each individual project entry
                in a structured and consistent format. */}
            <Card info={Ps(L)} />
        </div>
    );
}