import { Achievement, AchievementDescription, AchievementDescriptionComp } from './Interface';
import TitleComponent from '../../features/components/TitleComponent';
import achievements from './Information';
import { useMediaQuery } from 'react-responsive';

const AchievementsDescriptionComponent: React.FC<AchievementDescriptionComp> = ({achievement: {title, description}, index, isMobile} ) : React.ReactElement => (
    <div className={`${index !== 0 && 'mt-3'}`}>
        <div>
            <span className='text-cold-3' style={{fontSize: isMobile ? '14px' : ''}}>{title}</span>
        </div>
        <span style={{fontSize: isMobile ? '12px' : '15px'}}>{description}</span>
    </div>
)

const AchievementComponent: React.FC<Achievement> = ({place, achievements}) : React.ReactElement => {
    const isMobile : boolean = useMediaQuery({maxWidth: 1000});
    const ViewMobile = () : React.ReactElement => (
        <div className='row mb-4'>
            <div className='col-3'>
                <span className='text-cold-3' style={{fontSize: '14px'}}>{place}</span>
                <hr className='border-cold-3-1' style={{marginTop: '-2px'}}/>
            </div>
            <div className='col border-cold-3-start ms-3'>
                {
                    achievements.map((ach : AchievementDescription, i : number) => (
                            <div key={ach.title}>
                                <AchievementsDescriptionComponent achievement={ach} index={i} isMobile={isMobile}/>
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
                <span className='fs-5 text-cold-3'>{place}</span>
                <hr className='border-cold-3-1' style={{marginTop: '-2px'}}/>
            </div>
            <div className='col border-cold-3-start ps-3'>
                {
                    achievements.map((ach : AchievementDescription, i : number) => (
                            <div key={ach.title}>
                                <AchievementsDescriptionComponent achievement={ach} index={i}/>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    ) : <ViewMobile/>
}

const AchievementsComponent = () : React.ReactElement => (
    <div>
        <TitleComponent title={'Logros'}/>
        {
            achievements.map((ach: Achievement) => (
                    <div key={ach.place}>
                        <AchievementComponent {...ach}/>
                    </div>
                )
            )
        }
    </div>
)

export default AchievementsComponent;