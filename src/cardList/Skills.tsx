import { Skills } from '../interfaces/Interfaces';
import { ReactElement } from 'react';

export const ListSkills = ({ skill }: { skill: Skills }) : ReactElement =>{
    return(
            <span className="text-zinc-100 p-2 rounded mr-2 shadow-inner shadow-indigo-900 font-bold text-md">{skill}</span>
    )
}