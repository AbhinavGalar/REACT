import React from "react";

const Product =()=>{
    let cards =[{
        id:1,name:"laptop",price:12000,pimg:myimgage
    },
    {
        id:1,name:"laptop",price:4000,pimg:myimgage
    }

]

return (
    <>
     <h1>cart item - 0 </h1>
    <div>
       {
        cards.map((e)=>{return <div style={{border:"2px solid black" }}>
         <img src={e.pimg} alt=""/>
         <h2>product name{e.name}</h2>
         <h3>price{e.price}</h3>
         <button >Add to cart </button>

        
    
    
    </div> })
  



       }




    </div>
    </>
)

}