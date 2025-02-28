import React from "react";
import { cdata } from "./Child1";

const Child5=()=>{
    return(
        <>
        <cdata.Consumer>
        {
            (data)=>{
                return (
                    <>
                    <h1> my name is {data}</h1>
                    </>
                )
            }
        }

        </cdata.Consumer>
        </>
    )
}
export default Child5