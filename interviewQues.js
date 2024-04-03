//calcula sum of 2 num
function sumOfTwoNum(a,b){
  return a+b
}
console.log(sumOfTwoNum(10,5))

// find max num in array
let a=[8,3,5,1,2,4]
function finMaxNum(a){
 return Math.max(...a)  // rest operator
}
console.log(finMaxNum(a))

// palindrom ---> the word can read forward and backward become same "num,string..."
var b="racecar"
function palin(b){
    return b.split("").reverse().join("")
}
console.log(palin(b))

// only even num
// let evenNumber =(eveNum)=>{
//     let insertEve =[]
//     for(var i=1;i<=eveNum.length;i++){
//        if(eveNum[i] % 2==0){
//          insertEve.push(eveNum[i])
//        }
//     }
//     return insertEve
// }
// let eveNum = [7,4,2,9,0,1,6]
// console.log(evenNumber(eveNum))

// let num41=[5,6,"aj",[0,6,7,8]]
// var [p,,q,[,,r]]=num41
// console.log(p);

num=[5,7,6,8,4,12,15]
let even=num.filter((el)=>{
    return el % 2==1
})
console.log(even)













