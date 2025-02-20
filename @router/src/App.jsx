import Home from "./assets/Component/Home"
import About from "./assets/Component/About"
import Services from "./assets/Component/Services"
import { Route, Routes } from "react-router-dom"
// import { Route } from "react-router-dom"
function App() {

  return (
    <>
    <Routes>
<Route index element ={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/services" element={<Services/>} />

    </Routes>
    </>
  )
}

export default App
