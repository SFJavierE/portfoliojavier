import Welcome from './welcome/Welcome.Section'
import {useState, useRef, useEffect, useCallback} from 'react';

export default function CardPresentation() {
  const maxTilt = 5, // Default 5 max inclination degredes
  maxTranslate = 5, // Default a 5px max slides
  transitionDuration = 'duration-100'

  const componentRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (componentRef.current) {
      const componentRect = componentRef.current.getBoundingClientRect();

      const centerX = componentRect.left + componentRect.width / 2;
      const centerY = componentRect.top + componentRect.height / 2;

      // Calculate relative position from the mouse
      const x = event.clientX - centerX;
      const y = event.clientY - centerY;

      // Normalizer
      const normalizeX = x / (componentRect.width / 2);
      const normalizeY = y / (componentRect.height / 2);

      // Calculate inclination (tilt)
      const tiltX = -normalizeY * maxTilt;
      const tiltY = normalizeX * maxTilt;

      // Calcular el desplazamiento (translate)
      const translateX = normalizeX * maxTranslate;
      const translateY = normalizeY * maxTranslate;

      setTransformStyle({
        transform: `
          perspective(1000px)
          rotateX(${tiltX}deg)
          rotateY(${tiltY}deg)
          translateX(${translateX}px)
          translateY(${translateY}px)
        `,
      });
    }
  }, [maxTilt, maxTranslate]);

  const handleMouseLeave = useCallback(() => {
    // Reset transformacion
    setTransformStyle({
      transform: `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateX(0px)
        translateY(0px)
      `,
    });
  }, []);

  useEffect(() => {
    const componentElement = componentRef.current;
    if (!componentElement) return;

    componentElement.addEventListener('mousemove', handleMouseMove);
    componentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      componentElement.removeEventListener('mousemove', handleMouseMove);
      componentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div 
    ref={componentRef}
    
    className= "font-mono text-zinc-100 min-h-screen w-full overflow-x-hidden flex justify-center h-full items-center relative">
        <div 
        style={transformStyle}
        className={`relative ${transitionDuration} ease-out-quad will-change-transform `}>
          <Welcome />

        </div>
    </div>
  )
}