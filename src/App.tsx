import { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
// Components
import Welcome from './components/welcome/Welcome';
import Technologies from './components/technologies/Technologies';
import Proyects from './components/projects/Projects';
import Experiencies from './components/experiencies/Experiencies';
import Achievements from './components/achievements/Achievements';
import ContactComponent from './components/contacts/ContactComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [openCollapseNavbar, setOpenCollapseNavbar] = useState<boolean>(false);

  return (
    <div className="bg-dark" style={{width: '100%', height: '100%'}}>
      <div className='px-5 py-3 text-info'>
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
