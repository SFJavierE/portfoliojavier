import { AngularIcon, BootstrapIcon, JiraIcon, NETIcon, ReactIcon, RubyOnRailsIcon, TailwindIcon, TypescriptIcon, UnityIcon, UnrealEngineIcon } from "../icons/Icons";
import { ReactElement, useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';

export default function Technologies() {
    const classNameIcons = "h-16 w-16 text-indigo-300/75 hover:text-indigo-900/75 transition-all duration-300";
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    const rootRefs = useRef<ReactDOM.Root[]>([]);
    const positionRef = useRef(0);
    const isPausedRef = useRef(false);

    const technologies: ReactElement[] = [
        <UnityIcon key="unity" className={classNameIcons} />,
        <UnrealEngineIcon key="unreal" className={classNameIcons} />,
        <TailwindIcon key="tailwind" className={classNameIcons} />,
        <BootstrapIcon key="bootstrap" className={classNameIcons} />,
        <ReactIcon key="react" className={classNameIcons} />,
        <TypescriptIcon key="typescript" className={classNameIcons} />,
        <AngularIcon key="angular" className={classNameIcons} />,
        <RubyOnRailsIcon key="ruby" className={classNameIcons} />,
        <NETIcon key="net" className={classNameIcons} />,
        <JiraIcon key="jira" className={classNameIcons} />
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Limpieza inicial
        rootRefs.current.forEach(root => root.unmount());
        rootRefs.current = [];
        container.innerHTML = '';

        // Crear contenedor principal para ambos UL
        const wrapper = document.createElement('div');
        wrapper.className = 'flex relative h-full';
        container.appendChild(wrapper);

        // Crear UL original
        const ul = document.createElement('ul');
        ul.className = 'flex space-x-8 h-full items-center absolute top-0 left-0';
        
        // Crear UL clonado
        const clone = document.createElement('ul');
        clone.className = 'ml-6 flex space-x-8 h-full items-center absolute top-0 left-0';

        // Renderizar elementos en ambos UL
        technologies.forEach((tech, index) => {
            // Para UL original
            const li = document.createElement('li');
            li.className = 'flex-shrink-0 hover:scale-125 transition-transform duration-300';
            const root = ReactDOM.createRoot(li);
            root.render(tech);
            rootRefs.current.push(root);
            ul.appendChild(li);

            // Para clon (mismo elemento)
            const liClone = document.createElement('li');
            liClone.className = 'flex-shrink-0 hover:scale-125 transition-transform duration-300';
            const rootClone = ReactDOM.createRoot(liClone);
            rootClone.render(tech);
            rootRefs.current.push(rootClone);
            clone.appendChild(liClone);
        });

        wrapper.appendChild(ul);
        wrapper.appendChild(clone);

        // Ajustar posición inicial del clon
        clone.style.transform = `translateX(${ul.offsetWidth}px)`;

        const animate = () => {
            if (isPausedRef.current) {
                return;
            }

            positionRef.current -= .5; // Velocidad de desplazamiento
            
            // Reinicio suave
            if (positionRef.current <= -ul.offsetWidth) {
                positionRef.current = 0;
            }

            // Aplicar la misma transformación a ambos elementos
            ul.style.transform = `translateX(${positionRef.current}px)`;
            clone.style.transform = `translateX(${positionRef.current + ul.offsetWidth}px)`;
            
            animationRef.current = requestAnimationFrame(animate);
        };

        // Eventos para pausar/reanudar
        const handleMouseEnter = () => {
            isPausedRef.current = true;
            ul.style.transition = 'transform 0.3s ease-out';
            clone.style.transition = 'transform 0.3s ease-out';
        };

        const handleMouseLeave = () => {
            ul.style.transition = 'none';
            clone.style.transition = 'none';
            isPausedRef.current = false;
            animate();
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        animate();

        return () => {
            cancelAnimationFrame(animationRef.current!);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            rootRefs.current.forEach(root => root.unmount());
        };
    }, [technologies, classNameIcons]);

    return (
        <div 
            ref={containerRef}
            className="w-full overflow-hidden py-4 relative h-20 border-l-2 border-r-2 border-indigo-100/50"
        />
    );
}