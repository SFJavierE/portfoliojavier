import { Achievement, AchievementDescription, AchievementDescriptionComp } from './Interface';
import TitleComponent from '../../features/components/TitleComponent';
import achievements from './Information';

const AchievementsDescriptionComponent: React.FC<AchievementDescriptionComp> = ({achievement: {title, description}, index} ) : React.ReactElement => (
    <div className={`${index !== 0 && 'mt-3'}`}>
        <div>
            <span className='text-cold-3'>{title}</span>
        </div>
        <span style={{fontSize: '15px'}}>{description}</span>
    </div>
)

const AchievementComponent: React.FC<Achievement> = ({place, achievements}) : React.ReactElement => (
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
)

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