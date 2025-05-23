import { CardInfo } from "../interfaces/Interfaces";
import TRANSLATE from '../translates/projects/translate.json'

export const projectList : CardInfo = {
    data: [
        {
            place: TRANSLATE.ES.MAGE.NAME,
            type: 'Game',
            description: [
                {
                    skills: ['Unity', 'C#'],
                    text: TRANSLATE.ES.MAGE.DESCRIPTION
                }
            ]
        },
        {
            place: TRANSLATE.ES.SLIME.NAME,
            type: 'Game',
            description: [
                {
                    skills: ['Unity', 'C#'],
                    text: TRANSLATE.ES.SLIME.DESCRIPTION,
                }
            ]
        },
        {
            place: TRANSLATE.ES.ARAM.NAME,
            type: 'Game',
            description: [
                {
                    skills: ['Unity', 'C#'],
                    text: TRANSLATE.ES.ARAM.DESCRIPTION,
                }
            ]
        },
        {
            place: TRANSLATE.ES.ZOMBIE.NAME,
            type: 'Game',
            description: [
                {
                    skills: ['Unity', 'C#'],
                    text: TRANSLATE.ES.ZOMBIE.DESCRIPTION
                }
            ]
        },
        {
            place: TRANSLATE.ES.DOGS.NAME,
            type: 'Develop',
            description: [
                {
                    skills: ['React', 'Tailwind', 'NodeJS', 'ExpressJs', 'Redis'],
                    text: TRANSLATE.ES.DOGS.DESCRIPTION,
                    points: [
                        TRANSLATE.ES.DOGS.POINTS.FIRST,
                        TRANSLATE.ES.DOGS.POINTS.SECOND,
                        TRANSLATE.ES.DOGS.POINTS.THIRD,
                        TRANSLATE.ES.DOGS.POINTS.FOURTH
                    ]
                }
            ]
        },
        {
            place: TRANSLATE.ES.BANK.NAME,
            type: 'Develop',
            description: [
                {
                    skills: ['ReactNative', 'CSS', 'NodeJS', 'ExpressJs'],
                    text: TRANSLATE.ES.BANK.DESCRIPTION
                }
            ]
        },
        {
            place: TRANSLATE.ES.BACK90.NAME,
            type: 'Develop',
            description: [
                {
                    skills: ['React', 'CSS', 'NodeJS', 'ExpressJs'],
                    text: TRANSLATE.ES.BACK90.DESCRIPTION
                }
            ]
        }
    ]
}