const promise=new Promise((resolve,reject)=>{
    let success=false
    if(success){
        resolve("data recieved successfully")
    }
    else{
        reject("error fetching data")
    }
})
promise.then((data)=>console.log(data)).catch((error)=>console.log(error))
