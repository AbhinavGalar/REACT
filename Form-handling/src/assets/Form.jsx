import React, { useState } from 'react'
const frm =()=>{
    let [frmdata , setFrmdata] = useState(" ")
    function inpchange(e){
        console.log(e.target.value);
        setFrmdata(e.target.value)
    }

    return (
        <>
        {frmdata}
        <input type="text"  placeholder ='ENTER YOUR NAME 'onChange={inpchange} />
        </>
    )
}
export default frm;