import { memo } from 'react';
import { CardInfo } from "../../utils/interfaces/Interfaces";
import Description from "./description/Description";
import Title from "./title/Title";

const Card = memo(({ info }: { info: CardInfo }) => {
  const titleClasses = `
    text-xl md:text-2xl lg:text-3xl font-bold tracking-wide
    border-indigo-100 border-b-2 md:border-b-4 border-s-4 md:border-s-8
    rounded-sm p-1 md:p-2 shadow-lg shadow-indigo-950 bg-indigo-950/25
    inline-block w-full break-words
  `;

  return (
    <div className="w-full flex flex-col gap-3 md:gap-4">
      {/* Section Title */}
      <div className="w-full max-w-[90vw] mx-auto">
        <h2 className={titleClasses} aria-label={info.title}>
          {info.title}
        </h2>
      </div>

      {/* Info List */}
      <div className="mt-4 md:mt-6 lg:mt-8 space-y-4 md:space-y-5">
        {info.data.map((data, index) => (
          <article 
            key={`${data.place}-${index}`}
            className="w-full text-zinc-100 rounded-lg
              border-b md:border-none border-indigo-100/25
              pb-4 md:pb-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4">
              {/* Title Section */}
              <div className="md:col-span-1 md:pr-2">
                <Title title={data} />
              </div>

              {/* Description Section */}
              <div className="md:col-span-5 space-y-3 md:space-y-4">
                {data.description.map((description, descIndex) => (
                  <Description
                    key={`desc-${descIndex}-${data.place}`}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
});

Card.displayName = 'Card';
export default Card;