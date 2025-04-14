import { CardInfo } from "../interfaces/Interfaces";
import { Description } from "./Description";
import { PlaceJob } from "./PlaceJob";

export default function CardList({ info }: { info: CardInfo }) {
    return (
      <div className="w-full flex flex-col gap-2 md:gap-4">
        {/* Título con estilo similar al Name */}
        <div className="w-full max-w-[90vw] mx-auto">
          <span className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide
            border-indigo-100 border-b-2 md:border-b-4 border-s-4 md:border-s-8
            rounded-sm p-1 md:p-2 shadow-lg shadow-indigo-950 bg-indigo-950/25
            inline-block w-full break-words">
            {info.title}
          </span>
        </div>
  
        {/* Contenido responsive */}
        <div className="mt-4 md:mt-6 lg:mt-8">
          {info.data.map((data) => (
            <div key={data.place} className="mb-3 md:mb-4 w-full text-start text-zinc-100
              py-2 md:py-3 rounded-lg flex flex-col md:grid md:grid-cols-6
              md:gap-x-4 gap-y-2 md:gap-y-0">
              
              {/* Sección PlaceJob - Mobile first */}
              <div className="md:col-span-1 pb-2 md:pb-0 border-b md:border-none
                border-indigo-100/25">
                <PlaceJob job={data} />
              </div>
  
              {/* Descripciones - Alineación responsive */}
              <div className="md:col-span-5 space-y-2 md:space-y-3 pl-0 md:pl-4">
                {data.description.map((description, index) => (
                  <div key={index} className="mb-2 md:mb-3">
                    <Description description={description} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }