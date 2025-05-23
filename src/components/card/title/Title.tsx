import { memo, useMemo } from 'react';
import { Card } from "../../../utils/interfaces/Interfaces";
import TimesEs from "../../../utils/translates/times/times.json";

const formatDate = (date: { month: number; year: number }) => 
  `${TimesEs.MONTH[date.month.toString() as keyof typeof TimesEs.MONTH]} ${date.year}`;

const Title = memo(({ title }: { title: Card }) => {
  const renderDates = useMemo(() => {
    if (!title.dates) return null;
    
    const startDate = formatDate(title.dates.firstDate);
    const endDate = title.dates.secondDate === 'Current' 
      ? TimesEs.CURRENT 
      : formatDate(title.dates.secondDate);

    return (
      <div className="flex flex-col md:flex-row justify-between text-sm md:text-base mt-1">
        <span aria-label="Fecha de inicio">{startDate}</span>
        <span aria-label="Fecha de fin" className="mt-1 md:mt-0">{endDate}</span>
      </div>
    );
  }, [title?.dates]);

  return (
    <div className="pr-2 w-full">
      <h3 className={`${title.type && 'flex'} text-lg md:text-xl font-bold text-indigo-200`}>
        {title.place}
        {title.type && <p className='ml-2'>{title.type == 'Game' ? "🎮" : "💻"}</p>}
      </h3>
      {renderDates}
    </div>
  );
});

Title.displayName = 'Title';
export default Title;