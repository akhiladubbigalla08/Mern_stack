let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:20000},
     {id:3,name:'cikkie',price:30000},
]
let product=products.filter((p)=>p.price>20000)
console.log(product)