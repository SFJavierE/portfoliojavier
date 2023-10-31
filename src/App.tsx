// Components
import Welcome from './components/welcome/Welcome';
import Technologies from './components/technologies/Technologies';
import Proyects from './components/projects/Projects';
import Experiencies from './components/experiencies/Experiencies';
import Achievements from './components/achievements/Achievements';
import ContactComponent from './components/contacts/ContactComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark">
      <div className='px-5 py-4 text-info'>
        <Welcome></Welcome>
        <ContactComponent></ContactComponent>
        <Technologies></Technologies>
        <Proyects></Proyects>
        <Experiencies></Experiencies>
        <Achievements></Achievements>
      </div>
    </div>
  );
}

export default App;
