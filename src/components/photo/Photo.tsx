import { memo } from 'react';
import Me from '../../assets/imgs/yo.png';
import BorderFrame from '../borders/Border.Frame';

const Photo = memo(() => (
  <div className="w-full rounded-lg relative shadow-2xl shadow-indigo-950/70">
    <img 
      src={Me}
      className='opacity-80 hover:opacity-95 transition-opacity
      border-4 border-indigo-900/30 hover:border-indigo-700/50
      object-cover p-1 hover:scale-[1.02] transition-all duration-300
      bg-indigo-950/75 p-4'
      alt="Javier Sosa Fuch - Desarrollador Frontend"
      loading="lazy"
      decoding="async"
    />
    <BorderFrame topLeft={true} topRight={true} bottomLeft={true} bottomRight={true} borderSize={8} divSize={"1/4"}/>
  </div>
));

Photo.displayName = 'Photo';
export default Photo;