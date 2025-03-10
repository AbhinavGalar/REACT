import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/about" element={About}>
      
      
       </Route>
    </Routes>
    </>
  )
}

export default App
