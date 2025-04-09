import { Card } from "../interfaces/Interfaces";
import ExperiencieES from "./cardList.es.json";

export const PlaceJob = ({job}:{job: Card}) => {
    return(
        <div className="pr-2 w-full">
            <span className="text-lg font-bold">{job.place}</span>
            <br />
            {
                job.dates &&
                <div className="flex justify-between text-base">
                <span>{`${ExperiencieES.MONTH[job.dates.firstDate.month]}${job.dates.firstDate.year.toString()}`}</span>
                <span>{
                    job.dates.secondDate == 'Current' ?
                    ExperiencieES.CURRENT :
                    `${ExperiencieES.MONTH[job.dates.secondDate.month]}${job.dates.secondDate.year.toString()}`
                }</span>
            </div>
            }
        </div>
    )
}