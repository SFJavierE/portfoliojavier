import ArgentinaFlag from "../assets/imgs/argentina.png";

export const Name = () =>{
    const firstName = "Javier ";
    const secondName = " E. ";
    const firstSureName = "Sosa ";
    const secondSureName = "Fuch";

    const classNameBold = "text-6xl font-bold w-auto";

    return(
        <div className="w-max">
            <div className="tracking-wider font-bold h-auto border-b-4 rounded-sm border-indigo-100 border-s-8 border-e border-t p-2 outline-2 bg-indigo-950/25 shadow-lg shadow-indigo-950">
                <span className={classNameBold}>{`${firstName}${secondName}${firstSureName}${secondSureName}`}</span>
                <div className="grid grid-cols-2 grid-rows-1 place-self-start gap-x-2 px-1">
                    <h4 className="text-sm">De Argentina</h4>
                    <img src={ArgentinaFlag} className="h-4 w-4" />
                </div>
            </div>
        </div>
    )
}