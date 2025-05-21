import Name from "../../components/name/Name";
import ButtonsPresentation from "../../components/buttons/presentation/ButtonsPresentation";
import ShortDescription from "../../components/description/presentation/ShortDescription";
import Photo from "../../components/photo/Photo";
import Phrase from "../../components/phrase/Phrase";
import ButtonsRedirecters from "../../components/buttons/redirecters/ButtonsRedirecters";
import ButtonTransition from "../../components/buttons/transition/ButtonTransition";
import { useState, useEffect } from 'react';

export default function Welcome() {
    const [changeSection, setChangeSection] = useState<boolean>(false);

    const contentBaseClasses = "absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out";

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setChangeSection(!changeSection)
        }, 15000)

        return () => {
            clearTimeout(timer);
        };
    }, [changeSection])

    return(
    <div className="overflow-hidden relative max-w-5xl h-[475px] flex flex-col md:flex-row w-full gap-6 p-8 bg-indigo-800/10 border-gray-200 border-t-2 border-b-4 border-l-2 border-r-4 rounded-lg">
        <div className="w-full max-w-[200px] md:max-w-none mr-4 z-10">
            <div>
                <Photo/>
                <ButtonsPresentation/>
            </div>
        </div>
        <div className="w-[1500px] relative relative overflow-hidden">
            <div
            className={`${contentBaseClasses} ${!changeSection ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
                <Name/>
                <Phrase/>
                <ShortDescription/>
            </div>
            <div
                className={`${contentBaseClasses} ${changeSection ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
                <ButtonsRedirecters/>
            </div>
        </div>
        <ButtonTransition setChangeSection={setChangeSection} changeSection={changeSection}/>
    </div>
    )
}