import './App.css'
import Presentation from './presentation/Presentation'
import Navbar from './navbar/Navbar'
import CardList from './cardList/CardList'
import Technologies from './technologies/Technologies'
import { listJobs } from './experiencie/ListJobs'
import { listEducations } from './education/ListEducations'
import { listProjects } from './projects/ListProjects'

function App() {
  return (
    <div className="font-mono text-zinc-100 bg-black px-80 py-40">
      <Navbar/>
      <div className="">
        <Presentation/>
        <br/>
        <div className='mt-12'>
          <Technologies/>
        </div>
        <br />
        <div className='mt-16'>
          <CardList info={listJobs}/>
        </div>
        <br />
        <div className='mt-16'>
          <CardList info={listEducations}/>
        </div>
        <div className='mt-16'>
          <CardList info={listProjects}/>
        </div>
      </div>
    </div>
  )
}

export default App
