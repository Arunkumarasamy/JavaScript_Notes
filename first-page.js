/* what ever given in doublecodes"" is show in o/p */
console.log("welcome");

/* keywords 
            This 3 methods are hoisting 
 1. var-------------*both variable name and value are same
        |__________ *under gloable scope hoisting as "undedfined"
 2. let------------variable name not be same , value ll'e same|
                                                              | * under the lexical scope hoisting tempory "deadth Zone"
 3. const-----------is fixed                                  |
*/

// change the value
let a=("hello Js");
a="javascript"
console.log(a);
console.log(typeof(a));

const b=("hellow Js");
console.log(b);

/**promt   is get i/p from user at run time and it allow only string */
                                            //   number(prompt("enter num"))
//prompt("Name:");


/** data type 
 1. primitive dt-----------num,string,bollean,null,undefined
 2. non-primitive dt-------array,object,regular express
 */
/* 2. non-primitive-------a) object ====> {}it's can wrk depend on key and value , keys are not be same */
console.log("----------------Object-----------------");

let object={
    name:"axxxn",
    age:22,
    city:"null",
    address:"undefined"
};

object.qualification ="B.E"  // add the new property
console.log(object);

/** get==method===>particular value */
console.log(object.age);
/** replace==method===> the value */
object.name="as"
console.log(object);
/**delete==method===> the data */
delete object.city
console.log(object);

let obj={
    name:"sxxxxh",
    dep:"cse",
    section:{             // Object and inside object
        secton:1,
        sectin:2,
        sectio:["tamil","english"],
    },
    year:["love",2023]     // inside object we call a Array
}
console.log(obj);

let num={
    frnds: function(){
console.log("aravindth")            //       inside the object we call the function 
    }
}
num.frnds()

console.log("------------Obj_destruture-------------")

//case-1
let objec={key:20,test:30,sample:50}
let {key,...others}=objec
console.log(key);                     // call key value
console.log(others);

//case-2
let obje={
    firstName:"amar",                
    lastName:"k",
    email:"axxxx@gmail.com"
}                                                     // change the key name
let {firstName:fn,lastName:ln,email:axxx}=obje
console.log(fn)
console.log(ln)
console.log(axxx)

// case-3
let firstname,lastname,email;
({firstname,lastname,email}={
    firstname:"fn",
    lastname:"ln",                                 // change the value
    email:"axx"
})
console.log(firstname);

//case-4
let c={firstname:"ajs"}
let {firstname:name}=c                          // replace key value indivual
console.log(name)

console.log("-----Date-----")

let date=new Date
console.log(date)
console.log(date.getDay())              //   Date method
console.log(date.getMinutes())
console.log(date.getMonth()+1)
console.log(date.getFullYear())

console.log("----This-----")

const hi={
    street:"xxx",
    area:"yyy",
    distice:"zzz",
    functionName(){
        console.log(this)          // "This" is key word
    }
}
hi.functionName()

var obj1={hi:"hjk",cghy:"xcfguj"}
var{hi:hellow}=obj1
console.log(hellow)








