import { createContext } from "react"
import Child1 from "./Child1"
import Child5 from "./Child5"

let  cdata= createContext()
let name="abhinav"   

function App() {
  return (
    <>
     {/* <cdata.Provider value={name}> */}
      <Child1/>
      {/* <Child5/> */}
      {/* </cdata.Provider> */}
    </>
  )
}

export default App
export {cdata}