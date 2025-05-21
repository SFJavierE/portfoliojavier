import './App.css'
import CardPresentation from './sections/cardPresentation/CardPresentation'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Card from './components/card/Card'
import { Educations, Jobs, Projects } from './utils/lists/Lists'

function App() {
  return(
    <div className='w-full'>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path='/' element={<CardPresentation/>}></Route>
            <Route path='/experiencies' element={<Card info={Jobs}/>}></Route>
            <Route path='/educations' element={<Card info={Educations}/>}></Route>
            <Route path='/projects' element={<Card info={Projects}/>}></Route>
            <Route path='/aboutme' element={<CardPresentation/>}></Route>
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  )
}

export default App