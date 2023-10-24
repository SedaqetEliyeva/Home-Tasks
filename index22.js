// function Fibonachchi(n){
//     let a=1;
//     let b=1;
//     for(let i=3; i<=n; i++){
//         let c=a+b;
//         a=b;
//         b=c;
//     }
//     return b;
// }

// console.log(Fibonachchi(5));





function fibonascci(a){
    if(a<=1){
        return a;
    }
    return fibonascci(a-1)+fibonascci(a-2);
}

console.log(fibonascci(a=6));