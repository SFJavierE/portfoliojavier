import { useState } from 'react';
import { Project } from './Interface';
import TechnologyList from '../../features/components/TechnologyList';
import InformationBoxComponent from '../../features/components/InformationBoxComponent';
import TitleCollapseComponent from '../../features/components/TitleCollapseComponent';

export default function Projects () {
    const [openCollapse, setOpenCollapse] = useState<boolean>(false);

    const projects : Project[] = [
        {
            title: 'LeagueOfLegendsARAM',
            status: 'en progreso',
            technologies: ['Unity', '.NET', 'C#'],
            description: 'En este proyecto me enfoqué en crear una imitación del juego League of Legends, donde se enfoca en recrear el mapa conocido como ARAM y la creación de varios personajes jugables del mismo, los llamados "súbditos", torres y una IA que utilize otro personaje jugable para combatir contra nosotros.',
            link: ''
        },
        {
            title: 'porfolio',
            status: 'finalizado',
            technologies: ['React', 'Ts', 'TailwindCss'],
            description: 'Este es mi primer portafolio, está más enfocado en mis trabajos y educación. Ahora ya no es el oficial pero decidí mostrarlo porque considero que me quedó muy bien y merece la pena.',
            link: 'https://github.com/Zoaxx1/portfolio'
        },
        {
            title: 'mangaecommerceapi',
            status: 'en progreso',
            technologies: ['NodeJs', 'Express'],
            description: 'Una api para manejar la base de datos del e-commerce de mangas.',
            link: 'https://github.com/Zoaxx1/mangaecommerceapi'
        },
        {
            title: 'SlimeSlash',
            status: 'finalizado',
            technologies: ['C#', 'Unity', '.NET'],
            description: 'Juego inspirado en el famoso Cuphead, donde eres un soldado que debe enfrentarse a un Slime Gigante antes de que se vuelva... aún más Gigante.',
            link: 'https://github.com/Zoaxx1/SlimeSlash'
        },
        {
            title: 'mangaecommerce',
            status: 'en progreso',
            technologies: ['Ts', 'React', 'TailwindCss'],
            description: 'Un e-commerce enfocado a la ventas de mangas por medio de online.',
            link: 'https://github.com/Zoaxx1/mangaecommerce'
        },
        {
            title: 'dogs',
            status: 'finalizado',
            technologies: ['NodeJs', 'Express', 'React', 'TailwindCss'],
            description: 'Dogs fue hecho para una prueba técnica donde a través de una Api obtenía una lista de perros, además que podía agregarlos, borrarlos, etc. Decidí incluirlo porque me gustó mucho como quedo y merece la pena mostrarlo.',
            link: 'https://github.com/Zoaxx1/dogs'
        },
        {
            title: 'BankAppMe',
            status: 'finalizado',
            technologies: ['ReactNative', 'NodeJs', 'Express', 'AWS', 'Postman', 'Css'],
            description: 'Billetera Virtual que nos plantearon como proyecto final el bootcamp Henry, utilizamos por primera vez React Native por lo que estaba 100% enfocada al ambiente mobile, y utilizamos AWS para manejar la base de datos en tiempo real. En este proyecto cumplí un Rol parecido al e-commerce, lideré el Front y me enfoqué esta vez en la investigación del lenguaje (como dije antes, era la primera vez que lo usabamos) y la creación de las distintas vistas.',
            link: 'https://github.com/Zoaxx1/BankAppMe'
        },
        {
            title: 'BackToThe90s-E-commerce',
            status: 'finalizado',
            technologies: ['React', 'Postgress', 'Express', 'NodeJs', 'Trello', 'Postman', 'Css'],
            description: 'Proyecto creado y evaluado en Henry con otros 3 compañeros, donde hicimos un e-commerce con la idea de vender cosas de los 90 con precios de los 90. Estuve liderando el frontend y ayudando en el backend, principalmente estuve en la conexión entre el Front y la Api.',
            link: 'https://github.com/Zoaxx1/BackToThe90s-E-commerce'
        },
        {
            title: 'MiniGame1_Tale_Game',
            status: 'finalizado',
            technologies: ['.NET', 'C#', 'Unity'],
            description: 'Minijuego que se trata de arrastrar y soltar.',
            link: 'https://github.com/Zoaxx1/MiniGame1_Tale_Game'
        },
        {
            title: 'zombieWave',
            status: 'finalizado',
            technologies: ['.NET', 'C#', 'Unity', 'Firebase'],
            description: 'Segundo juego creado, inspirado en uno que me encantaba jugar cuando esta disponible. La idea es aguantar oleadas de zombies por nivel con una cámara vista de arriba (por eso el nombre), todas las apariencias de los zombies y el personaje fueron creadas por mi usando Blender, y además integré un login para guardar el usuario en Firebase',
            link: 'https://github.com/Zoaxx1/zombieWave'
        },
        {
            title: 'PacmanGame',
            status: 'finalizado',
            technologies: ['C#', 'Unity', '.NET'],
            description: 'Este fue el primer proyecto y juego que realice en mi carrera, como dice el título, es una copia del famoso juego Pacman que muchos hemos jugado alguna vez en la vida.',
            link: 'https://github.com/Zoaxx1/PacmanGame'
        }
    ];

    const listProjects = ({title, status, technologies, description, link} : Project, i : number) => {
        const statusColor: string = status === 'finalizado' ? 'bg-primary border border-info' : 'bg-primary-subtle opacity-75';
        const statusClass: string = statusColor + ' p-1 rounded-1';

        return (
            <InformationBoxComponent>
                <div className='bg-primary py-1 px-2 rounded-1'>
                    <span className='fs-5 me-3'>{title}</span>
                    <a className='text-info' href={link}>{link}</a>
                </div>
                <hr />
                <TechnologyList list={technologies}/>
                <hr />
                <div className='my-3'>
                    <span className='me-2'>Estado: </span>
                    <span className={statusClass}>{status}</span>
                </div>
                <hr />
                <span >{description}</span>
            </InformationBoxComponent>
        )
    }

    return (
        <div>
            <TitleCollapseComponent
                title={'Proyectos'}
                openCollapse={openCollapse}
                setOpen={setOpenCollapse}
                idCollapse='projects-collapse'
            >
                {projects.map((p: Project, i: number) => listProjects(p, i))}
            </TitleCollapseComponent>
        </div>
    )
}