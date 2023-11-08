import TitleComponent from '../../features/components/TitleComponent';
import DateComponent from '../../features/components/DateComponent';
import { Education } from './Interface';
import education from './Information';

const EducationListComponent : React.FC<Education> = ({title, time: {start, end}, place, link, description}) : React.ReactElement => (
    <div className='row mb-4'>
        <div className='col-3'>
            <div>
                <div className='text-cold-3'>
                    <span>{title}</span>
                </div>
                <hr style={{marginBottom: '5px', marginTop: '5px'}}/>
                <div className='text-cold-4' style={{fontSize: '15px'}}>
                    <DateComponent date={start}/>
                    <span className='mx-2'>-</span>
                    <DateComponent date={end}/>
                </div>
                <hr style={{marginBottom: '5px', marginTop: '5px'}}/>
                <span >{place}</span>
            </div>
        </div>
        <div className='col border-cold-3-start ps-3 text-cold-4'>
            {description && <span>{description}</span>}
            {(description && link) && <br />}
            {link && <span>{link}</span>}
            {(!description && !link) && <span>Sin descripción</span>}
        </div>
    </div>
)

const EducationComponent = () : React.ReactElement => (
    <div className='mt-4'>
        <TitleComponent title={'Educación'}/>
        {
            education.map((ed) =>
                <div key={ed.title}>
                    <EducationListComponent {...ed}/>
                </div>
            )
        }
    </div>
)

export default EducationComponent;