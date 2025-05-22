import { CardInfo } from '../interfaces/Interfaces';

export const jobList :CardInfo = {
    title: "Experiencia",
    data: [{
    place: 'Trick Studios',
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
                name: 'Fortnite Map Developer',
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
            text: "Diseñé y desarrollé mapas interactivos para Fortnite utilizando Verse y el Editor Unreal para Fortnite (UEFN). Creé herramientas y sistemas personalizados, como un sistema de recompensas diarias, para mejorar la jugabilidad y la experiencia del usuario. Competente en diseño de mapas, mecánicas interactivas e implementación de funciones innovadoras."
        },
        {
            skills: ['Unity', 'C#', 'NetCode', 'GitHub'],
            position: {
                name: 'Unity Developer',
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
            text: "Desarrollé prototipos de juegos jugables y optimizados (MVP) con enfoque en modo multijugador utilizando NetCode. Entregué soluciones de alta calidad y optimizadas para el rendimiento dentro de los plazos establecidos."
        }
    ]
    },{
        place: 'Wisboo',
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
                    name: 'Teach Leader & Frontend Developer',
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
                text: "Lideré el equipo de tecnología en la Celula de Money, combinando roles técnicos y de gestión. Como desarrollador frontend, implementé soluciones y corregí errores utilizando AngularJS, enfocándome en áreas como compras, ventas, suscripciones y métodos de pago.",
                points: [
                    "Organicé y asigné tareas utilizando Jira.",
                    "Creé y mantuve documentación técnica y funcional.",
                    "Revisé y asigné la resolución de errores.",
                    "Brindé visión técnica al equipo de producto.",
                    "Representé a la Celula en reuniones corporativas."
                ]
            },
            {
                skills: ['AngularJS', 'GitHub', 'RubyOnRails', 'Js'],
                position: {
                    name: 'Fullstack Developer',
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
                text: "Contribuí al mantenimiento y mejora de una plataforma que permite a los usuarios crear sus propias academias. Colaboré con un equipo experto, adquiriendo aprendizaje y crecimiento profesional."
            }
        ]
    },
    {
        place: 'Ohmunity',
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
                    name: 'Fullstack Developer',
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
                text: "Contribuí al desarrollo de una aplicación móvil con el objetivo de conecta instructores de yoga y estudios con estudiantes en Estados Unidos, utilizando Apache Cordova, TypeScript, Hasura y Express.",
                points: [
                    "Implementé pruebas utilizando Cypress, Jest y Storybook.",
                    "Aprendí rápidamente nuevas tecnologías, entregando código limpio y eficiente."
                ]
            }
        ]
    }]
};