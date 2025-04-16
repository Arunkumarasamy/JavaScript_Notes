//  looping statement--------> It's used to iteration the pieces of code , it's make code compact

console.log("---------For loop-----------")
                        // Iterate the elements fixed for fixed num of times
for(var i=1;i<= 10;i++){
   console.log(i)   
}

console.log("-------While loop-------------")
                 // Iterate the elements for infinity num of times
 var a=10;
 while (a<=15) {
    console.log(a)
    a++;
 }

console.log("---------Do while---------")
var a=11;
do {
   console.log(a);
   a++; 
} while (a<10);


console.log("--------Nested loop-----------")

for(i=1;i<=3;i++){
    let p="";
   for(j=1;j<=3;j++){
   p+=i;                   // Process standout
   }
   console.log(p)
}

console.log("--------Pattern loop-----------")

for(var o=1;o<=5;o++){
    let pr="";
    for( var i=1;i<=o;i++ ){
      pr +="*";
    }
    console.log(pr)
}

console.log("------------------------------")

for(var ot=1;ot<7;ot++){
    let pro=" ";
    for(var it=1;it<=7-ot;it++){
        pro +="*";
    }
    console.log(pro)
}

console.log("---pyrimed----")

var inp =5
var pro="";
for(var i=inp;i>=0 ;i--){
    for(var j=1;j<=inp-i;j++){
        pro +=" "
    }
    for(var k=0;k<i-1;k++){
        pro +=" *"
    }
    pro +="\n";
}  
console.log(pro)  



let x=5;
let proSta=""
for(var i=0 ;i< x ;i++){
    for(var j=0 ;j<i ;j++){
        proSta+= " ";
    }
    for(var k=0 ;k<2*(x-i)-1 ;k++){
        proSta+= "*";
    }
    proSta+= "\n";
}
console.log(proSta)


console.log("---------Break----------")

/* while(true){
var s=Number(prompt("enter num"))
if(!isNaN(s))                          //NaN=====>not a number
break
} */

console.log("--------Continue------------")

for(var i=1;i<=20;i++){
    if(i%2==0)
    continue                            // skip the current iteration
    console.log(i)
} 

console.log("-----------For in-------------")

let obj={
    name:"axxn",
    dep:"mech",                     // work depend on object
    ["pass out"]:2023
}
for(let o in obj){
    console.log(o)
}


console.log("---------For of---------")
// it can iterate the data struture such as "Array","string","map"...etc

let frnds=["aravindh","kishor","nishanth"]
for(let a of frnds){            //  work depend on array
console.log(a)
}