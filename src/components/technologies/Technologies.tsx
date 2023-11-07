import { Technology } from '../../features/types/TypeTechnology';
import { useEffect, useState } from 'react';
import './index.css';

interface TechnologyName{
    name: Technology;
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
                <div className={`${img}`}></div>
            </div>
        )
    }

    return(
        <div className='mb-3 border-start border-end border-3 px-2 mt-5 border-primary'>
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