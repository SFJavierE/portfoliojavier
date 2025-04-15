import './App.css'
import Welcome from './sections/welcome/Welcome'
import CardList from './components/card/Card'
import Technologies from './sections/technologies/Technologies'
import { Educations, Jobs, Projects } from './utils/lists/Lists'

function App() {
  return (
    <div className="font-mono text-zinc-100 bg-black min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:pt-12 md:pb-24">
        <Welcome />
        
        <main className="flex flex-col gap-8 md:gap-12 mt-6 md:mt-8">
          <Technologies />
          
          <div className="space-y-12 md:space-y-16">
            <CardList info={Jobs} />
            <CardList info={Educations} />
            <CardList info={Projects} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App