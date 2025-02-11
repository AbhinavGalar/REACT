function Var(){
    let con={
        name: "John",
        city:"itarsi",
        age:19,
    }

function Call(a,b){
    return a+b;
}
function fun(){
    alert("hello")
}


    return (
        <>


        <h1>my name is {con.name}</h1>
        <h1>my address {con.city}</h1>
        <h1>my age is  {con.age}</h1>
           {Call(10,20)}
           {fun()}

           
        </>
       

    )
}
export default Var