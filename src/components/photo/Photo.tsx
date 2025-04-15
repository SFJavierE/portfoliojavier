import { memo } from 'react';
import Me from '../../assets/imgs/yo.png';

const Photo = memo(() => (
  <img 
    src={Me}
    alt="Javier Sosa Fuch - Desarrollador Frontend"
    className="w-full h-full rounded-full shadow-2xl shadow-indigo-950/70
             bg-indigo-950/25 opacity-80 hover:opacity-95 transition-opacity
             border-4 border-indigo-900/30 hover:border-indigo-700/50
             object-cover p-1 hover:scale-[1.02] transition-all duration-300"
    loading="lazy"
    decoding="async"
  />
));

Photo.displayName = 'Photo';
export default Photo;