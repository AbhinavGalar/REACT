import { useState } from "react"

function State (){

    let [bgcolor,setBgcolor]=useState ()
let [tg,setTg]= useState(true)
    return (
     <>
   <div style={{height:"100vh",backgroundColor:bgcolor}}>

    <button onClick={()=>setBgcolor('red')}>red</button>
    <button onClick={()=>setBgcolor('green')}>green</button>4

{tg ?<h1>mobile mt vhalao</h1>: ""}


{/* <button onClick={()=>setTg(false)}>hide</button> */}


{/* <button onClick={()=>setTg(false)}>hide</button>
<button onClick={()=>setTg(true)}>show</button> */}

{tg ?<h1>mobile mt chalaooooo</h1>:""}

{/* <button  onClick={()=>setTg(true )}>hide</button> */}
{/* <button  onClick={()=>setTg(false)}>show</button> */}

{/*    20 /2/on click  button name change  hide to show==== */}
<button onClick={()=>setTg(!tg)}>
  {tg ? "hide":"show"}
</button>

{/* <h1>movile mat chalao</h1> */}
{/* <button onClick={()}>hide me </button> */}
   </div>

     </>
    )
}
export default State