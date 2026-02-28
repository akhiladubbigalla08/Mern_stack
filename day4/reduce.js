let arr=[1,2,3,4,5,6]
let sum=arr.reduce((total,curr)=>{return total+curr},1)
console.log(sum);
let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:20000},
     {id:3,name:'cikkie',price:30000},
]
let sump=products.reduce((total,currp)=>{return total+currp.price},1)
console.log(sump);