import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Login= () =>{
     let [logindata , setlogindata]= useState({
            username:"",password:""
        })

        let[signdata ,setSign]= useState("")

        let Navigator=useNavigate()

        function Lginp(e){
            let {name,value} = e.target
            setlogindata({...logindata,[name]:value})

        }
        function Loginfinal(e){
            e.preventDefault()
            if(signdata.username != logindata.username || signdata.password !=logindata.password){
                alert("user not found")
            }
            else{
                Navigator('/home')
            }
        }

        useEffect(()=>{
            let signdataa=JSON.parse(localStorage.getItem('userdata'))
            setSign(signdataa)
        },[])
    return(
        <>
        <h1>Login page</h1>
        <form action="" onSubmit={Loginfinal}>
            <label htmlFor="">Username</label>
            <input type="text" name="username" onChange={Lginp}/><br/>

            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={Lginp}/><br/>

            <input type="submit" />

        </form>
        </>
    )

}
export default Login
