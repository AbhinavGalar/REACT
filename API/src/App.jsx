import axios from "axios"
import { useEffect, useState } from "react"
function App() {
  let [apidata, setApi]=useState([])
useEffect (()=>{
  axios.get('http://localhost:3000/student')
    .then(res=>{console.log(res.data);
      setApi(res.data)
   
   
    })
    
})





  return (
    <>
   {
    apidata.map((e)=>{return <h1>{e.name} {e.age}</h1>})            
   }
                                            
    </>
  )
}

export default App
// npm i react-icons
// react icons  
// npm i json-server
//  

