import axios from "axios"
import { useEffect } from "react"
function App() {
useEffect (()=>{
  axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res=>{console.log(res.data);

    })
  

})





  return (
    <>
      
    </>
  )
}

export default App
