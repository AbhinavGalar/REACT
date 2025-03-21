
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Navbar from './Navbar'
import Play from './Play'

function App() {

  return (
    <>
     <Layout/>
     <Navbar>
          <Routes>
            <Route path='/play' element={<Play/>}/>
          </Routes>

     </Navbar>
    </>
  )
}

export default App
