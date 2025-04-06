import { CardInfo } from "../interfaces/Interfaces";

export const listEducations : CardInfo = {
    title: "Educación",
    data: [
    {
        place: 'Henry',
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
                    name: 'Fullstack Developer',
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
                text: "Un programa intensivo en línea que simula un entorno laboral real, preparándome para una carrera en TI.",
                points: [
                    "Primeros dos meses: Formación intensiva en tecnologías de Frontend y Backend.",
                    "Tercer mes: Desarrollo de una plataforma de E-commerce desde cero en un equipo multidisciplinario de 5-6 personas.",
                    "Cuarto mes: Prácticas profesionales con experiencia práctica en un entorno laboral real.",
                    "Proyectos colaborativos: Trabajo en equipo para resolver desafíos técnicos y desarrollar aplicaciones funcionales."
                    ]
                }
            ]
        }
    ]
}