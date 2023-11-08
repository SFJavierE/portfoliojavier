import { Technology } from '../../features/types/TypeTechnology';
import { useEffect, useState } from 'react';
import { TechnologyName, TooltipTechnology } from './Interface';
import './index.css';


const TooltipTechnology : React.FC<TooltipTechnology> = ({name, img}) => {
    const [isHoover, setIsHoover] = useState<boolean>(false);

    return (
        <div
        onMouseEnter={() => setIsHoover(true)}
        onMouseLeave={() => setIsHoover(false)}
        >
            <div className={`${img}`}></div>
            { isHoover &&
                <div className='text-cold position-absolute py-1 text-center bg-cold-3 px-1 rounded-2' style={{height: 'auto', bottom: '202px'}}>
                    {name}
                </div>
            }
        </div>
    )
}

const TechnologiesList: React.FC<TechnologyName> = ({name}) => {
    let img : string =  `icon icon--${name.replace(/\s+/g, '').toLowerCase()}`;
    if(name === 'C#'){
        img = 'icon icon--_c';
    }
    if(name === 'ReactNative'){
        img = 'icon icon--react'
    }

    return (
        <div>
            <TooltipTechnology name={name} img={img}/>
        </div>
    )
}

export default function Technologies () {
    const [technolgies, setTechnologies] = useState<Technology[]>([]);

    useEffect(() => {
        const tFrontend : Technology[] = ['Javascript', 'React', 'Typescript', 'Angular', 'HTML', 'Css', 'Sass', 'TailwindCss', 'Bootstrap', 'ReactNative'];
        const tBackend: Technology[] = ['NodeJs', 'ExpressJs', 'Ruby on Rails', 'C#', 'Postman'];
        const tDataBase: Technology[] = ['SQL', 'GraphQL', 'PostgresQl', 'Firebase'];
        const tOthers: Technology[] = ['Confluence', 'Figma', 'Jira', 'Trello', 'Unity'];
        const tAll : Technology[] = tFrontend.concat(tBackend).concat(tDataBase).concat(tOthers);
        setTechnologies(tAll);
    }, []);

    return(
        <div className='mb-5 border-start border-end border-3 px-2 mt-5 border-primary'>
            <div className="my-2 d-flex justify-content-around align-items-center">
            {
                technolgies.map((name : Technology) => (
                    <div key={name}>
                        <TechnologiesList name={name}/>
                    </div>
                ))
            }
        </div>
        </div>
    )
}