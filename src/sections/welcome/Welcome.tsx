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
    <div className="overflow-hidden relative max-w-5xl h-[475px] flex flex-col md:flex-row w-full gap-6 p-8 rounded-xl bg-gradient-to-br from-indigo-900 via-gray-950 to-indigo-900 rounded-3xl shadow-2xl shadow-indigo-950/70 ring-2 ring-indigo-500/70 [box-shadow:inset_0_0_80px_rgba(165,180,252,0.1),inset_0_0_20px_rgba(165,180,252,0.2)] border border-indigo-700/50 backdrop-blur-sm p-8">
        <div className="w-full max-w-[400px] md:max-w-none mr-2 z-10 relative">
            <Photo/>
        </div>
        <div className="w-[1230px] relative relative overflow-hidden">
            <div
            className={`${contentBaseClasses} ${!changeSection ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
                <Name/>
                <Phrase/>
                <ShortDescription/>
                <ButtonsPresentation classContainer="flex justify-start mt-6"/>
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