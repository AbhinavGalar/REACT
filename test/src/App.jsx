import { Route, Routes } from "react-router-dom"
import List from "./List"
import Welcome from "./Welcome"
 
 
function App() {

  return (
    <>
     {/* <Welcome/> */}

         <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="list" element={<List/>} />
                 
            
         
        </Routes> 




    </>
  )
}

export default App
