import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  let [apidata , setApi] = useState([])
  let [frmdata , setFrmdata] = useState([])

  function insertInp(e){
    const {name,value}=e.target
    setFrmdata({frmdata,[name]:value})
  }

  function del(id){
    axios.delete(`http://localhost:3000/student/${id}`)
    .then(r=>alert("Deleted"))
  }

  useEffect(()=>{
    axios.get('http://localhost:3000/student')
    .then(res=>{console.log(res.data)
      setApi(res.data)
    })
  },[del])

  return (
    <>
    <table border={""}>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Contact</th>
        <th>City</th>
        <th>Delet</th>
      </tr>
      {
        apidata.map((e)=>{
          return<>
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.contact}</td>
            <td>{e.city}</td>
            <td><button onClick={()=>del(e.id)}>Delet</button></td>
          </tr>
          </>
        })
      }
    </table>

    <h1>Insert Form</h1>

    <form action="" onSubmit={(e)=>{e.preventDefault(); axios.post('http://localhost:3000/studens',frmdata)}}>
      <label htmlFor="">Name</label>
      <input type="text" onChange={insertInp} name='name'/> <br></br>

      <label htmlFor="">Age</label>
      <input type="text" onChange={insertInp} name='age'/> <br></br>

      <label htmlFor="">Contact</label>
      <input type="text" onChange={insertInp} name='contact'/> <br></br>

      <label htmlFor="">City</label>
      <input type="text" onChange={insertInp} name='city'/> <br></br>

      <input type="submit" onClick={()=>inse(e.id)} />
    </form>
    </>
  )
}

export default App
