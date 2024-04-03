console.log("1. Reverser String")

let k = ""
function rev(a) {
    for (i = a.length - 1; i >= 0; i--) {
        k += a[i]
    }
    console.log(k)
}
rev("codecode")


console.log("2. Prime Number")

var ab = (prim) => {
    for (var i = 2; i < prim; i++) {
        if (prim % i === 0) {
            return false
        }
        return true
    }
}
console.log(ab(3))


console.log("3. TO make large value")

var abc = (setOfArray) => {
    return setOfArray.reverse().join("")
}
console.log(abc([54, 546, 548, 60]))


console.log("4. Print reverse of number")

var abcd = (reveNum) => {
    let k = ""
    for (var i = reveNum.length - 1; i >= 0; i--) {
        k += reveNum[i]
    }
    console.log(k)
}
abcd("988")


console.log("5. Find max and min")

var abcde = (max_min) => {
    var max = Math.max(...max_min)
    var min = Math.min(...max_min)
    console.log(max, min)
}
abcde([54, 546, 548, 60])