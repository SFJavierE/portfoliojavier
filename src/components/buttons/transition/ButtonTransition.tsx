import { ButtonTransitionProps } from '../../../utils/interfaces/Interfaces';

export default function ButtonTransition({ setChangeSection, changeSection } : ButtonTransitionProps ){
    const buttonClass : string = "hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out bg-gradient-to-r from-gray-200/0 to-gray-600/25 rounded-ee-lg rounded-se-lg text-gray-700 font-bold bg-gray-200 w-6 h-full absolute right-0 top-1/2 -translate-y-1/2 z-20";

    return(
        <button onClick={()=>setChangeSection(!changeSection)} className={buttonClass}>{">"}</button>
    )
}