import TitleComponent from '../../features/components/TitleComponent';
import DateComponent from '../../features/components/DateComponent';
import { Company, Job, Description } from './Interface';
import experiencies from './Information';
import { useMediaQuery } from 'react-responsive';

const DescriptionComponent: React.FC<Description> = ({ title: { name, description }, index, isMobile }) : React.ReactElement => (
    <div className={`${index !== 0 && 'mt-3'}`}>
        <div>
            <span className='text-cold-3' style={{fontSize: isMobile ? '14px': ''}}>{name}</span>
        </div>
        <span style={{fontSize: isMobile ? '12px' : '15px'}}>{description}</span>
    </div>
)

const ExperienceComponent = ({name, description, jobs, time: {start, end}} : Company) : React.ReactElement => {
    const isMobile : boolean = useMediaQuery({maxWidth: 1000});
    const ViewMobile = () : React.ReactElement => (
        <div className='row mb-4'>
            <div className='col-3'>
                <div className='text-cold-3'>
                    <span style={{fontSize: '16px'}}>{name}</span>
                </div>
                <hr className='border-cold-3-1' style={{marginTop: '-2px', marginBottom: '5px'}}/>
                <div style={{fontSize: '10px'}}>
                    <DateComponent date={start}/>
                    <br />
                    <DateComponent date={end}/>
                </div>
                <span className='text-cold-2' style={{fontSize: '12px'}}>{description}</span>
            </div>
            <div className='col border-cold-3-start ms-3'>
                {
                    jobs.map((t: Job, i: number) => (
                        <div key={t.name}>
                            <DescriptionComponent title={t} index={i} isMobile={isMobile}/>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )

    return !isMobile ?
    (
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
    ) : <ViewMobile/>
}

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