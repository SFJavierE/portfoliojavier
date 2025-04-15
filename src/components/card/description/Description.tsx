import { memo, useMemo } from 'react';
import TimesES from "../../../utils/translates/times/times.json";
import { CardDescription, DatesDisplay } from "../../../utils/interfaces/Interfaces";
import Skill from "../skills/Skill";

const DateDisplay = ({
  date,
  isCurrent = false
}: DatesDisplay ) => {
  const formattedDate = useMemo(() => {
    if (isCurrent) return TimesES.CURRENT;
    return `${TimesES.MONTH[date.month]} ${date.year}`;
  }, [date, isCurrent]);

  return (
    <span className="text-xs md:text-sm whitespace-nowrap">
      {formattedDate}
    </span>
  );
};

const DescriptionItem = memo(({ description }: { description: CardDescription }) => {
  const positionTime = description.position?.time;
  
  const positionDates = useMemo(() => {
    if (!positionTime) return null;
    
    return (
      <div className="flex flex-wrap gap-x-2">
        <DateDisplay date={positionTime.firstDate} />
        <span>-</span>
        {positionTime.secondDate !== 'Current' ? (
          <DateDisplay date={positionTime.secondDate} />
        ) : (
          <DateDisplay date={positionTime.firstDate} isCurrent />
        )}
      </div>
    );
  }, [positionTime]);

  const positionContent = useMemo(() => {
    if (!description.position) return null;
    
    return (
      <>
        <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-4">
          <h3 className="font-medium text-sm md:text-base">
            {description.position.name}
          </h3>
          {positionDates}
        </div>
        <hr className="border border-zinc-100/40 my-2" />
      </>
    );
  }, [description.position, positionDates]);

  return (
    <article className="pl-4 md:pl-6">
      {positionContent}
      
      <p className="text-sm leading-relaxed hyphens-auto mb-4">
        {description.text}
      </p>

      {description.points && (
        <ul className="mt-2 space-y-1 text-xs md:text-sm list-none">
          {description.points.map((point, index) => (
            <li key={`point-${index}`} className="flex items-start">
              <span aria-hidden="true" className="mr-2">•</span>
              <span className="flex-1">{point}</span>
            </li>
          ))}
        </ul>
      )}

      {description.skills && (
        <div className="flex flex-wrap gap-2 mt-4">
          {description.skills.map((skill, index) => (
            <Skill key={`skill-${skill}-${index}`} skill={skill} />
          ))}
        </div>
      )}
    </article>
  );
});

DescriptionItem.displayName = 'DescriptionItem';
export default DescriptionItem;