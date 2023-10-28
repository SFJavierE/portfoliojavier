import { Company, Job, WorkingTime } from './Interface';

export default function Experiencies () {
    const experiencies : Company[] = [
        {
            name: 'Wisboo',
            description: 'Wisboo es una empresa que se dedica a otorgar una academia donde desarrolladores de contenido, streamers e influencers puedan vender sus cursos sin la necesidad de que desarrollen su página web.',
            titles: [
                {
                    name: 'Engineer Manager',
                    description: 'Mis tareas consistía en velar por la célula Money, encargada de todo el aparte referente con el dinero (pagos con distintos medios de pago, cobros, subscripciones, etc.), organizando los sprints utilizando metodologías agiles (SCRUM), ayudando al área de Producto apartando una visión técnica, creando documentaciones sobre las funcionales que estabamos por realizar, creando reuniones para debatir cuestiones como una Retro y manteniendome atento al equipo por si surgia alguna cuestión sobre lo que se deba desarrollar, como alguna traba por algo técnico o porque simplemente no se entiendo en la explicación de la funcionalidad. Además de ello igualmente seguía programanando, más dedicado al frontend, haciendo mantenimiento y también desarrollando las funcionalidades.',
                },
                {
                    name: 'Fullstack Developer',
                    description: 'Desarrollo de funcionalidades en backend utilizando Ruby on Rails y en front utilizamos AngularJS, para dar mantenimiento o realizar mejoras dentro del proyecto de Wisboo.',
                }
            ],
            wortTime: {
                startDate: new Date(),
                endDate: new Date(),
            },
            link: ''
        },
        {
            name: 'Ohmunity',
            description: 'Ohmunity es una startup de USA cuyo proyecto es lanzar al mercado una app dedica al deporte del Yoga, donde permita conectar a profesores o estudios con sus alumnos a través de sesiones virtuales.',
            titles: [{
                name: 'Fullstack Developer',
                description: 'Desarrollo fullstack utilizando Typescript y TailwindsCss para el desarrollo front, Express para el backend y para el manejo de datos utilizé Hasura que te proporciona una consola con la cual puedes hacer manejo de datos con GraphQL.',
            }],
            wortTime: {
                startDate: new Date(),
                endDate: new Date(),
            },
            link: ''
        },
        {
            name: 'Tales Games',
            description: 'Es un grupo apasionado por los videojuegos y que está interesado en el desarrollo de los mismos.',
            titles: [
                {
                    name: 'Game Developer',
                    description: 'Desarrollo de juegos utilizando Unity con C# para el manejo de objetos.',
                }
            ],
            wortTime: {
                startDate: new Date(),
                endDate: new Date(),
            }
        }
    ]


    const listExperiencies = ({name, description, titles, wortTime} : Company, i: number) => {
        const listTitles = ({ name, description } : Job, i: number) => {
            return (
                <div className='px-4 my-4'>
                    <span>{name}</span>
                    <br />
                    <span>{description}</span>
                    {(i < titles.length - 1) && <hr />}
                </div>
            )
        }

        return (
            <div>
                <span className='fs-5'>{name}</span>
                <br className='my-2'/>
                <span>{description}</span>
                {titles.map((t: Job, i: number) => listTitles(t, i))}
                {(i < experiencies.length - 1) && <hr />}
            </div>
        )
    }

    return (
        <div>
            <span className="fs-4">
                Experiencias
            </span>
            <hr className='border border-2 border-info'/>
            {experiencies.map((exp : Company, i: number) => listExperiencies(exp, i))}
        </div>
    )
}