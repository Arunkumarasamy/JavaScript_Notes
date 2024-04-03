console.log("----------toString-------------")
var l="welcome buddy"
console.log(l.toString()) 

console.log("----------chartAt-------------") // It's used to find char value of present at specified index

var a="welcom"                    // work based on index
console.log(a.charAt(0))
console.log(a.charAt(2))

console.log("---charcodeAt---") // It's used to find uni-code(askey) value of specified character

var b="every one"
console.log(b.charCodeAt(2))    
console.log(b.charCodeAt(5))

console.log("-----------Index of----------")

var c="string"                    // call the letter the index ll'e output
console.log(c.indexOf("r"))
console.log(c.indexOf("g"))

console.log("--------LastIndexof--------")

var d="lastindexof"
console.log(d.lastIndexOf("d"))
console.log(d.lastIndexOf(""))

console.log("-----------Concat-------------")

var e="java"
var f="script"             // add the value
console.log(e.concat(f))

console.log("------------Search------------")

var g="love you"
console.log(g.search("e"))
console.log(g.search(/You/i))   //if call value uppercase mean using [/r/i]

console.log("------------Match-------------")
//     0123456789112345
var h="hellow every one"        //  given i/p starting index 
console.log(h.match("one"))

console.log("------------Replace-------------")

var i="love you"          // replace words
console.log(i.replace("you","U"))

console.log("-----------Substr-------------")

var j="hellow learners"           // print index to index
console.log(j.substr(2,7))

console.log("-----------Substring--------------")
//       234567   
var k="roYal MechanicAl"       // start with index and end with [end value-1]
console.log(k.substring(2,10))

console.log("-----------Slice--------------")

console.log(k.slice(2,10))    // similar to substring

console.log("----------toUpper case---------------")

console.log(k.toUpperCase())
console.log(k.toLowerCase())

console.log("------------Split-------------")

var m="arun"                // split the value
console.log(m.split(""))
console.log(m.split("u"))

console.log("------------Trim-------------")

var n="            love              "
console.log(n.trim(""))
console.log(n)

