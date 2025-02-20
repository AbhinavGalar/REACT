 import { useState } from "react";

 function state (){
    let [c,setc]= useState({

        name:"abhinav",
        age:20,
        city:"bhopal"
    })

    return (
        <>
        <h1>my nae is {c.name}</h1>
        </>
    )
 }
 export default state