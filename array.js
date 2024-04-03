/* Non-primitive----b) arry====> It's represent group of similar value
                     []it's can wrk depend on index num like 0,1,2,3.... */

var arr=["abcd",22,"xoxox",0.93];
console.log(arr);

//  get====>particular value 
console.log(arr[1]);
//  replace====> the value 
arr[2]="arun"
console.log(arr);

/* toString======>this method is return to string and also remove []box*/

let a=["ad",2,"x",0];
var ts=a.toString();
console.log(ts)

/* join======> it's return type and also joining all array element into string string */

let b=arr.join("@,")
console.log(b);

/* concat====> it's creating new arrary by merging */ 

let c1=[10,20,30,40]
let c2=[50,60,70]
let c3=[80,20,40]
console.log(c1.concat(c2,c3))

/* pop========>remove the last element into array  */
let array=[99,33,22,44,55,11,0,77]
 let pp=array.pop();
 console.log(array);
 
 /* push============>Added new Element at the end and return the new length */
 let ps=array.push(100,"as")
 console.log(array);
 
 /* shift============>remove the 1st Element and It's not a return value */
 let sh=array.shift();
 console.log(array);
 
 /* unshift===============> the element added into beginning at the array and return the new lenfth*/
 let us=array.unshift(24,"ajs")
 console.log(array);
 

console.log("------------splice-------------")// It's add new item into array, work based on element and it's used to delete ,replace and insert

 var d=[2,4,6,8,10,12,14,16] // Element
let sp=d.splice(4,2)
console.log(d); // this is delete element 

let sp1=a.splice(2,1,"a")
console.log(d);  // replace

let sp2=d.splice(3,0,7,"arun")
console.log("inser-->"+d);   // insert


console.log("-------------slice---------------")

    // 0  1  2  3  4  5  6 ====> index depend wrk
var e=[5,10,15,20,25,30,35]
                 // It's slice out pieces of an array into new length
let sl=e.slice()
console.log(sl);  //It's does n't remove any elemnt from source of an array 

var l=e.slice(4,5) // () arguments      eg:[4-1]      eg: collect the data from particular date to date
console.log(l);   // return the array based on arguments start index and end 



console.log("----Array destured----")

 //  useing array value should be extacts and also extact value gives varible
//-------------------------------------------------------syntex------------------------------------let[var1,var2,var3,var]=array         

// use-case(1)
let num=[1,2,3,4,5];
let[first,second,third]=num
console.log(num[0]);
console.log(num[2]);           
console.log(num[4]);          // call index

// use-case(2)
console.log("----------------")
const num2=[10,20,30,40,50,60];
const[z,x,y]=num2;           // change valu to variable name
console.log(z);
console.log(y);

// use-case(3)
console.log("-------Swap---------")
let firstnam="arun"
let lastnam="k"
let te=firstnam;     //te-arun
firstnam=lastnam;   //arun=k
lastnam=te;         //k=arun
console.log(firstnam,lastnam)

// use-case(4)
console.log("----------------")

const num4=[5,"s",8,9]
const[m,,o,n]=num4;
console.log(m);           // variable take empty space
console.log(o);
console.log(n);

let num41=[5,6,"aj",[0,6,7,8]]
var [p,,q,[,,r]]=num41
console.log(p);
console.log(q)
console.log(r); 

// use-case(5)
console.log("------restOperator----------")
let num5=["h","i","j","k"]
let [u,...num51]=num5             // Reset operator
//console.log(u);
console.log(num51);

// use-case(6)
console.log("----spreadOperator--------")
let num6=[1,"M",2,"done",0]
let num61=[3,4,5,6,7];               // return new value and attach variable
const result=[...num6,...num61]
console.log(result)
