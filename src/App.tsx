import {useRef} from 'react';
import './App.css';
import CardPresentation from './sections/cardPresentation/CardPresentation';
import Card from './components/card/Card';
import { Educations, Jobs, Projects } from './utils/lists/Lists';
import NavBar from './components/navbar/Navbar'; // Asumiendo que tienes un NavBar

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  const educationsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="
        w-full min-h-screen
        scroll-smooth
        snap-y snap-mandatory
      "
    >
      <NavBar homeRef={homeRef} skillsRef={skillsRef} jobsRef={jobsRef} educationsRef={educationsRef} projectsRef={projectsRef} aboutMeRef={aboutMeRef}/>
      <>
        <div ref={homeRef} className="snap-start min-h-screen flex items-center justify-center ">
          <CardPresentation />
        </div>

        <div ref={skillsRef} className="snap-start min-h-screen flex items-center justify-center ">
          
        </div>

        <div ref={jobsRef} className="snap-start min-h-screen flex items-center justify-center ">
          <Card info={Jobs} />
        </div>

        <div ref={educationsRef} className="snap-start min-h-screen flex items-center justify-center ">
          <Card info={Educations} />
        </div>

        <div ref={projectsRef} className="snap-start min-h-screen flex items-center justify-center ">
          <Card info={Projects} />
        </div>

        <div ref={aboutMeRef} className="snap-start min-h-screen flex items-center justify-center ">
          
        </div>
      </>
    </div>
  );
}

export default App;