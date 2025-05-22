import TranslateES from "../../../utils/translates/welcome/welcome.es.json"

export default function ButtonsRedirecters(){
    const buttonClass : string = "hover:shadow-md hover:shadow-indigo-400 mt-6 hover:from-indigo-800 hover:to-indigo-200/75 w-full py-3 pl-4 text-start text-2xl rounded-md bg-gradient-to-r from-indigo-950/75 to-indigo-600/25";

    return(
        <div className="w-full h-full">
            <div className="flex flex-col w-full">
                <button className={buttonClass + " mt-0"}>
                    {`${TranslateES.BUTTONS.SKILLS} ${TranslateES.EMOJIS.SKILLS}`}
                </button>
                <button className={buttonClass}>
                    {`${TranslateES.BUTTONS.EXPERIENCIE} ${TranslateES.EMOJIS.EXPERIENCIES}`}
                </button>
                <button className={buttonClass}>
                    {`${TranslateES.BUTTONS.EDUCATION} ${TranslateES.EMOJIS.EDUCATION}`}
                </button>
                <button className={buttonClass}>
                    {`${TranslateES.BUTTONS.PROJECTS} ${TranslateES.EMOJIS.PROJECTS}`}
                </button>
                <button className={buttonClass}>
                    {`${TranslateES.BUTTONS.ABOUTME} ${TranslateES.EMOJIS.ABOUTME}`}
                </button>
            </div>
        </div>
    )
}