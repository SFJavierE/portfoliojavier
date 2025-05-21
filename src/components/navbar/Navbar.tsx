import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [showNavbar, setShowNavBar] = useState(false);

  const liBaseClasses = "mb-4 text-start p-2 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out";
  const liGradientClasses = "bg-gradient-to-l from-indigo-950/75 to-indigo-600/50 shadow-indigo-500 hover:from-indigo-800 hover:to-indigo-200/75 hover:shadow-indigo-200";

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
          ${showNavbar ? 'translate-x-0 bg-indigo-800/75' : '-translate-x-full bg-transparent pointer-events-none'}
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
            <Link to="/" className="block" onClick={() => setShowNavBar(false)}>
              Inicio
            </Link>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <Link to="/" className="block" onClick={() => setShowNavBar(false)}>
              Habilidades
            </Link>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <Link to="/experiencies" className="block" onClick={() => setShowNavBar(false)}>
              Experiencia
            </Link>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <Link to="/educations" className="block" onClick={() => setShowNavBar(false)}>
              Educación
            </Link>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <Link to="/projects" className="block" onClick={() => setShowNavBar(false)}>
              Proyectos
            </Link>
          </li>
          <li className={`${liBaseClasses} ${liGradientClasses}`}>
            <Link to="/aboutme" className="block" onClick={() => setShowNavBar(false)}>
              Sobre Mí
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}