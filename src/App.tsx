import {Routes, Route} from 'react-router'
import Home from './routes/Home'
import PregnancyTimeline from './routes/PregnancyTimeline'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/pregnancy_timeline' element={<PregnancyTimeline /> } />      
    </Routes>
  )
}

export default App
