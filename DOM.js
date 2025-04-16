// console.log("------DOM--------")
/*   DOM------>Document Object Module When HTML document loaded into browser it's become document object , we can add dynamice content to our web page
                DOM--->Tree struture root elem (HTML)-->(head,body)
                Selecting element---> getElementById ,getElemntByName , getElementByClassName() ,TagName() */

// console.log("------byId------") // there's no name it's o/p "Null"
// function getId(){
//     let a=document.getElementById("firstname").value;
//     console.log(a);
//     let b=document.getElementById("lastname").value;
//     console.log(b)
// }
// console.log("-----byName------") //  it's will return Live nodeList of the element
// function getName(){
//     let C= document.getElementsByName("gender");
//     for(let c of C){
//         if(c.checked){
//         var C_result=c.value               // use only var type 
//         }
//     }
//     console.log(C_result)
// }

// console.log("-----By TagName-----") // it's will return live HTML collection element in matching tag name in order

// function getTagName(){                        // tagName
//     let D=document.getElementsByTagName("p")
//     for(d of D){
//         console.log(d.innerText)
//     } 
// }

// console.log("----byClassName----")  // it's return array like of object of child element with specifice class

// function classname(){
//     let e=document.getElementsByClassName("head3")
//     for(E of e){
//         console.log(E.innerText)
//     }
// }

// console.log("------QuerySelector -----") // this method of element interface this allow u to select the 1st element that match one or more in css selector

//   function qSelector(){
//        let f=document.querySelector("p")
//        console.log(f)
// }
// console.log("----QuerySelectorAll----")
// function qSelector(){
//     let g=document.querySelectorAll("b")
//     console.log(g)
// }

// console.log("----Manipulating-----")

// function CreatElement (){                        // it's return new node with element type
//     let I=document.createElement("i")
//     I.id="aj"+new Date().getUTCMilliseconds()       //CreatElement 
//     I.innerText="welcome js"
//     document.body.appendChild(I)
// }

// function CreatElementChild(){
//     let h=document.createElement("div")          //createElement with apendChild
//     let H=document.createElement("h2")
//     h.appendChild(H)
//     H.innerText="Arun"
//     console.log(h)
// }

// console.log("-------RemoveChild-------")
// function removeChild(){
//     let g=document.createElement('h3');
//     g.id="girl"+new Date().getUTCMilliseconds();
//     g.innerText="hi";
//     document.body.appendChild(g);
//     let j=document.removeChild(span)
//     console.log(j)
// }
// function removeMenuChild(){
// let menu = document.getElementById('menu');
// menu.removeChild(menu.lastElementChild);
// }

//  function remove(){
//     let para=document.getElementById('para1')
//     let span=document.getElementById('span')
//     if(span !=null){
//     para1.removeChild(span)
//     }
//  }

// console.log("------Construtor------")

// function construtor(xxx,yyy){
//  this.name=xxx                     // in given paranthesis the value must be same
//  this.course=yyy                // "this" is given to keys and new denotes for stored variable
// }
// let j=new construtor("Arun","MERN STACK")  // "new" keyword is invoked in construtor
// console.log(j);
// j.instute="GT"

// console.log("-----constructorWithClass------")

// class funName{
//  construtor(xxx,yyy){
//     this.num1=xxx;
//     this.num2=yyy;
//  }   
//  add(){                             
//     return this.num1 + this.num2;
//  }
//  mul(){
//     return this.num1 * this.num2;
//  }
// }
// let cal=new funName(10,10);
// console.log(cal.add())

//console.log("-----callBack -----")

// function demoFunction(callback){
//     setTimeout(()=>{
//         callback()
//     },5000)                 // one Function can call
// }
// demoFunction(()=>{
// console.log("dfghj")
// });

// console.log("-----------------------------")

// function demoFunction(callback){               
//     setTimeout(()=>{
//         console.log("Display in one sec")
//         callback()
//     },1000)
// }                                        // callBack
// function functionName(callback){
//     setTimeout(()=>{
//         console.log("Display in 3sec")
//         callback()
//     },3000)
// }                                       // callBackHell
// demoFunction(()=>{
//     console.log("Haa")
//     functionName(()=>{
//         console.log("Aii")
//     })
// })