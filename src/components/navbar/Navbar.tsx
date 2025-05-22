import { useState } from 'react';
import { Refs } from '../../utils/interfaces/Interfaces';
import ButtonsPresentation from '../buttons/presentation/ButtonsPresentation';

export default function NavBar({ homeRef, skillsRef, jobsRef, educationsRef, projectsRef, aboutMeRef } : Refs) {
  const [showNavbar, setShowNavBar] = useState(false);

  const liBaseClasses : string = "mb-4 text-start p-2 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out";
  const liGradientClasses : string = "bg-gradient-to-l from-indigo-950/75 to-indigo-600/50 shadow-indigo-500 hover:from-indigo-800 hover:to-indigo-200/75 hover:shadow-indigo-200";

  const scrollToSection  = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',      // Alinea el inicio de la sección con el inicio de la ventana
      });
      setShowNavBar(false)
    }
  };

  return (
    <>
      <button
        className={`
          fixed top-4 left-4 z-[100] p-2 rounded-md
          transition-all duration-300 ease-in-out
          ${showNavbar ? 'bg-indigo-700 text-white' : 'bg-indigo-950 text-white'}
          hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500
        `}
        onClick={() => setShowNavBar(!showNavbar)}
        aria-label={showNavbar ? "Cerrar navegación" : "Abrir navegación"}
      >
        {showNavbar ? "←" : "☰"}
      </button>

      <nav
        className={`
          fixed top-0 left-0 h-screen w-48 p-4 z-50
          transform transition-transform duration-300 ease-in-out
          ${showNavbar ? 'translate-x-0 bg-gradient-to-br from-indigo-500/50 to-indigo-900/75' : '-translate-x-full bg-transparent pointer-events-none'}
        `}
      >
        <ul
          className={`
            flex flex-col mt-16
            transition-opacity duration-300 ease-in-out
            ${showNavbar ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <button className="block" onClick={() => scrollToSection(homeRef)}>
              Inicio
            </button>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <button className="block" onClick={() => scrollToSection(skillsRef)}>
              Habilidades
            </button>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <button className="block" onClick={() => scrollToSection(jobsRef)}>
              Experiencia
            </button>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <button className="block" onClick={() => scrollToSection(educationsRef)}>
              Educación
            </button>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <button className="block" onClick={() => scrollToSection(projectsRef)}>
              Proyectos
            </button>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <button className="block" onClick={() => scrollToSection(aboutMeRef)}>
              Sobre Mí
            </button>
          </li>
        </ul>
        <ButtonsPresentation classContainer="grid grid-cols-3 mt-60 gap-x-5 gap-y-2"/>
      </nav>
    </>
  );
}