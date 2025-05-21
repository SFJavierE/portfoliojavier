import TranslateES from "../../../utils/translates/welcome/welcome.es.json"
import Technologies from "../../technologies/Technologies";
import { Link } from 'react-router-dom'

export default function ButtonsRedirecters(){
    const buttonClass : string = "hover:shadow-md hover:shadow-indigo-400 mt-6 hover:from-indigo-800 hover:to-indigo-200/75 w-full py-3 pl-4 text-start text-2xl rounded-md bg-gradient-to-r from-indigo-950/75 to-indigo-600/25";

    return(
        <div className="w-full h-full">
            <div className="flex flex-col justify-between w-full">
                <button className="w-full">
                    <Technologies></Technologies>
                </button>
                <Link to="/experiencies" className={buttonClass}>
                    {`${TranslateES.BUTTONS.EXPERIENCIE} ${TranslateES.EMOJIS.EXPERIENCIES}`}
                </Link>
                <Link to="/educations" className={buttonClass}>
                    {`${TranslateES.BUTTONS.EDUCATION} ${TranslateES.EMOJIS.EDUCATION}`}
                </Link>
                <Link to="/projects" className={buttonClass}>
                    {`${TranslateES.BUTTONS.PROJECTS} ${TranslateES.EMOJIS.PROJECTS}`}
                </Link>
                <Link to="/aboutme" className={buttonClass}>
                    {`${TranslateES.BUTTONS.ABOUTME} ${TranslateES.EMOJIS.ABOUTME}`}
                </Link>
            </div>
        </div>
    )
}