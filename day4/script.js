let arr=[1,2,3,4,5,6]
const addone=(num)=>{return num+1}
let res=arr.map(addone)
let double=arr.map((num)=>num*2)
console.log(double)
let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:20000},
     {id:3,name:'cikkie',price:30000},
]
let productName=products.map((product)=>{console.log(product.name,product.id,product.price)})
let b=arr.filter((num)=>num>3)
console.log(b)
let c=arr.filter((num)=>num%2==0)
console.log(c)
