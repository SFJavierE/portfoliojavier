import { Education, TimeDate } from './Interface';
import TitleComponent from '../../features/components/TitleComponent';

export default function EducationComponent () {
    const educations : Education[] = [
        {
            title: 'Angular Developer',
            time: {
                start: new Date('06/01/2023'),
                end: new Date('09/01/2023')
            },
            place: 'Udemy | Fernando Herrera',
            link: 'https://www.udemy.com/course/angular-fernando-herrera/',
            description: 'Curso Angular: Desde TypeScript hasta desarrollo de aplicaciones completas. Componentes, rutas, autenticación, mapas, APIs, estilos y más. Habilidades para crear y comprender aplicaciones, siguiendo estándares del framework.'
        },
        {
            title: 'Full Stack Developer',
            time: {
                start: new Date('06/01/2020'),
                end: new Date('10/30/2020')
            },
            place: 'Henry',
            link: 'https://www.soyhenry.com/',
            description: 'Formado en habilidades de desarrollo frontend y backend en 2020 como Fullstack Developer. Poseo experiencia en tecnologías como HTML, CSS, JavaScript, React, Node.js, Express y MongoDB. Capacidad demostrada para diseñar, desarrollar y lanzar aplicaciones web completas, con habilidades en resolución de problemas y colaboración en equipos de desarrollo.'
        },
        {
            title: 'Analisis, Desarrollo y Programación de Aplicaciones',
            time: {
                start: new Date('03/01/2019'),
                end: new Date('06/01/2020')
            },
            place: 'Instituto Superior de Estudios Técnicos',
            link: 'https://www.mardelplata.gob.ar/educacion/iset',
        },
        {
            title: 'Web Pages Developer',
            time: {
                start: new Date('09/01/2018'),
                end: new Date('11/01/2023')
            },
            place: 'Escuela de Formación Profesional N°401'
        }
    ]

    const EducationList : React.FC<Education> = ({title, time: {start, end}, place, link, description}) => {
        const Date : React.FC<TimeDate> = ({date}) => {
            return (
                <span>
                    {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                </span>
            )
        }

        return (
            <div className='row mb-4'>
                <div className='col-3'>
                    <div>
                        <div className='text-cold-3'>
                            <span>{title}</span>
                        </div>
                        <hr style={{marginBottom: '5px', marginTop: '5px'}}/>
                        <div style={{fontSize: '15px'}}>
                            <Date date={start}/>
                            <span className='mx-2'>-</span>
                            <Date date={end}/>
                        </div>
                        <hr style={{marginBottom: '5px', marginTop: '5px'}}/>
                        <span >{place}</span>
                    </div>
                </div>
                <div className='col border-start ps-3 border-primary text-cold-4'>
                    {description && <span>{description}</span>}
                    {(description && link) && <br />}
                    {link && <span>{link}</span>}
                    {(!description && !link) && <span>..................................................</span>}
                </div>
            </div>
        )
    }

    return (
        <div className='mt-4'>
            <TitleComponent title={'Educación'}/>
            { educations.map((ed) =>
                <div key={ed.title}>
                    <EducationList {...ed}/>
                </div>)
            }
        </div>
    )
}