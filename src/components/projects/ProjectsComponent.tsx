import { Project, StatusComp } from './Interface';
import TitleComponent from '../../features/components/TitleComponent';
import projects from './Information';

const StatusComponent : React.FC<StatusComp> = ({status}) : React.ReactElement => {
    let classN = 'px-2 border-cold-3-start border-cold-3-end'
    if(status === 'done' || status === 'finalizado'){
        classN = classN + ' text-cold-3'
    }
    else {
        classN = classN + ' text-cold-2'
    }
    return (
        <span className={classN}>
            {status}
        </span>
    )
}

const ProjectComponent: React.FC<Project> = ({title, status, technologies, description, link}) : React.ReactElement => (
    <div className='row mb-5'>
        <div className='col-3'>
            <img src="" alt="" width={'auto'} height={'150'}/>
        </div>
        <div className='col border-cold-3-start ps-3'>
            <span className='fs-5 me-3 text-cold-3'>{title}</span>
            <a href={link} target='_blank' rel="noreferrer">
                <div className='icon-link'/>
            </a>
            <div className='my-3'>
                <StatusComponent status={status}/>
            </div>
            <span>{description}</span>
        </div>
    </div>
)

const ProjectsComponent = () : React.ReactElement => (
    <div>
        <TitleComponent title={'Proyectos'}/>
        {
            projects.map((p: Project) => (
                <div key={p.title}>
                    <ProjectComponent {...p}/>
                </div>
                )
            )
        }
    </div>
)

export default ProjectsComponent;