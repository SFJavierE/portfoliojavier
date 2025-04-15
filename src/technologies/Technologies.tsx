import { ReactElement, useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom/client';
import { Technologies as technologiesList } from "../utils/lists/Lists"; 
import { ChildrenSVG, SVGs } from "../utils/interfaces/Interfaces";

export default function Technologies() {
    
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const rootRefs = useRef<ReactDOM.Root[]>([]);
    const positionRef = useRef(0);
    const isPausedRef = useRef(false);
    
    function SVG ({name, children} : SVGs) : ReactElement{
        const [isHovered, setIsHovered] = useState(false);

        return(
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
                {isHovered && (
                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-indigo-800 text-indigo-100 text-xs px-2 py-1 rounded whitespace-nowrap">
                        {name}
                        <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-800 transform rotate-45"></div>
                    </div>
                )}
            </div>
        )
    }

    const GetElementList = () : ReactElement[] => {
        const CreateElements = () : ReactElement[] => {
            const elementsList : ReactElement[] = [];
            technologiesList.map((tech : ChildrenSVG) => {
                elementsList.push(
                    <SVG name={tech.key!} key={tech.key}>
                        {tech}
                    </SVG>
                )
            })

            return elementsList;
        }

        return CreateElements();
    }
    const elements : ReactElement[] = GetElementList();


    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clean
        rootRefs.current.forEach(root => root.unmount());
        rootRefs.current = [];
        container.innerHTML = '';

        // Create Container
        const wrapper = document.createElement('div');
        wrapper.className = 'flex relative h-full';
        container.appendChild(wrapper);

        // Create UL
        const ul = document.createElement('ul');
        ul.className = 'flex space-x-8 h-full items-center absolute top-0 left-0';
        
        // Create UL Clone
        const clone = document.createElement('ul');
        clone.className = 'ml-6 flex space-x-8 h-full items-center absolute top-0 left-0';

        // Renderer Technologies
        elements.forEach((tech) => {
            // Original UL
            const li = document.createElement('li');
            li.className = 'flex-shrink-0 hover:scale-125 transition-transform duration-300';
            const root = ReactDOM.createRoot(li);
            root.render(tech);
            rootRefs.current.push(root);
            ul.appendChild(li);

            // Clone UL
            const liClone = document.createElement('li');
            liClone.className = 'flex-shrink-0 hover:scale-125 transition-transform duration-300';
            const rootClone = ReactDOM.createRoot(liClone);
            rootClone.render(tech);
            rootRefs.current.push(rootClone);
            clone.appendChild(liClone);
        });

        wrapper.appendChild(ul);
        wrapper.appendChild(clone);

        // Clon Initial Position
        clone.style.transform = `translateX(${ul.offsetWidth}px)`;

        const animate = () => {
            if (isPausedRef.current) {
                return;
            }

            // Move velocity
            positionRef.current -= .5;
            
            // Restart
            if (positionRef.current <= -ul.offsetWidth) {
                positionRef.current = 0;
            }

            // Move UL and Clone
            ul.style.transform = `translateX(${positionRef.current}px)`;
            clone.style.transform = `translateX(${positionRef.current + ul.offsetWidth}px)`;
            
            animationRef.current = requestAnimationFrame(animate);
        };

        // Pause
        const handleMouseEnter = () => {
            isPausedRef.current = true;
            ul.style.transition = 'transform 0.3s ease-out';
            clone.style.transition = 'transform 0.3s ease-out';
        };

        // Continue
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
    }, [elements]);

    return (
        <div 
            ref={containerRef}
            className="w-full overflow-hidden h-40"
        />
    );
}