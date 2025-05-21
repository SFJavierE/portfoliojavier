import TranslateES from "../../utils/translates/welcome/welcome.es.json"

export default function Phrase(){
    return(
        <div className="mb-5">
            <span className="text-start text-lg md:text-lx lg:text-2xl text-indigo-500">
                <div className="flex justify-start">
                    <p className="mr-2">{TranslateES.TITLE.DEVELOPER}</p>
                    <p className="mr-2 text-gray-200 font-semibold decoration-solid underline">{`${TranslateES.TITLE.FRONTEND}`}</p>
                    <p>{TranslateES.EMOJIS.FRONTEND}</p>
                    <p>,</p>
                </div>
                <div className="flex justify-start">
                    <p className="mr-2">{`${TranslateES.TITLE.DEVELOPER}`}</p>
                    <p className="mr-2">de</p>
                    <p className="mr-2 text-gray-200 font-semibold decoration-solid underline">{`${TranslateES.TITLE.GAMES}`}</p>
                    <p>{TranslateES.EMOJIS.GAMES}</p>
                    <p>,</p>
                </div>
                <div className="flex justify-start">
                    <p className="mr-2">Un {TranslateES.TITLE.DEVELOPER}</p>
                    <p className="mr-2 text-gray-200 font-semibold decoration-solid underline">{`${TranslateES.TITLE.CREATIVE}`}</p>
                    <p>{TranslateES.EMOJIS.CREATIVE}</p>
                </div>
            </span>
        </div>
    )
}