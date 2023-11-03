// Components
import Welcome from './components/welcome/Welcome';
import Technologies from './components/technologies/Technologies';
import Projects from './components/projects/Projects';
import Experiencies from './components/experiencies/Experiencies';
import Achievements from './components/achievements/Achievements';
import Navbar from './components/navbar/Navbar';
import ContactComponent from './components/contacts/ContactComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='container-fluid py-4 px-5'>
      <div className=''>
        <div className='mb-5'>
          <Welcome></Welcome>
        </div>
        <div className='sticky-top'>
          <Navbar></Navbar>
          <ContactComponent/>
        </div>
        <div className=''>
          <Technologies></Technologies>
          <Projects></Projects>
          <Experiencies></Experiencies>
          <Achievements></Achievements>
        </div>
      </div>
    </div>
  );
}

export default App;
