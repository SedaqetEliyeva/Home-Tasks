const arr= [4, 8, 7, 10, 11]

const tek= []
const cut= []

for(i=0; i<arr.length; i++){
    if(arr[i]%2){
       tek.push(arr[i])
    }
    else{
        cut.push(arr[i])
    }
}

console.log(tek, cut)