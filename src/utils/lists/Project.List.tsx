import { CardInfo, Language } from "../interfaces/Interfaces";
import TRANSLATE from '../translates/projects/translate.json'

const ProjectList = (L : Language) : CardInfo => {
    const projectList : CardInfo = {
        data: [
            {
                place: TRANSLATE[L].MAGE.NAME,
                type: 'Game',
                description: [
                    {
                        skills: ['Unity', 'C#'],
                        text: TRANSLATE[L].MAGE.DESCRIPTION
                    }
                ]
            },
            {
                place: TRANSLATE[L].SLIME.NAME,
                type: 'Game',
                description: [
                    {
                        skills: ['Unity', 'C#'],
                        text: TRANSLATE[L].SLIME.DESCRIPTION,
                    }
                ]
            },
            {
                place: TRANSLATE[L].ARAM.NAME,
                type: 'Game',
                description: [
                    {
                        skills: ['Unity', 'C#'],
                        text: TRANSLATE[L].ARAM.DESCRIPTION,
                    }
                ]
            },
            {
                place: TRANSLATE[L].ZOMBIE.NAME,
                type: 'Game',
                description: [
                    {
                        skills: ['Unity', 'C#'],
                        text: TRANSLATE[L].ZOMBIE.DESCRIPTION
                    }
                ]
            },
            {
                place: TRANSLATE[L].DOGS.NAME,
                type: 'Develop',
                description: [
                    {
                        skills: ['React', 'Tailwind', 'NodeJS', 'ExpressJs', 'Redis'],
                        text: TRANSLATE[L].DOGS.DESCRIPTION,
                        points: [
                            TRANSLATE[L].DOGS.POINTS.FIRST,
                            TRANSLATE[L].DOGS.POINTS.SECOND,
                            TRANSLATE[L].DOGS.POINTS.THIRD,
                            TRANSLATE[L].DOGS.POINTS.FOURTH
                        ]
                    }
                ]
            },
            {
                place: TRANSLATE[L].BANK.NAME,
                type: 'Develop',
                description: [
                    {
                        skills: ['ReactNative', 'CSS', 'NodeJS', 'ExpressJs'],
                        text: TRANSLATE[L].BANK.DESCRIPTION
                    }
                ]
            },
            {
                place: TRANSLATE[L].BACK90.NAME,
                type: 'Develop',
                description: [
                    {
                        skills: ['React', 'CSS', 'NodeJS', 'ExpressJs'],
                        text: TRANSLATE[L].BACK90.DESCRIPTION
                    }
                ]
            }
        ]
    }

    return projectList;
}

export default ProjectList