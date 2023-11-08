import TitleComponent from '../../features/components/TitleComponent';
import DateComponent from '../../features/components/DateComponent';
import { Company, Job, Description } from './Interface';
import experiencies from './Information';

const DescriptionComponent: React.FC<Description> = ({ title: { name, description }, index }) : React.ReactElement => (
    <div className={`${index !== 0 && 'mt-3'}`}>
        <div>
            <span className='text-cold-3'>{name}</span>
        </div>
        <span style={{fontSize: '15px'}}>{description}</span>
    </div>
)

const ExperienceComponent = ({name, description, jobs, time: {start, end}} : Company) : React.ReactElement => (
    <div className='row mb-4'>
        <div className='col-3'>
            <div className='d-flex align-items-center text-cold-3'>
                <span className='fs-5'>{name}</span>
                <div className='ms-3' style={{fontSize: '15px'}}>
                    <DateComponent date={start}/>
                    <span className='mx-2'>-</span>
                    <DateComponent date={end}/>
                </div>
            </div>
            <hr className='border-cold-3-1' style={{marginTop: '-2px', marginBottom: '5px'}}/>
            <span className='text-cold-2' style={{fontSize: '15px'}}>{description}</span>
        </div>
        <div className='col border-cold-3-start ps-3'>
            {
                jobs.map((t: Job, i: number) => (
                    <div key={t.name}>
                        <DescriptionComponent title={t} index={i}/>
                    </div>
                    )
                )
            }
        </div>
    </div>
)

const ExperiencesComponent = () : React.ReactElement => (
    <div className='mt-5'>
        <TitleComponent title={'Experiencia Profesional'} />
        {
            experiencies.map((exp : Company) =>(
                <div key={exp.name}>
                    <ExperienceComponent {...exp}/>
                </div>
                )
            )
        }
    </div>
)

export default ExperiencesComponent;