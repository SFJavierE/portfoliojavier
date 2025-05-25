import { Language } from "../../../utils/interfaces/Interfaces";
import TRANSLATE from "../../../utils/translates/welcome/translate.json"; // Import translation data
import { useSelector } from 'react-redux'

/**
 * A functional component that displays a multi-line descriptive phrase about the developer.
 * The phrase includes text and emojis, leveraging translation data.
 *
 * @returns {React.ReactElement} A React div element containing the structured phrase.
 */
export default function Phrase(): React.ReactElement {
    const L : Language = useSelector((state : any) => state.language.value)

    // Define the structure of each line of the phrase for cleaner rendering
    const PHRASE_LINES = [
        {
            parts: [
                { text: TRANSLATE[L].TITLE.DEVELOPER, className: "mr-2" },
                { text: TRANSLATE[L].TITLE.FRONTEND, className: "mr-2 text-gray-200 font-semibold decoration-solid underline" },
                { text: TRANSLATE.EMOJIS.FRONTEND, className: "" },
                { text: ",", className: "" },
            ],
        },
        {
            parts: [
                { text: TRANSLATE[L].TITLE.DEVELOPER, className: "mr-2" },
                { text: "de", className: "mr-2" }, // "de" directly in the component, as it's a connector
                { text: TRANSLATE[L].TITLE.GAMES, className: "mr-2 text-gray-200 font-semibold decoration-solid underline" },
                { text: TRANSLATE.EMOJIS.GAMES, className: "" },
                { text: ",", className: "" },
            ],
        },
        {
            parts: [
                { text: `Un ${TRANSLATE[L].TITLE.DEVELOPER}`, className: "mr-2" }, // "Un" directly in the component
                { text: TRANSLATE[L].TITLE.CREATIVE, className: "mr-2 text-gray-200 font-semibold decoration-solid underline" },
                { text: TRANSLATE.EMOJIS.CREATIVE, className: "" },
            ],
        },
    ];

    return (
        <div className="mb-2">
            <span className="text-start text-md md:text-lx lg:text-xl text-indigo-500">
                {PHRASE_LINES.map((line, lineIndex) => (
                    <div key={lineIndex} className="flex justify-start">
                        {line.parts.map((part, partIndex) => (
                            <p key={`${lineIndex}-${partIndex}`} className={part.className}>
                                {part.text}
                            </p>
                        ))}
                    </div>
                ))}
            </span>
        </div>
    );
}