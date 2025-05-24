import { Educations } from '../../utils/lists/Lists'; // Imports the list of education data
import Card from '../../components/card/Card'; // Imports the generic Card component
import TitleSection from '../../components/titleSection/TitleSection'; // Imports the TitleSection component
import Translate from '../../utils/translates/educations/translate.json'; // Imports translation data for the education section
import { type ReactElement } from 'react'; // Imports ReactElement type for explicit typing
import { Language } from '../../utils/interfaces/Interfaces';
import { useSelector } from 'react-redux'
/**
 * A functional component that displays the Education section of a portfolio or profile.
 * It includes a main title, a dedicated section for self-taught experience,
 * and a dynamically rendered list of formal education entries using the Card component.
 *
 * All textual content for this section is fetched from the 'educations/translate.json' file.
 *
 * @returns {ReactElement} A React div element representing the entire Education section.
 */
export default function Education(): ReactElement {
    const L : Language = useSelector((state : any) => state.language.value)

    return (
        <div className="w-full">
            {/* Renders the main title for the Education section.
                The title text "Educación" is retrieved from the translation file. */}
            <TitleSection name={Translate[L].TITLE} />

            {/* Container for the self-taught learning description. */}
            <div className='text-gray-200 mt-4 mb-1'>
                {/* Title for the self-taught section, styled to be prominent. */}
                <p className='font-bold text-xl underline text-indigo-200'>
                    {Translate[L].SELFTAUGHT.TITLE}
                </p>
                {/* First paragraph describing the self-taught journey. */}
                <p className='text-md mt-2 pl-6'>
                    {Translate[L].SELFTAUGHT.FIRST}
                </p>
                <br /> {/* Line break for visual separation. */}
                {/* Second paragraph providing more details on self-taught efforts. */}
                <p className='text-md pl-6'>
                    {Translate[L].SELFTAUGHT.SECOND}
                </p>
            </div>

            {/* Renders the Card component, passing the 'Educations' list as its info prop.
                This Card component is responsible for displaying each individual educational entry
                (e.g., university degrees, certifications) in a structured format. */}
            <Card info={Educations(L)} />
        </div>
    );
}