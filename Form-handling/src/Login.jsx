function Login(){
 let [Logindata , setLogindata] = useState({
    username:"",password:""
 })
 function lginp(e){
    let {name,value} = e.target
    setLogindata({...Logindata,[name]:value})
 }
    return(
        <>
        <form action="" onSubmit={loginfinal}>

<label htmlFor="">username</label>
<input type="text" name='username' onChange={lginp} /> <br/>

<label htmlFor="">password</label>
<input type="text" name='password' onChange={lginp} /> <br/>


</form>
        </>
    )
}
export default Login