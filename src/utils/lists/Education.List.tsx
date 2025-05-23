import { CardInfo } from "../interfaces/Interfaces";
import TRANSLATE from '../translates/educations/translate.json'

export const educationList : CardInfo = {
    data: [
    {
        place: TRANSLATE.ES.ACADEMY.CEM.NAME,
        dates:{
            firstDate: {
                month: 3,
                year: 2025
            },
            secondDate: 'Current'
        },
        description: [
            {
                skills: [],
                position: {
                    name: TRANSLATE.ES.ACADEMY.CEM.TITLE,
                    time: {
                        firstDate: {
                            month: 3,
                            year: 2025
                        },
                        secondDate: 'Current'
                    }
                },
                text: TRANSLATE.ES.ACADEMY.CEM.DESCRIPTION
                }
            ]
    },
    {
        place: TRANSLATE.ES.ACADEMY.HENRY.NAME,
        dates:{
            firstDate: {
                month: 6,
                year: 2020
            },
            secondDate: {
                month:10,
                year: 2020
            }
        },
        description: [
            {
                skills: ['React', 'GitHub', 'ReactNative', 'API', 'Scrum', 'Js', 'Express'],
                position: {
                    name: TRANSLATE.ES.ACADEMY.HENRY.TITLE,
                    time: {
                        firstDate: {
                            month: 6,
                            year: 2020
                        },
                        secondDate: {
                            month: 10,
                            year: 2020
                        }
                    }
                },
                text: TRANSLATE.ES.ACADEMY.HENRY.DESCRIPTION,
                points: [
                    TRANSLATE.ES.ACADEMY.HENRY.POINTS.FIRST,
                    TRANSLATE.ES.ACADEMY.HENRY.POINTS.SECOND,
                    TRANSLATE.ES.ACADEMY.HENRY.POINTS.THIRD,
                    TRANSLATE.ES.ACADEMY.HENRY.POINTS.FOURTH
                    ]
                }
            ]
        }
    ]
}