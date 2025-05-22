import { memo } from 'react';
import ArgentinaFlag from "../../assets/imgs/argentina.png";

const Name = memo(() => {
  return (
    <div className="w-full max-w-[90vw] mb-4">
      <div>

        <div className="flex flex-col">
          <span className="flex flex-start text-5xl">
            Javier
            <span className="hidden sm:inline text-indigo-300">E.</span>
            <span className="ml-1">SosaFuch</span>
          </span>

          <div className="rounded-md w-1/3 h-6 mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm relative px-2 py-4 bg-indigo-900/25">
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