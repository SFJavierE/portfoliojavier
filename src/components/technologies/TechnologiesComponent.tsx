import { Technology } from '../../features/types/TechnologyType';
import { useEffect, useState } from 'react';
import { TechName } from './Interface';
import './index.css';

const TechnologyComponent : React.FC<TechName> = ({name}) : React.ReactElement => {
    const [isHoover, setIsHoover] = useState<boolean>(false);
    const [techImg, setTechImg] = useState<string>('');

    useEffect(() => {
        if(name){
            // Is to remove whitespace
            let img : string =  `icon icon--${name.replace(/\s+/g, '').toLowerCase()}`;
            if(name === 'C#'){
                img = 'icon icon--_c';
            }
            if(name === 'ReactNative'){
                img = 'icon icon--react'
            }
            setTechImg(img);
        }
    }, [name]);

    return (
        <div
        onMouseEnter={() => setIsHoover(true)}
        onMouseLeave={() => setIsHoover(false)}
        >
            <div className={`${techImg}`}/>
            { isHoover &&
                <div className='text-cold position-absolute py-1 text-center bg-cold-3 px-1 rounded-2' style={{height: 'auto', marginTop: '10px'}}>
                    {name}
                </div>
            }
        </div>
    )
}

const TechnologiesComponent = () : React.ReactElement => {
    const [technolgies, setTechnologies] = useState<Technology[]>([]);

    useEffect(() => {
        // This is to maintain order and not a very long list of technologies.
        const tFrontend : Technology[] = ['Javascript', 'React', 'Typescript', 'Angular', 'ReactNative', 'HTML', 'Css', 'Sass', 'TailwindCss', 'Bootstrap'];
        const tBackend: Technology[] = ['NodeJs', 'ExpressJs', 'Ruby on Rails', 'C#', 'Postman'];
        const tDataBase: Technology[] = ['SQL', 'GraphQL', 'PostgresQl', 'Firebase'];
        const tOthers: Technology[] = ['Confluence', 'Figma', 'Jira', 'Trello', 'Unity'];
        const tAll : Technology[] = tFrontend.concat(tBackend).concat(tDataBase).concat(tOthers);
        setTechnologies(tAll);
    }, []);

    return(
        <div className='mb-5 border-cold-3-start-3 border-cold-3-end-3 px-2 mt-5'>
            <div className="my-2 d-flex justify-content-around align-items-center">
            {
                technolgies.map((name : Technology) => (
                    <div key={name}>
                        <TechnologyComponent name={name}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default TechnologiesComponent;