import { useState } from "react"

function List (){

     let [data,setdata]=useState(" ")

     function clear (){
        fetch(` http://localhost:5173//${id}`,{
        })
        .then(r=>alert("data deleted  "))
         




     }

    return (
        <>
        <h1>make list </h1>
    
        <input type="text" placeholder="enter your task">
        <button onClick={add}>ADD</button>
        
        <button onClick={clear}>clear </button>
        
        </input>
        </>
    )
}
export default List 