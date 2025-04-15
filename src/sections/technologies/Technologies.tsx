import { ReactElement, useEffect, useRef, useState, memo, useCallback, useMemo } from "react";
import ReactDOM from 'react-dom/client';
import { Technologies as technologiesList } from "../../utils/lists/Lists"; 
import { ChildrenSVG, SVGs } from "../../utils/interfaces/Interfaces";

const SVG = memo(({ name, children }: SVGs): ReactElement => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
        >
            {children}
            {isHovered && (
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-indigo-800 text-indigo-100 text-xs px-2 py-1 rounded whitespace-nowrap">
                    {name}
                    <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-800 transform rotate-45"></div>
                </div>
            )}
        </div>
    );
});

const Technologies = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const rootRefs = useRef<ReactDOM.Root[]>([]);
    const positionRef = useRef(0);
    const isPausedRef = useRef(false);
    
    const elements = useMemo(() => 
        technologiesList.map((tech: ChildrenSVG) => (
            <SVG name={tech.key!} key={tech.key}>
                {tech}
            </SVG>
        )), []
    );

    const setupDOM = useCallback(() => {
        if (!containerRef.current) return;
        
        const container = containerRef.current;
        container.innerHTML = '';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'flex relative h-full';
        
        const originalList = document.createElement('ul');
        originalList.className = 'flex space-x-8 h-full items-center absolute top-0 left-0';
        
        const clonedList = document.createElement('ul');
        clonedList.className = 'flex space-x-8 h-full items-center absolute top-0 left-6';
    
        elements.forEach((tech) => {
            const li = document.createElement('li');
            li.className = 'flex-shrink-0 hover:scale-125 transition-transform duration-300';
            const root = ReactDOM.createRoot(li);
            root.render(tech);
            rootRefs.current.push(root);
            originalList.appendChild(li);
    
            const liClone = document.createElement('li');
            liClone.className = 'flex-shrink-0 hover:scale-125 transition-transform duration-300';
            const rootClone = ReactDOM.createRoot(liClone);
            rootClone.render(tech);
            rootRefs.current.push(rootClone);
            clonedList.appendChild(liClone);
        });
    
        wrapper.appendChild(originalList);
        wrapper.appendChild(clonedList);
        container.appendChild(wrapper);
    
        clonedList.style.transform = `translateX(${originalList.offsetWidth}px)`;
    
        return { originalList, clonedList };
    }, [elements]);
    
    const animate = useCallback(() => {
        if (isPausedRef.current || !containerRef.current) return;
    
        const lists = containerRef.current.querySelectorAll('ul');
        const originalList = lists[0];
        const clonedList = lists[1];
    
        if (!originalList || !clonedList) return;
    
        const listWidth = originalList.offsetWidth;
    
        positionRef.current -= 0.5;
        
        if (positionRef.current <= -listWidth) {
            positionRef.current = 0;
        }
    
        originalList.style.transform = `translateX(${positionRef.current}px)`;
        clonedList.style.transform = `translateX(${positionRef.current + listWidth}px)`;
        
        animationRef.current = requestAnimationFrame(animate);
    }, []);

    const handleMouseEnter = useCallback(() => {
        isPausedRef.current = true;
    }, []);

    const handleMouseLeave = useCallback(() => {
        isPausedRef.current = false;
        animate();
    }, [animate]);

    useEffect(() => {
        const { originalList, clonedList } = setupDOM() || {};
        if (!originalList || !clonedList) return;

        animate();

        const container = containerRef.current;
        container?.addEventListener('mouseenter', handleMouseEnter);
        container?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationRef.current!);
            container?.removeEventListener('mouseenter', handleMouseEnter);
            container?.removeEventListener('mouseleave', handleMouseLeave);
            rootRefs.current.forEach(root => root.unmount());
        };
    }, [setupDOM, animate, handleMouseEnter, handleMouseLeave]);

    return (
        <div 
            ref={containerRef}
            className="w-full overflow-hidden h-40"
            aria-label="Tecnologías dominadas"
        />
    );
};

export default memo(Technologies);