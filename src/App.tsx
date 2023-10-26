import Welcome from './components/welcome/Welcome';
import Technologies from './components/technologies/Technologies';
import Proyects from './components/projects/Projects';
import Achievements from './components/achievements/Achievements';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="bg-dark d-flex flex-row">
      <div>
        <Navbar></Navbar>
      </div>
      <div className='p-5 text-info'>
        <Welcome></Welcome>
        <hr />
        <Technologies></Technologies>
        <hr />
        <Proyects></Proyects>
        <hr />
        <Achievements></Achievements>
      </div>
    </div>
  );
}

export default App;
