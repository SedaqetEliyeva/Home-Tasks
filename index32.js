const arr=[7, -5, 9, 63]

const max=Math.max(...arr)
const min=Math.min(...arr)

const maximum=max
const minimum=min

for(i=0; i<arr.length; i++){
    if(arr[i]>maximum){
        arr[i]=maximum
    }
    if(arr[i]<minimum){
        arr[i]=minimum
    }
}
console.log(maximum, minimum)