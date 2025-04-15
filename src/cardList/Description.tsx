import TranslateES from "./cardList.es.json";
import { CardDescription } from "../utils/interfaces/Interfaces"
import { ListSkills } from "./Skills";

export const Description = ({ description }: { description: CardDescription }) => {
    return(
      <div className="pl-4 md:pl-6">
        {description.position && 
          <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-4">
            <span className="font-medium text-sm md:text-base">
              {description.position.name}
            </span>
            <div className="flex flex-wrap gap-x-2">
              <span className="text-xs md:text-sm">
                {`${TranslateES.MONTH[description.position.time.firstDate.month]} ${description.position.time.firstDate.year.toString()} -`}
              </span>
              {description.position.time.secondDate != 'Current' ?
                <span className="text-xs md:text-sm">
                  {`${TranslateES.MONTH[description.position.time.secondDate.month]} ${description.position.time.secondDate.year.toString()}`}
                </span>
                : <span className="text-xs md:text-sm">{TranslateES.CURRENT}</span>
              }
            </div>
          </div>
        }
        
        {description.position?.name && 
          <hr className="border border-zinc-100/40 my-2" />
        }
  
        <span className="text-sm leading-relaxed hyphens-auto">
          {description.text}
        </span>
  
        {description.points &&
          <ul className="mt-2 space-y-1 text-xs md:text-sm">
            {description.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                {point}
              </li>
            ))}
          </ul>
        }
  
        <div className="flex flex-wrap gap-2 mt-2 text-xs md:text-sm">
          {description.skills.map((skill, index) => (
            <ListSkills key={index} skill={skill} />
          ))}
        </div>
      </div>
    )
  }