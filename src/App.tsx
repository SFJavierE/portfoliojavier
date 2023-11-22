import { useMediaQuery } from 'react-responsive';
// Components ||||||||||||
//Welcome ---------------
import WelcomeComponet from './components/welcome/WelcomeComponent';
// Navbar ---------------
import NavbarComponent from './components/navbar/NavbarComponent';
import ContactComponent from './components/contacts/ContactComponent';
// Datas ----------------
import Technologies from './components/technologies/TechnologiesComponent';
import EducationComponent from './components/education/EducationComponent';
import ProjectsComponent from './components/projects/ProjectsComponent';
import ExperienciesComponent from './components/experiences/ExperiencesComponent';
import AchievementsComponent from './components/achievements/AchievementsComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isMobile : boolean = useMediaQuery({maxWidth: 1000});

  return (
    <div className={isMobile ? 'container-fluid py-4 px-3 text-cold-4' :'container-fluid py-4 px-5 text-cold-4'}>
      <div>
        <div className={!isMobile ? 'sticky-top pt-2' : 'pt-2'}>
          <NavbarComponent/>
          <ContactComponent/>
        </div>
        <div className='my-5'>
          <WelcomeComponet/>
        </div>
        <div>
          <div id="education"/>
          <Technologies></Technologies>
          <EducationComponent/>
          <div id="projects"/>
          <ProjectsComponent/>
          <div id="experiencie"/>
          <ExperienciesComponent/>
          <div id="achievements"/>
          <AchievementsComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
