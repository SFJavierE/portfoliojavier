import { useEffect, useRef, memo, useCallback, useMemo } from "react";
import ReactDOM from 'react-dom/client';
import { Technologies as technologiesList } from "../../utils/lists/Lists"; 
import { ChildrenSVG} from "../../utils/interfaces/Interfaces";


const Technologies = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const rootRefs = useRef<ReactDOM.Root[]>([]);
    const positionRef = useRef(0);
    const isPausedRef = useRef(false);
    
    const elements = useMemo(() => 
        technologiesList.map((tech: ChildrenSVG) => (
            <div key={tech.key}>
                {tech}
            </div>
        )), []
    );

    const setupDOM = useCallback(() => {
        if (!containerRef.current) return;
        
        const container = containerRef.current;
        container.innerHTML = '';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'flex h-full';
        
        const originalList = document.createElement('ul');
        originalList.className = 'flex space-x-6 h-full items-center absolute top-0 left-0';
        
        const clonedList = document.createElement('ul');
        clonedList.className = 'flex space-x-8 h-full items-center absolute top-0 left-6';
    
        elements.forEach((tech) => {
            const li = document.createElement('li');
            li.className = 'flex-shrink-0 transition-transform duration-300';
            const root = ReactDOM.createRoot(li);
            root.render(tech);
            rootRefs.current.push(root);
            originalList.appendChild(li);
    
            const liClone = document.createElement('li');
            liClone.className = 'flex-shrink-0 transition-transform duration-300';
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

    useEffect(() => {
        const { originalList, clonedList } = setupDOM() || {};
        if (!originalList || !clonedList) return;

        animate();

        return () => {
            rootRefs.current.forEach(root => root.unmount());
        };
    }, [setupDOM, animate]);

    return (
        <div className={`z-50 h-12 w-full rounded-ee-md rounded-ss-md bg-gradient-to-r from-indigo-950/75 to-indigo-600/25 relative overflow-hidden`}>
            <div 
                ref={containerRef}
                className="w-full h-20 rounded-md"
                aria-label="Tecnologías dominadas"
            />
        </div>
    );
};

export default memo(Technologies);