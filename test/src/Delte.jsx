function mydelete(id){
    console.log(id);
    fetch(`http://localhost:3000/emp/${id}`,{
        method:'DELETE'
    })
    .then(r=>alert("Deleted...!!"))
 }