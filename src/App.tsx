import {useRef} from 'react';
import './App.css';
import NavBar from './sections/navbar/Navbar';
import CardPresentation from './sections/cardPresentation/CardPresentation';
import Experiencies from './sections/experiencies/Experiencies.Section';
import Projects from './sections/projects/Projects.Section';
import Skills from './sections/skills/Skills.Section'
import AboutMe from './sections/aboutMe/AboutMe.Section';
import Education from './sections/education/Education.Section';

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
        pb-36 px-36
      "
    >
      <NavBar homeRef={homeRef} skillsRef={skillsRef} jobsRef={jobsRef} educationsRef={educationsRef} projectsRef={projectsRef} aboutMeRef={aboutMeRef}/>
      <>
        <div ref={homeRef} className="snap-start min-h-screen flex items-center justify-center ">
          <CardPresentation />
        </div>

        <div ref={skillsRef} className="snap-start min-h-screen flex items-center justify-center ">
          <Skills/>
        </div>

        <div ref={jobsRef} className="snap-start min-h-screen flex items-center justify-center ">
          <Experiencies />
        </div>

        <div ref={educationsRef} className="snap-start min-h-screen flex items-center justify-center ">
          <Education/>
        </div>

        <div ref={projectsRef} className="snap-start min-h-screen flex items-center justify-center ">
          <Projects />
        </div>

        <div ref={aboutMeRef} className="snap-start min-h-screen flex items-center justify-center ">
          <AboutMe/>
        </div>
      </>
    </div>
  );
}

export default App;