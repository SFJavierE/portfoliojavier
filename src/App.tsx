import './App.css'
import Presentation from './presentation/Presentation'
import CardList from './cardList/CardList'
import Technologies from './technologies/Technologies'
import { listJobs } from './experiencie/ListJobs'
import { listEducations } from './education/ListEducations'
import { listProjects } from './projects/ListProjects'

function App() {
  return (
    <div className="font-mono text-zinc-100 bg-black min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-[100vw] md:max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Presentation/>
        
        <div className="flex flex-col gap-8 md:mt-6">
          <Technologies/>
          
          <div className="space-y-10">
            <CardList info={listJobs}/>
            <CardList info={listEducations}/>
            <CardList info={listProjects}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App