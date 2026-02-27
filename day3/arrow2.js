function add(a,b){
    console.log(a+b)
}
const sub=(a,b)=>{console.log(a-b)}
const mul=(a,b)=>{console.log(a*b)}
const calc=(a,b,fun)=>{
    fun(a,b)
}
calc(4,3,add)