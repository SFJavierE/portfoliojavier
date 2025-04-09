import TranslateES from "./cardList.es.json";
import { CardDescription } from "../interfaces/Interfaces"
import { ListSkills } from "./Skills";

export const Description = ({description} : {description : CardDescription}) =>{
    return(
        <div className="pl-6">
            {
            description.position && 
            <div className="flex justify-between">
                <span className="font-semibold text-base">{description.position.name}</span>
                <div>
                    <span className="mr-2 text-base">{`${TranslateES.MONTH[description.position.time.firstDate.month]} ${description.position.time.firstDate.year.toString()} -`}</span>
                    {
                        description.position.time.secondDate != 'Current' ?
                        <span>{`${TranslateES.MONTH[description.position.time.secondDate.month]} ${description.position.time.secondDate.year.toString()}`}</span>
                        : <span>{TranslateES.CURRENT}</span>
                    }
                </div>
            </div>
            }
            {description.position?.name && <hr className="border-1 border-zinc-100" />}
            <span className="text-md">
                {description.text}
            </span>
            {
                description.points &&

                <div className={`text-sm grid grid-rows-${description.points.length}`}>
                    {description.points.map((points)=>{
                        return(
                            <span>
                                {`o ${points}`}
                            </span>
                        )
                    })}
                </div>
            }
            <div className="flex justify-start mt-2 text-sm">
                {description.skills.map((skill) => {
                    return(
                        <ListSkills skill={skill}/>
                    )
                })}
            </div>
        </div>
    )
}