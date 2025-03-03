import React, { useState } from 'react'
const Form =()=>{
    let [Formdata , setFrmdata] = useState({
       username:"",email:"",password:""  } )


    function inpchange(e){
const {name,value} =e.target
  setFrmdata({...Formdata,[name]:value})

        // console.log(e.target.value);
        // setFrmdata(e.target.value)
    }
      function finalsubmit(e){
           e.prevenDefault()
           console.log(Formdata);
        localStorage.setItem("userdata", JSON.stringify(FormData))

      }
       

    return (
        <>

     <form action="" onSubmit={finalsubmit}>

       <label htmlFor="">username</label>
      <input type="text" name='username' onChange={inpchange} /> <br/>

      <label htmlFor="">password</label>
      <input type="text" name='password' onChange={inpchange} /> <br/>


      <label htmlFor="">email</label>
      <input type="text" name='email' onChange={inpchange} /> <br/>


<input type='submit'/>
     </form>
       

        {/* {frmdata}
        <input type="text"  placeholder ='ENTER YOUR NAME ' onChange={inpchange} /> */}
        </>
    )
}
export default Form;
