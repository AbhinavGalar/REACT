import React, { useContext } from "react";
import { cdata } from "./Child1";


const Child5=()=>{
    let data= useContext(cdata)
    return(
        <>
      {/* <h1>my data is {data}</h1> */}
      <h1>my data is as an object {data.name} and {data.age}</h1>

        
        </>
    )
}
export default Child5

{/* <cdata.Consumer>
        {
            (data)=>{
                return (
                    <>
                    <h1> my name is {data}</h1>
                    </>
                )
            }
        }

        </cdata.Consumer> */}