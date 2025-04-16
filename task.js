// 1
let k = ""
function rev(a) {
    for (i = a.length - 1; i >= 0; i--) {
        k += a[i]
    }
    console.log("reverse-------->",k)
}
rev("wolleh")

// 5
function redu(a) {
    var sum = a.reduce((acc, curr) => {
        return acc + curr
    })
    console.log("reduce-------->",sum)
}
redu([2, 3, 5, 7, 90])

// 6
function removeDub(a) {
    var res = [...new Set(a)]
    console.log("remove dou num-------->",res)
}
removeDub([5, 6, 7, 5, 4, 3, 3, 3, 5])

// 8
var a = (char) => {
    let spliStrinChar = char.split("")
    let storChar = [...new Set(spliStrinChar)].join("")
    console.log("remove doub-------->",storChar)
}
a("array")

//9---> prime num
var ab = (prim) => {
  for( var i=2;i<prim;i++){
   if(prim % i===0){
    return false
   }
   return true
  }   
}
console.log("prime num-------->",ab(11))

// ---> fibonacSeries
var fb = (fibon) => {
    var store = []
    let a = 1, b = 2;
    for (var i = 1; i <= fibon; i++) {
        store.push(a)
        let templ = a + b
        a = b
        b = templ
    }
    console.log("fibonac series-------->",store)
}
fb(5)

f=0;
s=1;
count=0;
function func(num,count=0){
    if(count>=num){
        return;
    }
    console.log(f);
    [f,s]=[s,f+s];
    func(num,count+1)
}
func(7)

// ---> factorial
function fact(value) {
    let res = 1
    for (var i = 1; i <= value; i++) {
        res = res * i
    }
    console.log("factorial num-------->",res)
}
fact(5)

//---> leap year
function leap(year){
    if(year % 4==0){
        console.log(year+"-->leap year")
    }
    else{
        console.log(year+"-->not a leap year")
    }
}
leap(2020)

// --> random passs
function rand(leng){
    var char="asdfghjkqwertyuiomnbvcxzASDFGHJKLZXCVBNMWERTYUIOP1234567890"
    store=""
    for(var i=1;i<=leng;i++){
        if(i<0){
            console.log("Not a neg")
        }
        else{
            var form=Math.floor((Math.random())*char.length)
            store+=char[form]
        }        
    }
    console.log("random pass--------->",store)
}
rand(5)

//Otp
function otp(count){
    let otp='';
    for(i=0;i<count;i++){
      otp+=Math.floor(Math.random()*9)
    }
    console.log("generate otp------->",otp);
  }
  otp(5);