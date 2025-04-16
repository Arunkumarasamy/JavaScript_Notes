
// console.log("----------forEach-------------")//It's used to invoke the specificed function once forEach array element

// var f=["arun","aravindth","jeeva"]
// var s=f.forEach(output)               // previesly call function name
// function output(value){
// 	console.log(value)
// }
// //console.log(s)

// console.log("------map---------") // It's creating new array from calling function for every arry element, it's does n't execute function for empty arr element

// var g=[12,34,56,78]
// let mp=g.map(as)      // as==> function name
// function as(value){             // return the new value
// 	return value+2
// }
// console.log(mp)

// let maps=g.map((mapValue)=>mapValue+1)  // map method call by arrowFunction 
// console.log(maps)

// var h=[{ name:"axxn",age:22},
//            { name:"axun",age:23},
//            { name:"arxn",age:24},      //  array of object using arrow function
//            { name:"arun",age:25}]
//   var mp1=h.map( indiualcheck => indiualcheck.mp1)
//   console.log(mp1)


// console.log("-----------Filter----------")

//   let i=[2,4,5,6,7,8,9]
//   var fl=i.filter(value)
//   function value(a){
// 	  return a<7;                //  return new array and check the indiual value
//   }  
//   console.log(fl)

//   var fa=i.filter( checkvalue => checkvalue<6)
//   console.log(fa)              //  arrow function

function fName(a, b) {
  c = a + b;
  console.log(c)
}
fName(10, 2)

console.log("------wo-------")

function fName1() {
  a = 2;
  b = 3;
  c = a ** b
  console.log(c)
}
fName1()

console.log("-----wr-----")

function fName2(a, b) {
  c = a + b
  return c
}
console.log(fName2(7, 2))


console.log("---anounu---")

var anoun = function (a, b) {
  a = 13;
  b = 3;
  c = a / b
  console.log(c)
}
anoun()


console.log("---arr0w--")

var arro = (a, b) => {
  c = a % b
  return c
}
console.log(arro(15, 2))


console.log("---forEach---")

var forea = [1, 3, 4, 5, 8, 90, 3]
var fe = forea.forEach(fnam)
function fnam(elem, index, array) {
  console.log(index + "--->", elem)
}


console.log("---filter---")

var fil = [2, 4, 7, 13, 90, 5, 3]
var fi = fil.filter(fnam1)
function fnam1(ele, ind, arr) {
  return ele > 5;

}
console.log("filter----->",fi)
var summa = fil.filter((ele, ind, arr) => ele % 2 == 1)
console.log("---->",summa)


console.log("--map--")

var mp = [3, 5, 6, 8, 9, 1]
var callMp = mp.map(fnam2)
function fnam2(ele, ind, arr) {
  return ele + 2
}
console.log(callMp)


var dummy = mp.map((ele, ind, arr) => {
  return ele / 2
})
console.log(dummy)

console.log("---reduce---")

var r = [3, 4, 2, 65, 7, 8]
var re = r.reduce((acc, cur) => {
  if (cur % 2 == 0) {
    return acc + cur
  }
  return acc
})
console.log(re)


console.log("----For in----")

let obj = {
  name: "axxn",
  dep: "mech",                     // work depend on object
  ["pass out"]: 2023
}
for (o in obj) {
  x = obj[o]
  console.log("for in ",x)
}

console.log("---For of----")
let arr = [9, 4, 5, 7, 2]
for (forOF of arr) {
  console.log("for of",forOF)
}

console.log("-----")
inp = 12345
nu = inp.toString()

for (i = 0; i < nu.length; i++) {
}
console.log(i)

var numb = 10
var numb1 = 20

[numb, numb1] = [numb1, numb]

console.log(numb)

console.log("-------------")
const cars = ["hellow", "hi"];

let text = "";
for (let x of cars) {
  text = x;
  console.log(x)
}

// const ages = [3, 10, 18, 20];

// ages.some(checkAdult); 
// function checkAdult(age) {
//   return age > 18;
// }
// console.log(ages)



console.log("------restOperator----------")
let num5=["h","i","j","k"]
let [z,...num51]=num5             // Reset operator
//console.log(u);
console.log(num51);


console.log("----spreadOperator--------")
let num6=[1,"M",2,"done",0]
let num61=[3,4,5,6,7];               // return new value and attach variable
const result=[...num6,...num61]
console.log(result)

console.log("--------Pattern loop-----------")

for(var o=1;o<=5;o++){
    let pr="";
    for( var i=1;i<=o;i++ ){
      pr +="*";
    }
    console.log(pr)
}

// let u=5;
// let proSta=""
// for(var i=0 ;i< u ;i++){
//     for(var j=0 ;j<i ;j++){
//         proSta+= " ";
//     }
//     for(var k=0 ;k<2*(u-i)-1 ;k++){
//         proSta+= "*";  
//     }
//     proSta+= "\n";
// }
// console.log(proSta)

// a=12
// while(a){
//   a++
//   console.log(a)
// }

function fn(hi){
  var start=hi.filter((val)=>{
    return val < 5
  })
  console.log(start)
}
fn([10,2,3,4,5,9])