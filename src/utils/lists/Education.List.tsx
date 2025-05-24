import { CardInfo, Language } from "../interfaces/Interfaces";
import TRANSLATE from '../translates/educations/translate.json'

const EducationList = (L : Language) : CardInfo => {
    const educationList : CardInfo = {
        data: [
        {
            place: TRANSLATE[L].ACADEMY.CEM.NAME,
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
                        name: TRANSLATE[L].ACADEMY.CEM.TITLE,
                        time: {
                            firstDate: {
                                month: 3,
                                year: 2025
                            },
                            secondDate: 'Current'
                        }
                    },
                    text: TRANSLATE[L].ACADEMY.CEM.DESCRIPTION
                    }
                ]
        },
        {
            place: TRANSLATE[L].ACADEMY.HENRY.NAME,
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
                        name: TRANSLATE[L].ACADEMY.HENRY.TITLE,
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
                    text: TRANSLATE[L].ACADEMY.HENRY.DESCRIPTION,
                    points: [
                        TRANSLATE[L].ACADEMY.HENRY.POINTS.FIRST,
                        TRANSLATE[L].ACADEMY.HENRY.POINTS.SECOND,
                        TRANSLATE[L].ACADEMY.HENRY.POINTS.THIRD,
                        TRANSLATE[L].ACADEMY.HENRY.POINTS.FOURTH
                        ]
                    }
                ]
            }
        ]
    }

    return educationList;
}

export default EducationList;