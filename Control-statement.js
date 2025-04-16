/* Condition=====> it's used to excute the code whether based on conditions 
 if,else,nested if,else if */

let pwd_correct=true
if(pwd_correct){
    console.log("login")
}
else{
    console.log("check your pass")
}

age=20;
if(age<25){
    console.log(true)
}
else{
    console.log(false)
}

 console.log("----------Nested if---------------")

 var age=19, weight=43;
 if(age>=18){
    if(weight<=48){
        console.log("able to donate")
    }
    else{
        console.log("Not able to donate due to low weight")
    }
 }
 else{
    console.log("not able to donate the blood due to min age")
 }

 

console.log("-----------ELSE if----------")

var a=100,b=200,c=1000
if(a>b && a>=c){
    console.log("A is greater")
}
else if(b>a && b>c){
    console.log("B is greater")
}
else{
    console.log("C is greater")
}

console.log("-----------Switch------------")
 
var amount=9000;
 switch (true) {
    case amount > 60000:
        console.log("buy iphone")
        break;
    case amount > 10000:
        console.log("buy androide")
        break;
    case amount > 5000:
        console.log("basic phone")
        break;
    default:
        console.log("earn money")
        break;
 }





