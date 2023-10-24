//let saniye= 0;
//function func(){
    //console.log(saniye++);
    //console.log(saniye);
    //if(saniye===300){
        //clearInterval(intervalId);
    //}
//}
//const intervalId= setInterval(func, 1000)

let count = 0
let sec = 0
let min = 0
function func(){
    console.log('m',min,'s',`${sec<10 ?'0':''}${sec}`)
    count++
    sec++
    if(sec==60){
        sec=0  
        min++
    }
    if(count===300){
        clearInterval(intervalId)
    }
}
const intervalId = setInterval(func,1000)
console.log('basladi')
console.log("m 5")
