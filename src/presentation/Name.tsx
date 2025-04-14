import ArgentinaFlag from "../assets/imgs/argentina.png";

export const Name = () => {
    const firstName = "Javier ";
    const secondName = " E. ";
    const firstSureName = "Sosa ";
    const secondSureName = "Fuch";

    return(
        <div className="w-full max-w-[90vw] mx-auto">
            <div className="tracking-wide font-bold border-b-2 sm:border-b-4 border-s-4 sm:border-s-8 border-indigo-100 rounded-sm p-1 sm:p-2 bg-indigo-950/25 shadow-lg shadow-indigo-950">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-baseline flex-wrap">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words">
                        {firstName}
                        <span className="hidden sm:inline">{secondName}</span>
                        {firstSureName}
                        {secondSureName}
                    </span>
                    <div className="flex items-center gap-1 text-xs sm:text-sm">
                        <span>De Argentina</span>
                        <img src={ArgentinaFlag} 
                             className="h-3 w-3 sm:h-4 sm:w-4" 
                             alt="Bandera Argentina" />
                    </div>
                </div>
            </div>
        </div>
    )
}