async function fetchData(){
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await res.json()
        console.log(data);
       data.map((user)=>console.log(user.address.city))
       data.map((user)=>console.log(user.email))
    }
    catch(error){
        console.log(error)
    }
}
fetchData()
   