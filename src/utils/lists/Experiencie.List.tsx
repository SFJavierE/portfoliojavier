import { CardInfo } from '../interfaces/Interfaces';
import TRANSLATE from '../translates/experiencies/translate.json'

export const experiencieList :CardInfo = {
    data: [{
    place: TRANSLATE.ES.PLACE.TRICK.NAME,
    dates:{
        firstDate: {
            month: 12,
            year: 2023
        },
        secondDate: {
            month: 5,
            year: 2025
        }
    },
    description: [
        {
            skills: ['UnrealEngine', 'Verse', 'UEFN', 'UnrealEngineForFortnite'],
            position: {
                name: TRANSLATE.ES.PLACE.TRICK.POSITIONS.FORTNITE.TITLE,
                time: {
                    firstDate: {
                        month: 11,
                        year: 2024
                    },
                    secondDate: {
                        month: 5,
                        year: 2025
                    }
                }
            },
            text: TRANSLATE.ES.PLACE.TRICK.POSITIONS.FORTNITE.DESCRIPTION
        },
        {
            skills: ['Unity', 'C#', 'NetCode', 'GitHub'],
            position: {
                name: TRANSLATE.ES.PLACE.TRICK.POSITIONS.UNITY.TITLE,
                time: {
                    firstDate:{
                        month: 12,
                        year: 2023
                    },
                    secondDate: {
                        month: 11,
                        year: 2024
                    }
                }
            },
            text: TRANSLATE.ES.PLACE.TRICK.POSITIONS.UNITY.DESCRIPTION
        }
    ]
    },{
        place: TRANSLATE.ES.PLACE.WISBOO.NAME,
        dates:{
            firstDate: {
                month: 5,
                year: 2021
            },
            secondDate: {
                month: 7,
                year: 2023
            }
        },
        description: [
            {
                skills: ['AngularJS', 'Jira', 'GitHub', 'Figma', 'RubyOnRails', 'Js'],
                position: {
                    name: TRANSLATE.ES.PLACE.WISBOO.POSITIONS.LEADER.TITLE,
                    time:{
                        firstDate:{
                            month: 3,
                            year: 2022
                        },
                        secondDate:{
                            month:6,
                            year:2023
                        }
                    }
                },
                text: TRANSLATE.ES.PLACE.WISBOO.POSITIONS.LEADER.DESCRIPTION,
                points: [
                    TRANSLATE.ES.PLACE.WISBOO.POSITIONS.LEADER.POINTS.FIRST,
                    TRANSLATE.ES.PLACE.WISBOO.POSITIONS.LEADER.POINTS.SECOND,
                    TRANSLATE.ES.PLACE.WISBOO.POSITIONS.LEADER.POINTS.THIRD,
                    TRANSLATE.ES.PLACE.WISBOO.POSITIONS.LEADER.POINTS.FOURTH,
                    TRANSLATE.ES.PLACE.WISBOO.POSITIONS.LEADER.POINTS.FIFTH
                ]
            },
            {
                skills: ['AngularJS', 'GitHub', 'RubyOnRails', 'Js'],
                position: {
                    name: TRANSLATE.ES.PLACE.WISBOO.POSITIONS.FULL.TITLE,
                    time:{
                        firstDate:{
                            month: 5,
                            year: 2021
                        },
                        secondDate:{
                            month:3,
                            year:2022
                        }
                    }
                },
                text: TRANSLATE.ES.PLACE.WISBOO.POSITIONS.FULL.DESCRIPTION
            }
        ]
    },
    {
        place: TRANSLATE.ES.PLACE.OHMUNITY.NAME,
        dates:{
            firstDate: {
                month: 10,
                year: 2020
            },
            secondDate: {
                month: 4,
                year: 2021
            }
        },
        description: [
            {
                skills: ['Typescript', 'Git', 'GraphQL', 'Hasura', 'Js', 'React', 'Jest'],
                position: {
                    name: TRANSLATE.ES.PLACE.OHMUNITY.POSITIONS.FULL.TITLE,
                    time: {
                        firstDate: {
                            month: 10,
                            year: 2020
                        },
                        secondDate: {
                            month: 4,
                            year: 2021
                        }
                    }
                },
                text: TRANSLATE.ES.PLACE.OHMUNITY.POSITIONS.FULL.DESCRIPTION,
                points: [
                    TRANSLATE.ES.PLACE.OHMUNITY.POSITIONS.FULL.POINTS.FIRST,
                    TRANSLATE.ES.PLACE.OHMUNITY.POSITIONS.FULL.POINTS.SECOND
                ]
            }
        ]
    }]
};