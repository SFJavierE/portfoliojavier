import { Technologies } from '../../utils/lists/Lists'; // Imports a list of technology SVG components
import { ChildrenSVG, Language } from "../../utils/interfaces/Interfaces"; // Interface for the structure of technology children (SVGs)
import Translate from "../../utils/translates/skills/translate.json"; // Imports translation data for skills
import { type ReactElement } from 'react'; // Imports ReactElement type for explicit typing
import { useSelector } from 'react-redux'

/**
 * A functional component that displays the developer's skills.
 * It presents a list of soft skills (or general proficiencies) on one side
 * and a grid of technology icons on the other.
 *
 * @returns {ReactElement} A React div element representing the entire Skills section.
 */
export default function Skills(): ReactElement {
    const L : Language = useSelector((state : any) => state.language.value)
    // Array of soft skills, fetched from the translation JSON.
    // Each string represents a distinct skill or proficiency.
    const skills: string[] = [
        Translate[L].FIRST,
        Translate[L].SECOND,
        Translate[L].THIRD,
        Translate[L].FOURTH,
        Translate[L].FIFTH,
        Translate[L].SIX,
    ];

    return (
        <div className='w-full flex'>
            {/* Left Column: Displays the list of soft skills. */}
            <div className='flex flex-col mr-4 w-2/6'>
                {
                    skills.map((skill: string, index: number) =>
                        // Each skill is rendered within a div, preceded by an emoji.
                        // Using 'index' as a key is acceptable here since the list is static and not reordered.
                        <div key={index} className='flex text-center'>
                            <p className='text-xl text-gray-200 font-bold mb-12'>
                                {"✅ "} {/* Hardcoded checkmark emoji for visual emphasis */}
                                {skill} {/* The skill text from the translation file */}
                            </p>
                        </div>
                    )
                }
            </div>

            {/* Right Column: Displays a grid of technology icons. */}
            <div className='grid grid-cols-4 gap-12 w-full'>
                {
                    Technologies.map((tech: ChildrenSVG) =>
                        // Each technology icon is rendered within a div.
                        // 'tech.key' is used as the unique identifier for each item.
                        <div key={tech.key} className='flex flex-col items-end text-center text-gray-200 font-bold h-24 w-24 '>
                            {tech} {/* The SVG component representing the technology */}
                            <p className='mt-2'>{tech.key}</p> {/* Displays the technology's name (key) */}
                        </div>
                    )
                }
            </div>
        </div>
    );
}