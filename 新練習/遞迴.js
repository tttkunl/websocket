// function fib(n){
//     if (n===1){
//         return 1;
//     }if (n===2){
//         return 1;
//     }
//     return fib(n-1)+fib (n=1)
// }
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(43))
// console.log(fib(5))

// function great(){
//     console.log("jhello");
// }
// const getat2 = ()=>{
//  console.log("hello")
// };
// function sum(a,b){
//     return a+b;
// }
// function printresult(x,y,fn){
//     console.log(`result:${fn(x,y)}`)
// }

// printresult(10,25,sum)
// printresult(10,25,(a,b)=>a+b); //變數=>回傳數值


function exp(){
    console.log(":::")
}

const exp2 =()=>{
    console.log("happy")
}

function sup(a,b){
    return(a-b)
}
function fianl(x,y,w){
    console.log(`result ${w(x,y)}`)
}

fianl(25,10,sup)
fianl(40,25,(a,b)=>a-b)