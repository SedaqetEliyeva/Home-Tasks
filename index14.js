const num=24;

let result="";

for(let i=2; i<num; i++){
    if(!(num%i)){
        result=num/i;
        break;
    }
}
console.log(result);