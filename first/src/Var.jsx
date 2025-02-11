function Var(){
    let name="Abhinav";


    let person={
        fname:"abhinav",
        lname:"galar",
        age:19
    }


    function fun(){
        alert("workinggggg")
    }


    function fun1(a){
        return a+a
    }
  let name1=prompt("enter your name")
    return (
        <>
        <h1>my name {name}</h1>
        <h1>my first name is{person.fname}</h1>
        <h1>my last name is{person.lname}</h1>
        <h1>my age  is{person.age}</h1>
         {fun()}
       {fun1(10)}
        </>
    )
}
export default Var