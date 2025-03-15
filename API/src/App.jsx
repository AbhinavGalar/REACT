import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  let [apidata , setApi] = useState([])
  let [frmdata , setFrmdata] = useState([])
let[shwfrm,setshwfrm]=useState(flase)

let[editdata,seteditdata]=useState({})

  function insertInp(e){
    const {name,value}=e.target
    setFrmdata({frmdata,[name]:value})
  }

  function del(id){
    axios.delete(`http://localhost:3000/student/${id}`)
    .then(r=>alert("Deleted"))
  }
  function datasubmit(e){
e.preventDefault()
axios.post('http://localhost:3000/student',frmdata)
.then(r=>alert("data inserted"))
  }

  function handleedit(e){
    const{name,value}=e.target
    seteditdata({...editdata,[name]:value})
  }
   function editfinalsubmit(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/student/${editdata.id}`,editdata)
    then(r=>alert("updated"))
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
                <td><button onClick={()=>{setshwfrm(true),seteditdata(e)}}>EDIT</button></td>
          </tr>
          </>
        })
      }
    </table>

    <h1>Insert Form</h1>

    <form action="" onSubmit={datasubmit}>
      <label htmlFor="">Name</label>
      <input type="text" onChange={insertInp} name='name'/> <br></br>

      <label htmlFor="">Age</label>
      <input type="text" onChange={insertInp} name='age'/> <br></br>

      <label htmlFor="">Contact</label>
      <input type="text" onChange={insertInp} name='contact'/> <br></br>

      <label htmlFor="">City</label>
      <input type="text" onChange={insertInp} name='city'/> <br></br>

      <input type="submit" />
    </form>

    <h1>  EDIT FROM</h1>

            {shwfrm &&(

    <form action="" onSubmit={editfinalsubmit}>

<label htmlFor="">ID</label>
<input type="text" name="id" value={editdata.id} onChange={handleedit} /> <br></br>


    <label htmlFor="">NAME</label>
    <input type="text" name="name" value={editdata.name} onChange={handleedit} /> <br></br>

    <label htmlFor="">AGE</label>
    <input type="text" name="age" value={editdata.age} onChange={handleedit} /> <br></br>

    <label htmlFor="">CONTACT</label>
    <input type="text" name="contact"   value={editdata.contact}   onChange={handleedit} /> <br></br>

    <label htmlFor="">CITY</label>
    <input type="text" name="city"  value={editdata.city} onChange={handleedit} /> <br></br>


    </form>
       )}
    <input type="submit"></input>
    </>
  )
}

export default App
