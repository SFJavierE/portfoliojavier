import TRANSLATE from "../../../utils/translates/welcome/translate.json"

export default function Phrase(){
    return(
        <div className="mb-2">
            <span className="text-start text-lg md:text-lx lg:text-xl text-indigo-500">
                <div className="flex justify-start">
                    <p className="mr-2">{TRANSLATE.ES.TITLE.DEVELOPER}</p>
                    <p className="mr-2 text-gray-200 font-semibold decoration-solid underline">{`${TRANSLATE.ES.TITLE.FRONTEND}`}</p>
                    <p>{TRANSLATE.EMOJIS.FRONTEND}</p>
                    <p>,</p>
                </div>
                <div className="flex justify-start">
                    <p className="mr-2">{`${TRANSLATE.ES.TITLE.DEVELOPER}`}</p>
                    <p className="mr-2">de</p>
                    <p className="mr-2 text-gray-200 font-semibold decoration-solid underline">{`${TRANSLATE.ES.TITLE.GAMES}`}</p>
                    <p>{TRANSLATE.EMOJIS.GAMES}</p>
                    <p>,</p>
                </div>
                <div className="flex justify-start">
                    <p className="mr-2">Un {TRANSLATE.ES.TITLE.DEVELOPER}</p>
                    <p className="mr-2 text-gray-200 font-semibold decoration-solid underline">{`${TRANSLATE.ES.TITLE.CREATIVE}`}</p>
                    <p>{TRANSLATE.EMOJIS.CREATIVE}</p>
                </div>
            </span>
        </div>
    )
}