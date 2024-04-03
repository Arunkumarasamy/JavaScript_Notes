// console.log("-----------For of-------------")

// let frnds=["aravindh","kishor","nishanth"]
// for(let a of frnds){            // work depend on array
// console.log(a)
// }

// console.log("---------For in---------")

// let obj={
//     name:"axxn",
//     dep:"mech",                     // work depend on object
//     ["pass out"]:2023
// }
// for(let o in obj){
//     console.log(o)
// }

// console.log(a)
// var a="Aeiou";


// console.log(typeof(null))
// console.log(typeof(NaN))
// console.log(typeof(BigInt))

// copyWithin()
//      0 1 2 3 4  
let ak=[1,2,3,4,5]
 var copy=ak.copyWithin(3,1)
 console.log(copy)

 // fill
var ab=[1,2,3,4,5,6,7]
var f=ab.fill(0,1,3)
console.log(f)

// reduce--> iterate
 var num=[3,6,9,15,12,18]
 var sum=num.reduce((val,ind)=>{
    return(val+ind)
 })
console.log(sum)
console.log("------------")

// findIndex

var e=[2,4,5,3,7,2,9,1]
var store=e.findIndex((val)=>{
  return val  %2 === 1
})
console.log(store)

// from

var f={0:'a',1:'b',2:'c',3:'d',4:'c',length:2}
var v=Array.from(f)
console.log(v)

// of

let newArray=Array.of(1,2,3,4,5)
 console.log(newArray)

// continous

for(var i=1;i<=20;i++){
  if(i% 2==1)
  continue                            // skip the current iteration
  console.log(i)
} 

console.log("---------")
// forEach

var num=[9,0,8,0,3,8,4,2,5,4]
var method_for=num.forEach(fname)
function fname(value){
  console.log(value)
}

// check index value exist using include()

var fname=(arr,value)=>{
  return arr.includes(value);
} 
var array=  ["alan","spiderMan","xMan"]// [1,2,3,5,3,7]
var checkVal= "xMan"
console.log(fname(array,checkVal))

// fun return squar num

function fName(num){
  let squ=Math.pow(num,2)    // num**2
  return squ;
}
console.log(fName(5))

// division by 2 num

function diviName(a,b){
 return c= a/b
}
console.log(diviName(10,2))

var diviname=(a,b)=>{
  if(a!==0){
    return a/b
  }                        // using if condition
  else{
    console.log("0 can't divided")
  }
}
console.log(diviname(30,3))

// convert string to uppercase

function strCon(val){                      
  return val.toUpperCase()
}
console.log(strCon("suresh"))


console.log ("-----reminider division-----")

function remin(a,b){
  return a%b
}
console.log(remin(10,4))

var remin1 = (a,b)=>{
  if( a === 0){
    console.log("some value 0")
  }
  else{
    return a % b
  }
}
console.log(remin1(10,3))

// concat two String

function str(st1,st2){
  return st1 + st2
}
console.log(str("hi","bye"))


console.log("----Sort method------")

var sor= (val)=>{
return val.sort()
}
let arr=[9,8,7,6,5,4]
console.log(sor(arr))

// calcu area of circle given radius

function cal(radius){
 if(radius < 0){
  console.log("not zero")
 }
 else{
  return Math.PI * Math.pow(radius,2)   // power value -->2
 }
 }
 console.log(cal(2))

 
 console.log("-----higher order----")

 function add(a,b){
  return a+b
 }
 function sub(a,b){
  return a-b 
 }
 function fun(a,b,sum){                 // syntx
  return sum(a,b)
 }
 console.log(fun(20,10,sub))


 console.log("---------clourse fun---------")  // access to it own scope, outer scope, global scope

function outerFun(){
  var outVar="hellow";
  function innerFun(){
    console.log(outVar)
  }
  return innerFun
}
var closure =outerFun();
closure()

console.log("---------")

// // call back

// function calBack1(c){
//   setTimeout(()=>{
//     console.log("callBack1")
//     c()
//   },1000)
// }
// function calBack2(c){
//   setTimeout(()=>{
//     console.log("callBack2")
//     c()
//   },2000)
// }
// function calBack3(callback){
//   setTimeout(()=>{
//     console.log("callBack3")
//   },2000)
// }
// calBack1(()=>{
//   console.log("wrk1");
//   calBack2(()=>{
//     console.log("wrk2");
//     calBack3(()=>{
//       console.log("wrk3")
//     })
//   })
// })


// recursion fun

function recur(fibone){
  if(fibone <= 1){
    return fibone;
  }
  else{
    return recur(fibone-1)+ recur(fibone -2)
  }
}                   // the process of calling it's self
console.log(recur(10))  


console.log("-------use strict-------")

this.name="kill"
function strt(){
  console.log(this)
}
strt()