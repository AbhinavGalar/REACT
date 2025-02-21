import Home from "./assets/Component/Home"
import About from "./assets/Component/About"
import Services from "./assets/Component/Services"
import { Route, Routes } from "react-router-dom"
// import { Route } from "react-router-dom"
import Navbar from "./assets/Component/Navbar"
import Footer from "./assets/Component/Footer"
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
<Route index element ={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/services" element={<Services/>} />

    </Routes>

    <Footer/>
    </>
  )
}

export default App
