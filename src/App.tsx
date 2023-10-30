import Welcome from './components/welcome/Welcome';
import Technologies from './components/technologies/Technologies';
import Proyects from './components/projects/Projects';
import Experiencies from './components/experiencies/Experiencies';
import Achievements from './components/achievements/Achievements';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {
  return (
    <div className="bg-dark">
      <div className='row'>
        <div className='col-2' id='sticky-sidebar'>
          <div className='sticky-top'>
            <Navbar></Navbar>
          </div>
        </div>
        <div className='ps-2 pe-4 py-3 text-info col'>
          <Welcome></Welcome>
          <Technologies></Technologies>
          <Proyects></Proyects>
          <Experiencies></Experiencies>
          <Achievements></Achievements>
        </div>
      </div>
    </div>
  );
}

export default App;
