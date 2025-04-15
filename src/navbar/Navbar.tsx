import { useState } from 'react';
import { MoonWithStarsIcon, SunIcon } from "../utils/icons/Icons";

interface Language{
    language : 'ES' | 'EN'
}

interface Mode{
    mode: 'Dark' | 'Light'
}

export default function Navbar(){
    const [languageActive, setLanguage] = useState<Language>({language: 'ES'});
    const [modeActive, setMode] = useState<Mode>({mode: 'Dark'});
    
    const navBarList : string[] = ["Inicio", "Sobre Mi", "Experiencia", "Estudios", "Proyectos"];
    const classNameNavBar : string = "shadow-md shadow-indigo-950 bg-black/25 rounded-sm top-8 left-1/2 -translate-x-1/2 border border-zinc-100/25 fixed transform z-50 w-3/5 h-14 flex justify-around";
    const classNameLanguageAndLigth : string = "text-zinc-100 h-10 w-10 p-1 rounded-full";
    
    const ChangeLanguage = (language : Language) =>{
        setLanguage(language);
    }
    
    const ChangeMode = (mode : Mode) =>{
        setMode(mode);
    }

    return(
        <div className={classNameNavBar}>
            <ul className="flex justify-around w-full">
                {navBarList.map((itemName : string)=>{
                    return(
                        <li className='w-full text-center hover:shadow-inner hover:shadow-indigo-800 h-full pt-2'>
                            <button className="text-gray-200/75 h-auto w-auto rounded p-2 font-bold">
                                {itemName}
                            </button>
                        </li>
                    )
                })}
            </ul>
            {false && <ul className="flex justify-end w-1/5 ml-20">
                <li className="text-zinc-100 flex justify-center text-xl mt-2 mr-2">
                    {
                        languageActive.language == 'ES' &&
                        <button
                        onClick={()=> ChangeLanguage({language: 'EN'})}
                        className={classNameLanguageAndLigth}
                        >
                            ES
                        </button>
                    }
                    {
                        languageActive.language == 'EN' &&
                        <button
                        onClick={()=> ChangeLanguage({language: 'ES'})}
                        className={classNameLanguageAndLigth}
                        >
                            EN
                        </button>
                    }
                </li>
                <li className="text-zinc-100 flex justify-center">
                    {
                        modeActive.mode == 'Dark' &&
                        <button
                        onClick={() => ChangeMode({mode: 'Light'})}
                    >
                        <MoonWithStarsIcon className={classNameLanguageAndLigth}/>
                    </button>
                    }
                    {
                        modeActive.mode == 'Light' &&
                        <button
                            onClick={() => ChangeMode({mode: 'Dark'})}
                        >
                            <SunIcon className={classNameLanguageAndLigth}/>
                        </button>
                    }
                </li>
            </ul>}
        </div>
    )
}