import TranslateES from "./presentation.es.json";

export const ShortDescription = () => {
    return(
        <h3 className="rounded line-clamp-6 w-80 tracking-wide">
            <span className="text-xl text-indigo-500 font-semibold">{TranslateES.SKILLS}</span>
            <br />
            <span className="text-base w-72 h-auto">{TranslateES.DESCRIPTION}</span>
        </h3>
    )
}