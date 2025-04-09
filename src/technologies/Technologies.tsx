import { ReactElement, useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';
import { GetElementList } from './TechnologiesList';

export default function Technologies() {
    
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const rootRefs = useRef<ReactDOM.Root[]>([]);
    const positionRef = useRef(0);
    const isPausedRef = useRef(false);
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