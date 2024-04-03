/* operators ==> Arithamtice, Relation ,Logical ,Comper ,Ternary  */

console.log("------Arithamatic------")
// add
console.log(10+2)
// sub
console.log(10-2)
// mul
console.log(10*2)
                      // div questant    o/p----> 5
console.log(10/2)
                     // this reminder    o/p----> 0
console.log(10 % 2)
                     // squar root
console.log(5**2)

console.log("-----Relation--------")

console.log(10<5);
console.log(10>5);
console.log(10<=10);
console.log(10>=10)

/* Compar--------> not equal(!=) , equal or compar(==) , trible(===) is used to compar and check method */
console.log("--------Compar----------")

// Not equal
console.log(10!=9)
console.log(10!=10)

// Compar
console.log(10==10)
console.log(10==9)

// trible ===
console.log("10"===10)
console.log(10===10)

/* Logical----------> AND(&&) , OR(||)  */

console.log("-----------AND operator------------")
var age=18 ,idcard=2
if(18<=age && 1==idcard){
    console.log("Eligible to vote")
}
    else{
        console.log("Not eligible ")
    }

 console.log("---------OR operator------------")
 
 var age=15 , height=100
if( age<=10 || height>=70){
    console.log("half ticket")
}
else{
    console.log("full ticket")
}


/* Ternary operator-------->  A condition followed by question ? mark , If condition's truth followed by ":"  */
console.log("-------Ternary operator-------")

var age=20;
var a=(age>=18) ? "able to vote" : "Not able to vote"
console.log(a)

// remove duplicate value
console.log("---------duplicate--------")

let set="arrangemarriage"
let spl=set.split('')             //"new split" is keyword using restoperator
let rx=[...new Set(spl)]
console.log(rx)