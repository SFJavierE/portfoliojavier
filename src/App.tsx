import { useEffect, useState } from 'react';
// Components
import Welcome from './components/welcome/Welcome';
import Technologies from './components/technologies/Technologies';
import Proyects from './components/projects/Projects';
import Experiencies from './components/experiencies/Experiencies';
import Achievements from './components/achievements/Achievements';
import ContactComponent from './components/contacts/ContactComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userInTop, setUserInTop] = useState<boolean>(true);

  // Determine the user's position
  // Set the 'userInTop' constant to 'false' if the user is not near the top,
  // or continue with 'true' if the user is near the top.
  useEffect(() => {
    const informationSection = document.getElementById('information-section');
    const topPositionThreshold = 200;

    if (informationSection) {
      const sectionPosition = informationSection.offsetTop;
      const userScrollPosition = window.scrollY;
      
      if (userScrollPosition > topPositionThreshold || userScrollPosition > sectionPosition) {
        setUserInTop(false);
      }
    }
  }, []);

  // Add a click event to the button to scroll the user to the bottom.
  // This useEffect is triggered when the value of 'userInTop' changes,
  // and it handles the process of adding an event listener when 'userInTop' is true.
  useEffect(() => {
    if(userInTop){
      const handleScrollButtonClick = () => {
        const informationSection = document.getElementById('information-section');
        if (informationSection) {
          const section2Position = informationSection.offsetTop;
          setUserInTop(false);
          window.scrollTo({
            top: section2Position,
            behavior: 'smooth',
          });
        }
      };
  
      const scrollButton = document.getElementById('scrollButtonB');
      if (scrollButton) {
        scrollButton.addEventListener('click', handleScrollButtonClick);
      }

      return () => {
        if (scrollButton) {
          scrollButton.removeEventListener('click', handleScrollButtonClick);
        }
      };
    }
  }, [userInTop]);

  return (
    <div className="bg-dark">
      <div className='px-5 py-4 text-info'>
        <div className="d-flex container-fluid justify-content-center align-items-center mb-5" style={{height: '100vh'}}>
          <Welcome></Welcome>
          {
            userInTop &&
            <button
              className='fixed-bottom bg-light border-secondary opacity-50 text-secondary'
              style={{width: '100%', height: '25px'}}
              id='scrollButtonB'
            >
              v
            </button>
          }
        </div>
        <div className='d-flex align-items-center justify-content-center' style={{height: '100vh'}}>
          {
            !userInTop &&
            <button
              className='fixed-top bg-light border-secondary opacity-50 text-secondary'
              style={{width: '100%', height: '25px'}}
              onClick={() => {
                setUserInTop(true);
                window.scrollTo({
                  top: -(document.body.scrollHeight),
                  behavior: 'smooth'
                })
              }}
            >
              v
            </button>
          }
          <div className='container-fluid' id='information-section' style={{maxHeight: '80vh', overflowY: 'auto'}}>
            <ContactComponent></ContactComponent>
            <Technologies></Technologies>
            <Proyects></Proyects>
            <Experiencies></Experiencies>
            <Achievements></Achievements>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
