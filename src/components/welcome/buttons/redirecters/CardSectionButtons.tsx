import TRANSLATE from "../../../../utils/translates/welcome/translate.json"

export default function CardSectionButtons(){
    const buttonClass : string = "hover:shadow-md hover:shadow-indigo-400 mt-6 hover:from-indigo-800 hover:to-indigo-200/75 w-full py-3 pl-4 text-start text-2xl rounded-md bg-gradient-to-r from-indigo-950/75 to-indigo-600/25";

    return(
        <div className="w-full h-full">
            <div className="flex flex-col w-full">
                <button className={buttonClass + " mt-0"}>
                    {`${TRANSLATE.ES.BUTTONS.SKILLS} ${TRANSLATE.EMOJIS.SKILLS}`}
                </button>
                <button className={buttonClass}>
                    {`${TRANSLATE.ES.BUTTONS.EXPERIENCIE} ${TRANSLATE.EMOJIS.EXPERIENCIES}`}
                </button>
                <button className={buttonClass}>
                    {`${TRANSLATE.ES.BUTTONS.EDUCATION} ${TRANSLATE.EMOJIS.EDUCATION}`}
                </button>
                <button className={buttonClass}>
                    {`${TRANSLATE.ES.BUTTONS.PROJECTS} ${TRANSLATE.EMOJIS.PROJECTS}`}
                </button>
                <button className={buttonClass}>
                    {`${TRANSLATE.ES.BUTTONS.ABOUTME} ${TRANSLATE.EMOJIS.ABOUTME}`}
                </button>
            </div>
        </div>
    )
}