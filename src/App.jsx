import './App.css'
import { Routes, Route } from 'react-router-dom'
import Introduce from './Introduce/Introduce'
import Question from './Questions/Question'
import Answers from './Answers/Answers'

function App() {

  return (
    <>
      <div className='main'>
        <div className='main-container'>
          <Routes>
            <Route path='/' element={<Introduce />} />
            <Route path='/Quiz' element={<Question />} />
            <Route path='/Answers' element={<Answers/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
