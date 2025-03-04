import React from 'react'
import Form from './Form'
import { Router,Route, Routes } from 'react-router-dom'
import Login from './Login'
function App() {

  return (
    <>
    <h1>hello</h1>


<Routes>
  <Route index element={<Form/>} />
  <Route path='/login' element={<Login/>} />
</Routes>
    
    {/* making of router 
    
    npm  i react-router-dom
    
    */}
    </>
  )
}

export default App
