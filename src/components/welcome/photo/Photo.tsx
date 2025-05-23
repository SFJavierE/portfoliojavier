import { memo } from 'react';
import Me from '../../../assets/imgs/yo.png'
import Technologies from '../technologies/Technologies';

const Photo = memo(() => (
  <div className="w-full relative shadow-2xl shadow-indigo-950/70">
    <img 
      src={Me}
      className='rounded-md opacity-80 hover:opacity-95 transition-opacity
      border-4 border-indigo-900/30 hover:border-indigo-700/50
      object-cover p-1 transition-all duration-300
      bg-indigo-950/75'
      alt="Javier Sosa Fuch - Desarrollador Frontend"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm">
      <Technologies/>
    </div>
  </div>
));

Photo.displayName = 'Photo';
export default Photo;