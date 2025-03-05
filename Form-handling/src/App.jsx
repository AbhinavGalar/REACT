import './App.css'
import React from 'react'
import Frm from './Frm'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <>
    <Routes>
    <Route index element={<Frm/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
     {/* <Frm/> */}
    </>
  )
}

export default App
