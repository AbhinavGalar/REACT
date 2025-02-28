import React from 'react'
import { createContext } from 'react'
import Child4 from './Child4'
let cdata= createContext()
let age=19

function Child1(){
    return(
<>
<cdata.Provider value={age}>
<Child4/>
</cdata.Provider>
</>

    )
}
export default Child1
export {cdata}