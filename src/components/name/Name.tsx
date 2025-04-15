import { memo } from 'react';
import ArgentinaFlag from "../../assets/imgs/argentina.png";

const Name = memo(() => {
  return (
    <div className="w-full max-w-[90vw] mx-auto mb-4">
      <div className="tracking-wide font-bold border-b-2 sm:border-b-4 border-s-4 sm:border-s-8 border-indigo-100 rounded-sm p-1 sm:p-2 bg-indigo-950/25 shadow-lg shadow-indigo-950">

        <div className="flex flex-col">
          <span className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl break-words">
            Javier
            <span className="hidden sm:inline text-indigo-300"> E.</span>
            <span className="ml-1"> Sosa Fuch</span>
          </span>

          <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm">
            <span>De Argentina</span>
            <img 
              src={ArgentinaFlag}
              className="h-4 w-4 sm:h-5 sm:w-5"
              alt="Bandera Argentina"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

Name.displayName = 'Name';
export default Name;