import { memo } from 'react';
import { CardInfo } from "../../utils/interfaces/Interfaces";
import Description from "./description/Description";
import Title from "./title/Title";
import NavBar from '../navbar/Navbar';

const Card = memo(({ info }: { info: CardInfo }) => {
  return (
    <div className="px-36 py-12 w-full flex flex-col gap-3 md:gap-4">
      <NavBar/>
      {/* Section Title */}
      <div className="from-indigo-800 to-indigo-200/75 w-full py-3 pl-4 text-start text-3xl rounded-md bg-gradient-to-r text-gray-200 font-bold">
          {info.title}
      </div>

      {/* Info List */}
      <div className="mt-6">
        {info.data.map((data, index) => (
          <article 
            key={`${data.place}-${index}`}
            className="w-full text-zinc-100 rounded-lg
              border-b md:border-none border-indigo-100/25
              mb-6"
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