import { Company } from './Interface';

const experiencies : Company[] = [
    {
        name: 'Wisboo',
        description: 'Wisboo es una empresa que se dedica a otorgar una academia donde desarrolladores de contenido, streamers e influencers puedan vender sus cursos sin la necesidad de que desarrollen su página web.',
        jobs: [
            {
                name: 'Engineer Manager',
                description: 'Mis tareas consistía en velar por la célula Money, encargada de todo el aparte referente con el dinero (pagos con distintos medios de pago, cobros, subscripciones, etc.), organizando los sprints utilizando metodologías agiles (SCRUM), ayudando al área de Producto apartando una visión técnica, creando documentaciones sobre las funcionales que estabamos por realizar, creando reuniones para debatir cuestiones como una Retro y manteniendome atento al equipo por si surgia alguna cuestión sobre lo que se deba desarrollar, como alguna traba por algo técnico o porque simplemente no se entiendo en la explicación de la funcionalidad. Además de ello igualmente seguía programanando, más dedicado al frontend, haciendo mantenimiento y también desarrollando las funcionalidades.',
            },
            {
                name: 'Fullstack Developer',
                description: 'Desarrollo de funcionalidades en backend utilizando Ruby on Rails y en front utilizamos AngularJS, para dar mantenimiento o realizar mejoras dentro del proyecto de Wisboo.',
            }
        ],
        time: {
            start: new Date('06/15/2021'),
            end: new Date('06/30/2023'),
        },
        link: ''
    },
    {
        name: 'Ohmunity',
        description: 'Ohmunity es una startup de USA cuyo proyecto es lanzar al mercado una app dedica al deporte del Yoga, donde permita conectar a profesores o estudios con sus alumnos a través de sesiones virtuales.',
        jobs: [{
            name: 'Fullstack Developer',
            description: 'Desarrollo fullstack utilizando Typescript y TailwindsCss para el desarrollo front, Express para el backend y para el manejo de datos utilizé Hasura que te proporciona una consola con la cual puedes hacer manejo de datos con GraphQL.',
        }],
        time: {
            start: new Date('10/15/2020'),
            end: new Date('03/30/2021'),
        },
        link: ''
    },
    {
        name: 'Tales Games',
        description: 'Es un grupo apasionado por los videojuegos y que está interesado en el desarrollo de los mismos.',
        jobs: [
            {
                name: 'Game Developer',
                description: 'Desarrollo de juegos utilizando Unity con C# para el manejo de objetos.',
            }
        ],
        time: {
            start: new Date('12/15/2019'),
            end: new Date('06/01/2020'),
        }
    }
]

export default experiencies;