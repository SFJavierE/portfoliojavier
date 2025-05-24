import { Experiencie } from '../../utils/lists/Lists'; // Imports the list of experience data
import Card from '../../components/card/Card'; // Imports the generic Card component
import TitleSection from '../../components/titleSection/TitleSection'; // Imports the TitleSection component
import Translate from '../../utils/translates/experiencies/translate.json'; // Imports translation data for the experiences section
import { type ReactElement } from 'react'; // Imports ReactElement type for explicit typing
import { Language } from '../../utils/interfaces/Interfaces';
import { useSelector } from 'react-redux'

/**
 * A functional component that displays the Experiences section of a portfolio or profile.
 * It includes a main title and dynamically renders a list of work or project experiences
 * using the generic Card component.
 *
 * All textual content for this section, such as the title, is fetched from the
 * 'experiencies/translate.json' file.
 *
 * @returns {ReactElement} A React div element representing the entire Experiences section.
 */
export default function Experiences(): ReactElement {
    const L : Language = useSelector((state : any) => state.language.value)

    return (
        <div className="w-full">
            {/* Renders the main title for the Experiences section.
                The title text is retrieved from the translation file (e.g., "Experiencias"). */}
            <TitleSection name={Translate[L].TITLE} />

            {/* Renders the Card component, passing the 'Experiencie' list as its info prop.
                This Card component is responsible for displaying each individual experience entry
                in a structured and consistent format. */}
            <Card info={Experiencie(L)} />
        </div>
    );
}