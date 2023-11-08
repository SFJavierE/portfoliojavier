import { Achievement } from './Interface';

const achievements : Achievement[] = [
    {
        place: 'Wisboo',
        achievements: [
            {
                title: 'Liderar la Célula Money',
                description: 'Estuve en la posición de Engineer Manager donde me encargaba de la organización del equipo de tecnología, creando tareas junto al equipo de producción donde aportaba mi visión técnica para analizar que podiamos tomar en el sprint que seguia, organizando los sprints y la disponibilidad de cada uno.'
            },
            {
                title: 'Lanzamiento y soporte de Wisboo Pay',
                description: 'Wisboo Money es un billetera virtual que busca darle la posibilidad a los usuarios de poder vender sus cursos a distintos países con la moneda local de cada uno en Latinoamérica utilizando la conversión de la moneda local del usuario con la del compradoror. Esta funcionalidad fue trabajada con un partner externo: Dlocal. También nos encargabamos del equipo de dejar documentado las distintas funcionalidades que desarrollamos.'
            },
            {
                title: 'Resolución de errores',
                description: 'Rápida resolución de errores dentro del proyecto, tanto del backend como del frontend.'
            },
        ]
    },
    {
        place: 'Ohmunity',
        achievements: [
            {
                title: 'Rápido aprendizaje',
                description: 'Destaco esto porque no me tomo mucho tiempo acostumbrarme a las tecnologías con las que trabajé en su momento y que anteriormente en mi carrera no conocia. Dichas técnologías son Typescript, TailwindCss, Hasura y GraphQl.'
            }
        ]
    },
    {
        place: 'Henry',
        achievements: [
            {
                title: 'Liderar el front del proyecto BankAppMe',
                description: 'Tomé la iniciativa de tomar el liderato del sector frontend y la distribución de las tareas para que sea equitativa. Por mi lado también me encargue de seguir explorando React Native ya que nadie en el equipo lo habia utilizando antes, la conección entre las distintas vistas y la implementación de las mismas con la data recibida de la api. Este equipo fue un poco más grande que el anterior proyecto: 4 front y 3 backend'
            },
            {
                title: 'Encargado del front del proyecto BackToThe90s-E-commerce',
                description: 'En un equipo de 4 al principio se hizo dificil sobrellevar porque solo nos dividimos y empezamos a programar, pero luego con el paso del tiempo nos fuimos organizando mejor, yo estuve mucho más enfocado al front, otro al bakend, y dos fullstacks. Igualmente como estabamos siendo evaluados tuve que parar porque dejaba a mis compañeros sin trabajo para ser evaluados. Entre las principales funcionalidades que implementé fueron la conexión entre el front con la api utilizando Redux con Axios.'
            }
        ]
    },
    {
        place: 'TaleGames',
        achievements: [
            {
                title: 'Implementación de monetización',
                description: 'Investigue como monetizar con Google Playstore y realice la gran parte de la implementación, pero debido a que empecé el bootcamp de Henry tuve que dejar el desarrollo.'
            },
            {
                title: 'Implementación de funcionalidad',
                description: 'El minijuego se centraba en hacer un arrastrado y suelta, por lo que se me encargó la tarea de buscar como y hacerlo.'
            },
            {
                title: 'Crear un minijuego desde cero',
                description: 'Se me encargó crear un minijuego donde las protagonistas eran unas hormigas que iban y venían de forma vertical y tenías que ayudarlas a recolectar la comida. En general cree todos los scripts para su función y luego un compañero Sr lo revisaba para que el código quede lo más legible y ordenado posible.'
            },
        ]
    }
];

export default achievements;